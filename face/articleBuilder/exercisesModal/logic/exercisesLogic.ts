import ExercisesType from '../../../articlesData/exercisesType'
import { EventEmitter } from '../../../utils/eventEmitter'
import { ExerciseChecker } from './ExerciseChecker'
import { ExercisesManagerTypes } from './exercisesManagerTypes'
import AnalysisStatus = ExercisesManagerTypes.AnalysisStatus

class ExercisesLogic {
	store!: ExercisesManagerTypes.Store

	constructor(
		private eventEmitter: EventEmitter,
		private exerciseChecker: ExerciseChecker,
	) {}

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
	changeCurrentExercise(exerciseId: number) {
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

		this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)
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

		this.store.analysis = { status: AnalysisStatus.loading }
		this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)

		// this.store.analysis = await this.exerciseChecker.checkByAI(exercise)
		// this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)
	}

	setExerciseUserTranslate(translateText: string) {
		this.store.currentExercise.userTranslate = translateText

		this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)
	}
}

export default ExercisesLogic
