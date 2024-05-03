import { useMemo } from 'react'
import { ExercisesManagerTypes } from '../../logic/exercisesManagerTypes'
import { useExercisesModalStore } from '../../store/store'
import ExerciseType = ExercisesManagerTypes.ExerciseType
import AnalysisStatus = ExercisesManagerTypes.AnalysisStatus

/**
 * Возвращает правду если текущее упражнение голосовое и показан результат
 */
export function useIsShownResultInOralExercise() {
	const { currentExercise: exercise, analysis } = useExercisesModalStore().store

	return useMemo(
		function () {
			return exercise.type === ExerciseType.oral && analysis.status === AnalysisStatus.visible
		},
		[exercise, analysis],
	)
}

/**
 * Возвращает массив правильных переводов текущего упражнения
 */
export function useGetExerciseCorrectTranslations() {
	const exercise = useExercisesModalStore().store.currentExercise

	return useMemo(
		function () {
			return exercise.engSentences.filter((sentence) => {
				return sentence.isCorrect
			})
		},
		[exercise],
	)
}
