import { useEffect } from 'react'
import articleService from '../../../../../articleService/articleService'
import { ExercisesManagerTypes } from '../../../logic/exercisesManagerTypes'
import { eventEmitter, exercisesLogic, useExercisesModalStore } from '../../../store/store'

export function useSetUpStore(articleSlug: string) {
	const { exercisesId } = useExercisesModalStore()

	useEffect(
		function () {
			if (exercisesId === null) return

			const currentExercises = articleService.getArticleExercises(articleSlug, exercisesId)
			if (!currentExercises) return

			exercisesLogic.initStore(currentExercises.exercises)
		},
		[exercisesId],
	)
}
