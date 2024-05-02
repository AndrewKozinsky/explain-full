import ExercisesType from '../../../articlesData/exercisesType'
import { EventEmitter } from '../../../utils/eventEmitter'
import { ExercisesManagerTypes } from './exercisesManagerTypes'

class ExercisesLogic {
	store!: ExercisesManagerTypes.Store

	constructor(private eventEmitter: EventEmitter) {}

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
			}
		})
	}

	pickExercise(exerciseId: number) {
		let currentExercise: null | ExercisesManagerTypes.Exercise = null

		;[...this.store.exercisesWriting, ...this.store.exercisesOral].forEach((exercise) => {
			if (exercise.id === exerciseId) {
				currentExercise = exercise
				exercise.isCurrent = true
			} else {
				exercise.isCurrent = false
			}
		})

		if (!currentExercise) return
		this.store.currentExercise = currentExercise

		this.eventEmitter.emit(ExercisesManagerTypes.Event.storeChanged)
	}
}

export default ExercisesLogic
