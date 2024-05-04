import ExercisesType from '../../../articlesData/exercisesType'
import { EventEmitter } from '../../../utils/eventEmitter'
import { TelegramGroup } from '../../../utils/telegramGroup'
import { ExerciseChecker } from './ExerciseChecker'
import { ExercisesManagerTypes } from './exercisesManagerTypes'

class ExercisesLogic {
	chapterName = 'Неизвестно'
	store!: ExercisesManagerTypes.Store

	constructor(
		private eventEmitter: EventEmitter,
		private exerciseChecker: ExerciseChecker,
		private telegramGroup: TelegramGroup,
	) {}

	setChapterName(chapterName: string) {
		this.chapterName = chapterName
	}

	initStore(rowExercises: ExercisesType.Exercise[]) {
		const exercisesWriting = this.convertRowExercisesToStoreExercises(
			rowExercises,
			ExercisesManagerTypes.ExerciseType.write,
			0,
		)
		exercisesWriting[0].isCurrent = true

		const exercisesOral = this.convertRowExercisesToStoreExercises(
			rowExercises,
			ExercisesManagerTypes.ExerciseType.oral,
			exercisesWriting.length,
		)

		this.store = {
			exercisesWriting,
			exercisesOral,
			currentExercise: exercisesWriting[0],
			analysis: { status: ExercisesManagerTypes.AnalysisStatus.hidden },
		}

		this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)
	}

	convertRowExercisesToStoreExercises(
		rowExercises: ExercisesType.Exercise[],
		type: ExercisesManagerTypes.ExerciseType,
		minId: number,
	): ExercisesManagerTypes.Exercise[] {
		return rowExercises.map((rowExercise, i) => {
			return {
				...rowExercise,
				id: minId + i,
				isCurrent: false,
				type,
				userTranslate: '',
			}
		})
	}

	/**
	 * Метод делает текущим упражнением упражнение с переданным идентификатором
	 * @param exerciseId — id упражнения, которое нужно сделать текущем
	 */
	switchToExerciseById(exerciseId: number) {
		let currentExercise: null | ExercisesManagerTypes.Exercise = null

		;[...this.store.exercisesWriting, ...this.store.exercisesOral].forEach((exercise) => {
			if (exercise.id === exerciseId) {
				currentExercise = exercise
				exercise.isCurrent = true
			} else {
				exercise.isCurrent = false
			}

			// Стереть перевод введённый пользователем
			exercise.userTranslate = ''
		})

		if (!currentExercise) return
		this.store.currentExercise = currentExercise
		this.store.analysis = { status: ExercisesManagerTypes.AnalysisStatus.hidden }

		this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)
	}

	switchToFirstWritingExercise() {
		const firstWritingExerciseId = this.store.exercisesWriting[0].id
		this.switchToExerciseById(firstWritingExerciseId)
	}

	switchToFirstOralExercise() {
		const firstWritingExerciseId = this.store.exercisesOral[0].id
		this.switchToExerciseById(firstWritingExerciseId)
	}

	/** Находит следующее письменное упражнение относительно текущего или возвращает undefined */
	getNextWritingExercise() {
		return this.getNextExercise(this.store.exercisesWriting)
	}

	/** Находит следующее письменное упражнение относительно текущего или возвращает undefined */
	getNextOralExercise() {
		return this.getNextExercise(this.store.exercisesOral)
	}

	/** Находит следующее упражнение в массиве упражнений относительно текущего или возвращает undefined */
	private getNextExercise(
		exercises: ExercisesManagerTypes.Exercise[],
	): undefined | ExercisesManagerTypes.Exercise {
		const currentExerciseId = this.store.currentExercise.id

		let nextExercise: undefined | ExercisesManagerTypes.Exercise = undefined

		exercises.forEach((exercise, i) => {
			if (exercise.id === currentExerciseId) {
				nextExercise = exercises[i + 1]
			}
		})

		return nextExercise
	}

	/** Проверяет перевод текущего упражнения на правильность */
	async checkCurrentExercise() {
		const exercise = this.store.currentExercise

		const analysisInLocalDataRes = this.exerciseChecker.checkInLocalData(exercise)

		if (analysisInLocalDataRes) {
			this.store.analysis = analysisInLocalDataRes

			this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)
			return
		}

		this.store.analysis = { status: ExercisesManagerTypes.AnalysisStatus.loading }
		this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)

		const gigaChatAnalysis = await this.exerciseChecker.checkByAI(exercise)

		this.reportAboutUnknownTranslation(exercise, gigaChatAnalysis)

		this.store.analysis = gigaChatAnalysis
		this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)
	}

	reportAboutUnknownTranslation(exercise: ExercisesManagerTypes.Exercise, analysis: any) {
		let analysisText = 'При разборе произошла ошибка'

		try {
			analysisText = analysis.translateAnalysis[0].children[0].text
		} catch (err: unknown) {}

		this.telegramGroup.sendMessage(
			`У главы «${this.chapterName}» появился новый перевод:
Предложение: ${exercise.rusSentence}
Перевод: ${exercise.userTranslate}
Разбор:  ${analysisText}`,
		)
	}

	setExerciseUserTranslate(translateText: string) {
		this.store.currentExercise.userTranslate = translateText
		this.store.analysis.status = ExercisesManagerTypes.AnalysisStatus.hidden

		this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)
	}
}

export default ExercisesLogic
