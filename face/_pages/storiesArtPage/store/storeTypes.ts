import { StoryConfigT } from '../../../requests/texts/textsApiTypes'

export namespace StoryStoreType {
	export type State = {
		storyConfig: StoryConfigT.Story
		// id выделенного предложения
		selectedSentenceId: null | number
		// id выделенного слова
		selectedWordId: null | number
	}
}
