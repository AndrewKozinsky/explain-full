// import { useEffect } from 'react'
// import { exercisesManager } from '../../../common/exercisesManager'
// import { useExercisesStore } from '../../../zustand/exercisesStore'

/** Следит за изменением типа упражнений и ставить первое предложение в качестве текущего */
/*export function useSetCurrentSentenceIdAfterExTypeSwitch() {
	const rowExercises = useExercisesStore((store) => store.rowExercises)
	const exercisesType = useExercisesStore((store) => store.currentExercisesType)
	const updateExercisesStore = useExercisesStore((store) => store.updateStore)

	useEffect(
		function () {
			exercisesManager.createClearedStore(rowExercises, updateExercisesStore)
		},
		[exercisesType]
	)
}*/
