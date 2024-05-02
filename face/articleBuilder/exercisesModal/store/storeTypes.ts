import { ExercisesManagerTypes } from '../logic/exercisesManagerTypes'

export namespace ExercisesModalStoreType {
	export type State = {
		// Открыто ли модальное окно со списком слов для заучивания
		isModalOpen: boolean
		// id упражнений, которые модальное окно должно показывать
		// ВОЗМОЖНО СТОИТ УДАЛИТЬ !!!
		exercisesId: null | number
		store: ExercisesManagerTypes.Store
	}
}
