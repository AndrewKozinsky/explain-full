import { useMemo } from 'react'
import { useStoryStore } from '../../../../store/store'
import { StoryManager } from '../../../storyManager'

export function useGetRusAndEngSentence() {
	const selectedSentenceId = useStoryStore().selectedSentenceId

	return useMemo(
		function (): { rus: string; eng: string } {
			const storyManager = new StoryManager()
			const sentence = storyManager.getSelectedSentence()

			if (!sentence) {
				return {
					rus: '',
					eng: '',
				}
			}

			return sentence.sentence
		},
		[selectedSentenceId],
	)
}
