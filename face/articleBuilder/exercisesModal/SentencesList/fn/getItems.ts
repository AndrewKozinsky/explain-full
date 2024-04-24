// import { UpdateStore } from '../../../../../parts/store'
// import { TabItem } from '../../../../../ui/Tabs/Tabs'
// import { useExercisesStore } from '../../zustand/exercisesStore'
// import { ExercisesStoreType } from '../../zustand/exercisesStoreTypes'

/** Формирует и возвращает пункты для отрисовки списка предложений на перевод */
/*export function useGetTabsItems(): null | TabItem[] {
	const exerciseId = useExercisesStore((store) => store.exerciseId)
	const writeExercises = useExercisesStore((store) => store.writeExercises)
	const updateExercisesStore = useExercisesStore((store) => store.updateStore)

	if (!writeExercises || !exerciseId) {
		return null
	}

	return writeExercises.map((exercise) => {
		return {
			id: exercise.id,
			current: exercise.id === exerciseId,
			name: exercise.rusSentence,
			onClick: getSwitchToExercise(updateExercisesStore, exercise.id),
		}
	})
}*/

/**
 * Возвращает функцию делающую упражнение с указанным идентификатором текущим
 * @param updateExercisesStore — функция обновляющая объект Состояния упражнений
 * @param exerciseId — id упражнения, которое должно быть текущим
 */
/*function getSwitchToExercise(
	updateExercisesStore: UpdateStore<ExercisesStoreType.State>,
	exerciseId: number
) {
	return function () {
		updateExercisesStore({ exerciseId })
	}
}*/
