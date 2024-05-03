import React, { useEffect } from 'react'
import { useExercisesModalStore } from '../../../../store/store'

/**
 * Хук при изменении упражнения ставит фокус на поле ввода.
 * Это требуется для удобства ученика на случай если фокус установлен на других элементах.
 * @param inputRef — ссылка на поле ввода перевода.
 */
export function useSetFocusToInput(inputRef: React.MutableRefObject<HTMLTextAreaElement | null>) {
	const exerciseId = useExercisesModalStore().store.currentExercise.id

	useEffect(
		function () {
			setTimeout(() => {
				if (!inputRef.current) return

				inputRef.current?.focus()
			}, 0)
		},
		[inputRef.current, exerciseId],
	)
}
