import { useExercisesModalStore } from '../../../store/store'

/**
 * Возвращает функцию, открывающую или закрывающую модальное окно просмотра слов следующего урока
 * @open — должно ли модальное окно открываться или закрываться
 */
export function useGetOpenCloseExercisesModal(open: boolean, exercisesId: null | number) {
	return function () {
		useExercisesModalStore.setState({ isModalOpen: open, exercisesId })
	}
}
