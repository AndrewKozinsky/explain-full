// import { useEffect } from 'react'
// import { exercisesManager } from '../../../../common/exercisesManager'
// import { WriteExercises } from '../../../../zustand/exercisesStoreTypes'
// import { useGetSimilarEngSentenceByUserTranslate } from '../../common/getSimilarEngSentenceByTranslate'

/*export function useCheckUserTranslate() {
	const updateCurrentExercise = exercisesManager.useGetUpdateCurrentExercise()

	const similarEngSentence = useGetSimilarEngSentenceByUserTranslate()

	useEffect(
		function () {
			let isTranslateCorrectValue: WriteExercises.IsTranslateCorrect = 'unknown'

			if (similarEngSentence) {
				isTranslateCorrectValue = similarEngSentence.isCorrect
			}

			updateCurrentExercise<WriteExercises.Exercise>({
				isTranslateCorrect: isTranslateCorrectValue,
			})
		},
		[similarEngSentence]
	)
}*/
