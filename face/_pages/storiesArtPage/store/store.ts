import { create } from 'zustand'
import { StoryStoreType } from './storeTypes'

export const useStoryStore = create<StoryStoreType.State>((set) => {
	return {
		selectedSentenceId: null,
		selectedWordId: null,
	}
})
