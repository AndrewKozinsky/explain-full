import ExercisesType from '../../../articlesData/exercisesType'
import { ExercisesManagerTypes } from './exercisesManagerTypes'

class ExercisesLogic {
	private exercises!: ExercisesManagerTypes.Exercise[]
	store!: ExercisesManagerTypes.Store

	constructor(rowExercises: ExercisesType.Exercise[]) {
		this.setExercises(rowExercises)
		this.initStore()
	}

	setExercises(rowExercises: ExercisesType.Exercise[]) {
		this.exercises = rowExercises.map((rowExercise, i) => {
			return { ...rowExercise, isCurrent: false }
		})
	}

	initStore() {
		this.exercises[0].isCurrent = true

		this.store = {
			exercises: this.exercises,
			currentExercise: this.exercises[0],
			currentExerciseType: ExercisesManagerTypes.ExerciseType.write,
			analysis: { status: ExercisesManagerTypes.AnalysisStatus.hidden },
		}
	}
}

export default ExercisesLogic
