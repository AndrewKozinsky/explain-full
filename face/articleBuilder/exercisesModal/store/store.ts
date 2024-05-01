import { create } from 'zustand'
import { ExercisesModalStoreType } from './storeTypes'

export const useExercisesModalStore = create<ExercisesModalStoreType.State>((set) => {
	return {
		isModalOpen: false,
		exercisesId: null,
		exercisesLogic: null as any,
	}
})
