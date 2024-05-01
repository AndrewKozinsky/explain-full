import ExercisesType from '../../../articlesData/exercisesType'
import { makeFullImmutableCopy } from '../../../utils/objects'
import { ExercisesManagerTypes } from './exercisesManagerTypes'

class ExercisesLogic {
	private exercises!: ExercisesManagerTypes.Exercise[]
	store!: ExercisesManagerTypes.Store

	constructor(rowExercises: ExercisesType.Exercise[]) {
		this.initStore(rowExercises)
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
	}
}

export default ExercisesLogic
