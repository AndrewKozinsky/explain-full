import { useMemo } from 'react'
import { useStoryStore } from '../../../../store/store'
import { StoryManager } from '../../../storyManager'

type PartsOfSpeech = {
	inSentence: string
	inSpeech: string
}

export function useGetPartsOfSpeech(): PartsOfSpeech {
	const sentenceId = useStoryStore().selectedSentenceId
	const wordId = useStoryStore().selectedWordId

	const storyManager = new StoryManager()
	const word = storyManager.getSelectedWord()

	return useMemo(
		function () {
			if (!word) {
				return {
					inSentence: '',
					inSpeech: '',
				}
			}

			return {
				inSentence: word.word.partOfSentence,
				inSpeech: word.word.partOfSpeech,
			}
		},
		[wordId, sentenceId],
	)
}
