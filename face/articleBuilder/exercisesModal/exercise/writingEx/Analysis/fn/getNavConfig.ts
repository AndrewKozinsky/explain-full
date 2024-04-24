// import { useMemo } from 'react'
// import { TabItem } from '../../../../../../../ui/Tabs/Tabs'
// import { exercisesManager } from '../../../../common/exercisesManager'
// import { WriteExercises } from '../../../../zustand/exercisesStoreTypes'

/*export function useGetNavConfig(): TabItem[] {
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise
	const updateCurrentExercise = exercisesManager.useGetUpdateCurrentExercise()

	return useMemo(
		function () {
			const analysisTabConfig: TabItem = {
				id: 1,
				name: 'Разбор',
				onClick() {
					updateCurrentExercise<WriteExercises.Exercise>({
						analysisTab: 'analysis',
					})
				},
				current: exercise.analysisTab === 'analysis',
			}

			const rightAnswersTabConfig: TabItem = {
				id: 2,
				name: 'Правильные варианты',
				onClick() {
					updateCurrentExercise<WriteExercises.Exercise>({ analysisTab: 'rightVariants' })
				},
				current: exercise.analysisTab === 'rightVariants',
			}

			// Если ученик ничего не написал, то вернуть только вкладку с правильными вариантами предложений
			if (!exercise.userTranslate) {
				return [{ ...rightAnswersTabConfig, current: true }]
			}

			return [analysisTabConfig, rightAnswersTabConfig]
		},
		[exercise]
	)
}*/
