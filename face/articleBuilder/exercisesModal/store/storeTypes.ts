export namespace ExercisesModalStoreType {
	export type State = {
		// Открыто ли модальное окно со списком слов для заучивания
		isModalOpen: boolean
		// id упражнений, которые модальное окно должно показывать
		exercisesId: null | number
	}
}
