// import { UpdateStore } from '../../../../../parts/store'
// import { ButtonTabsItem } from '../../../../../ui/ButtonTabs/ButtonTabs'
// import { useExercisesStore } from '../../zustand/exercisesStore'
// import { ExercisesStoreType } from '../../zustand/exercisesStoreTypes'

/** Формирует и возвращает пункты для отрисовки кнопок переключения типа упражнений */
/*export function useGetTabsItems(): null | ButtonTabsItem[] {
	const exercisesType = useExercisesStore((store) => store.currentExercisesType)
	const updateExercisesStore = useExercisesStore((store) => store.updateStore)

	return [
		{
			id: 1,
			name: 'Письменная',
			current: exercisesType === 'write',
			onClick: getSwitchExerciseType(updateExercisesStore, 'write'),
		},
		{
			id: 2,
			name: 'Голосовая',
			current: exercisesType === 'speak',
			onClick: getSwitchExerciseType(updateExercisesStore, 'speak'),
		},
	]
}*/

/** Возвращает обработчик щелчка по кнопке переключения типа упражнений. */
/*function getSwitchExerciseType(
	updateExercisesStore: UpdateStore<ExercisesStoreType.State>,
	exercisesType: ExercisesStoreType.ExercisesType
) {
	return function () {
		updateExercisesStore({ currentExercisesType: exercisesType })
	}
}*/
