import { StoryConfigT } from '../../../requests/texts/textsApiTypes'
import { useStoryStore } from '../store/store'

export class StoryManager {
	// Помечает слово выделенным
	selectWord(sentenceId: number, wordId: number) {
		useStoryStore.setState({ selectedSentenceId: sentenceId, selectedWordId: wordId })
	}
	// Выделено ли слово
	isWordSelected(sentenceId: number, wordId: number) {
		return (
			useStoryStore.getState().selectedSentenceId === sentenceId &&
			useStoryStore.getState().selectedWordId === wordId
		)
	}
	getSelectedSentence() {
		const selectedSentenceId = useStoryStore().selectedSentenceId
		if (!selectedSentenceId) {
			return null
		}

		return this.findSentenceById(selectedSentenceId)
	}
	findSentenceById(sentenceId: number): null | StoryConfigT.Sentence {
		const storyConfig = useStoryStore().storyConfig

		let sentence: null | StoryConfigT.Sentence = null

		storyConfig.paragraphs.forEach((paragraph) => {
			paragraph.sentences.forEach((sentenceItem) => {
				if (sentenceItem.id === sentenceId) {
					sentence = sentenceItem
				}
			})
		})

		return sentence
	}
}
