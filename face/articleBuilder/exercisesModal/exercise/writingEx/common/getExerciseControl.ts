// import { useMemo } from 'react'
// import { UpdateStore } from '../../../../../../parts/store'
// import { exercisesManager } from '../../../common/exercisesManager'
// import { useExercisesStore } from '../../../zustand/exercisesStore'
// import { ExercisesStoreType, WriteExercises } from '../../../zustand/exercisesStoreTypes'

/*type ButtonConfig = {
	buttonText: string
	handler: () => void
}*/

/** Возвращает объект с функцией и текстом.
 * Функция будет запускаться при нажатии на кнопку навигации ниже упражнения и при нажатии на Enter.
 * А текст будет на кнопке навигации ниже упражнения.
 * */
/*export function useGetExerciseControl(): ButtonConfig {
	const exercisesType = useExercisesStore((store) => store.currentExercisesType)
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise
	const updateStore = useExercisesStore((store) => store.updateStore)
	const nextSentence = exercisesManager.useGetNextSentence()
	const goToNextExercisesType = exercisesManager.useGetGoToNextExercisesType()
	const nextExerciseType = exercisesManager.getNextExercisesTypeDependOnCurrent(exercisesType)
	const updateCurrentExercise = exercisesManager.useGetUpdateCurrentExercise()

	return useMemo(
		function () {
			// Если открыт анализ или если предложение переведено правильно...
			if (exercise.showAnalysis || exercise.isTranslateCorrect === true) {
				// Тогда переход или к следующему предложению или следующему типу упражнений
				return getNextSentenceOrNextExerciseBtnConfig(
					updateStore,
					nextSentence,
					goToNextExercisesType,
					nextExerciseType
				)
			}

			// Если не написали перевод и не открыт анализ.
			if (!exercise.userTranslate) {
				return {
					buttonText: 'Правильный вариант',
					// Функция должна открыть анализ
					handler: () =>
						updateCurrentExercise<WriteExercises.Exercise>({ showAnalysis: true }),
				}
			}

			// Если написали неправильный перевод и не открыт анализ.
			return {
				buttonText: 'Разбор',
				// Функция должна открыть разбор предложения
				handler: () =>
					updateCurrentExercise<WriteExercises.Exercise>({ showAnalysis: true }),
			}
		},
		[exercise, exercisesType, nextSentence, goToNextExercisesType, nextExerciseType]
	)
}*/

/**
 * Возвращает конфигурацию кнопки отправляющей или на следующее предложение (если есть)
 * или на следующий тип упражнения.
 * @param updateStore — функция обновляющая объект Состояния упражнений
 * @param nextSentence — следующее предложение
 * @param goToNextExercisesType — функция переадресовывающая на следующий тип упражнения
 * @param nextExerciseType — объект с данными о типе следующего упражнения
 */
/*function getNextSentenceOrNextExerciseBtnConfig(
	updateStore: UpdateStore<ExercisesStoreType.State>,
	nextSentence: ExercisesStoreType.Exercise,
	goToNextExercisesType: () => void,
	nextExerciseType: { type: ExercisesStoreType.ExercisesType; name: string }
): ButtonConfig {
	// Если есть следующее предложение
	if (nextSentence) {
		return {
			buttonText: 'Следующее',
			// Функция должна открыть следующее предложение
			handler: () => updateStore({ exerciseId: nextSentence.id }),
		}
	}

	// Если следующего предложения нет, тогда перейти к следующему типу упражнений
	return {
		buttonText: nextExerciseType.name,
		// Функция должна открыть разбор предложения
		handler: goToNextExercisesType,
	}
}*/
