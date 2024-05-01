// import { useEffect } from 'react'
// import { WriteExercises } from '../../../../zustand/exercisesStoreTypes'

/**
 * Хук при изменении упражнения ставит фокус на поле ввода.
 * Это требуется для удобства ученика на случай если фокус установлен на других элементах.
 * @param exercise — данные упражнения.
 * @param inputRef — ссылка на поле ввода перевода.
 */
/*export function useSetFocusToInput(
	exercise: WriteExercises.Exercise,
	inputRef: React.MutableRefObject<HTMLTextAreaElement | null>
) {
	useEffect(
		function () {
			setTimeout(() => {
				if (!inputRef.current) return

				inputRef.current?.focus()
			}, 0)
		},
		[inputRef.current, exercise.id]
	)
}*/
