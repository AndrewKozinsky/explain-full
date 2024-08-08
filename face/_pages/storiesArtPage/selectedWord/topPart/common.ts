import { useMemo } from 'react'
import { StoryConfigT } from '../../../../requests/texts/textsApiTypes'
import { useStoryStore } from '../../store/store'
import { StoryManager } from '../storyManager'

export function useGetSelectedWord(): null | StoryConfigT.Word {
	const sentenceId = useStoryStore().selectedSentenceId
	const wordId = useStoryStore().selectedWordId

	const storyManager = new StoryManager()
	const word = storyManager.getSelectedWord()

	return useMemo(
		function () {
			if (!word) {
				return null
			}

			return word
		},
		[wordId, sentenceId],
	)
}
