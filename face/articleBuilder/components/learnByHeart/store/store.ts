import { create } from 'zustand'
import { LearnByHeartStoreType } from './storeTypes'

export const useLearnByHeartStore = create<LearnByHeartStoreType.State>((set) => {
	return {
		wordObjs: [],
		isModalOpen: false,
	}
})
