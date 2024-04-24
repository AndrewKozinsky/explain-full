// import { useEffect } from 'react'
// import { exercisesManager } from '../../../../common/exercisesManager'
// import { WriteExercises } from '../../../../zustand/exercisesStoreTypes'

/** Возвращает тексты правильных переводов предложения на английский */
/*export function useGetCorrectEngSentenceTexts() {
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise

	const correctEngSentences = exercise.engSentences.filter((engSentence) => {
		return engSentence.isCorrect
	})

	return correctEngSentences.map((engSentence) => {
		return engSentence.engSentence
	})
}*/

/**
 * Если ученик написал перевод и открыл разбор, то он должен увидеть вкладку с разбором.
 * А если не написал, то вкладка с правильными вариантами.
 * Хук следит за этим и ставит нужную вкладку.
 */
/*export function useSetRightVariantsTabIfNecessary() {
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise
	const updateCurrentExercise = exercisesManager.useGetUpdateCurrentExercise()

	useEffect(
		function () {
			updateCurrentExercise<WriteExercises.Exercise>({
				analysisTab: exercise.userTranslate ? 'analysis' : 'rightVariants',
			})
		},
		[exercise.userTranslate]
	)
}*/
