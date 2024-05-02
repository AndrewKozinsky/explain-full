import { create } from 'zustand'
import { EventEmitter } from '../../../utils/eventEmitter'
import ExercisesLogic from '../logic/exercisesLogic'
import { ExercisesManagerTypes } from '../logic/exercisesManagerTypes'
import { ExercisesModalStoreType } from './storeTypes'

export const useExercisesModalStore = create<ExercisesModalStoreType.State>((set) => {
	return {
		isModalOpen: false,
		exercisesId: null,
		store: null as any,
	}
})

export const eventEmitter = new EventEmitter()
export const exercisesLogic = new ExercisesLogic(eventEmitter)

eventEmitter.on(ExercisesManagerTypes.Event.storeChanged, () => {
	useExercisesModalStore.setState({ store: exercisesLogic.store })
})
