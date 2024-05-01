import { useEffect } from 'react'
import articleService from '../../../../../articleService/articleService'
import ExercisesLogic from '../../../logic/exercisesLogic'
import { useExercisesModalStore } from '../../../store/store'

export function useSetUpExercises(articleSlug: string) {
	const { exercisesId } = useExercisesModalStore()

	useEffect(
		function () {
			if (exercisesId === null) return

			const currentExercises = articleService.getArticleExercises(articleSlug, exercisesId)
			if (!currentExercises) return

			const exercisesLogic = new ExercisesLogic(currentExercises.exercises)

			useExercisesModalStore.setState({ exercisesLogic })
		},
		[exercisesId],
	)
}
