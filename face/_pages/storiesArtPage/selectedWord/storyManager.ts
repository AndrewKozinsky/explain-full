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
}
