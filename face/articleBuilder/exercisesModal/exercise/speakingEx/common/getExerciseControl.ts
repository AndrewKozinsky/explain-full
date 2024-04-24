// import { useMemo } from 'react'
// import { exercisesManager } from '../../../common/exercisesManager'
// import { useExercisesStore } from '../../../zustand/exercisesStore'
// import { SpeakExercises } from '../../../zustand/exercisesStoreTypes'

/*type ButtonConfig = {
	buttonText: null | string
	handler: null | (() => void)
}*/

/** Возвращает объект с функцией и текстом.
 * Функция будет запускаться при нажатии на кнопку навигации ниже упражнения и при нажатии на Enter.
 * А текст будет на кнопке навигации ниже упражнения.
 * */
/*export function useGetExerciseControl(): ButtonConfig {
	const exercise = exercisesManager.useGetCurrentExercise() as SpeakExercises.Exercise
	const updateStore = useExercisesStore((store) => store.updateStore)
	const nextSentence = exercisesManager.useGetNextSentence()
	const updateCurrentExercise = exercisesManager.useGetUpdateCurrentExercise()

	return useMemo(
		function () {
			// Если открыт перевод...
			if (exercise.showTranslate) {
				// Если есть следующее предложение
				if (nextSentence) {
					return {
						buttonText: 'Следующее',
						// Функция должна открыть следующее предложение
						handler: () => updateStore({ exerciseId: nextSentence.id }),
					}
				} else {
					return {
						buttonText: null,
						// Функция должна открыть следующее предложение
						handler: null,
					}
				}
			}
			// Если перевод закрыт, то открыть его
			else {
				return {
					buttonText: 'Перевод',
					// Функция должна открыть анализ
					handler: () =>
						updateCurrentExercise<SpeakExercises.Exercise>({ showTranslate: true }),
				}
			}
		},
		[exercise, nextSentence]
	)
}*/
