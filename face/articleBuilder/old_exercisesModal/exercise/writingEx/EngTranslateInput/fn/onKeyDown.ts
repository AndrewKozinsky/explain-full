// import React, { useEffect } from 'react'
// import { exercisesManager } from '../../../../common/exercisesManager'
// import { WriteExercises } from '../../../../zustand/exercisesStoreTypes'

/**
 * Обработчик ввода текста в поле перевода русского предложения.
 * Заносит введённый текст в Состояние модального окна с упражнениями.
 */
/*export function useGetOnInput() {
	const updateCurrentExercise = exercisesManager.useGetUpdateCurrentExercise()

	return function (e: React.KeyboardEvent<HTMLTextAreaElement>) {
		const $textInput = e.target as HTMLTextAreaElement

		updateCurrentExercise<WriteExercises.Exercise>({
			userTranslate: $textInput.value,
			showAnalysis: false,
		})

		setTextareaHeightDependOnText($textInput)
	}
}*/

/**
 * Получает элемент текстовой области и ставит его высоту в зависимости от количества текста.
 * @param $textarea — ссылка на текстовую область, где требуется динамически изменять высоту.
 */
/*function setTextareaHeightDependOnText($textarea: HTMLTextAreaElement) {
	$textarea.style.height = '0'
	$textarea.style.height = $textarea.scrollHeight + 'px'
}*/

/**
 * При монтировании запускает функцию, ставящую правильную высоту переданной текстовой области.
 * @param $textarea — ссылка на текстовую область
 */
/*export function useSetTextareaHeightOnMount($textarea: null | HTMLTextAreaElement) {
	useEffect(
		function () {
			if (!$textarea) return

			setTimeout(() => {
				setTextareaHeightDependOnText($textarea)
			}, 10)
		},
		[$textarea]
	)
}*/
