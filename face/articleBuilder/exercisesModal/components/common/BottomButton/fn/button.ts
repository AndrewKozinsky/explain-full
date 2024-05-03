import { useMemo } from 'react'
import { ExercisesManagerTypes } from '../../../../logic/exercisesManagerTypes'
import { useExercisesModalStore } from '../../../../store/store'

export function useGetButtonText() {
	const { currentExercise: exercise, analysis } = useExercisesModalStore().store

	return useMemo(function () {
		/*if (exercise.type === ExercisesManagerTypes.ExerciseType.write) {
			if (!exercise.userTranslate) {
				if (analysis.status === ExercisesManagerTypes.AnalysisStatus.hidden) {
					return 'Правильный вариант'
				}
				return '111'
			}
			return 'fg'
		} else {
			return '123'
		}*/
		return 'Правильный вариант'
	}, [])
}
