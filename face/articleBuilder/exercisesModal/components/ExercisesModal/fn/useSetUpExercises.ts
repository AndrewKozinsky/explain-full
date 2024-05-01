import { useMemo } from 'react'
import articleService from '../../../../../articleService/articleService'
import ExercisesLogic from '../../../logic/exercisesLogic'
import { useExercisesModalStore } from '../../../store/store'

export function useSetUpExercises(articleSlug: string) {
	const { exercisesId } = useExercisesModalStore()

	return useMemo(
		function () {
			if (!exercisesId) return

			const currentExercises = articleService.getArticleExercises(articleSlug, exercisesId)
			if (!currentExercises) return

			const exercisesLogic = new ExercisesLogic(currentExercises.exercises)

			return exercisesLogic
		},
		[exercisesId],
	)
}
