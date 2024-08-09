import { useMemo } from 'react'
import { getFullWordFormFromAbbreviatedForm } from '../../../../../../utils/strings'
import { GrammarAliases, GrammarConfigT } from '../../../../grammarTypes'
import { useGetSelectedWord } from '../../../common'
import { StoryManager } from '../../../storyManager'

/**
 * Хук получает выделенное предложение и слово и вычисляет отмечено ли оно как сокращённое.
 * Если да, то находит полную форму слова и возвращает
 */
export function useGetAbbreviatedFormData(): null | { shortWord: string; fullWord: string } {
	const selectedWord = useGetSelectedWord()

	const storyManager = new StoryManager()
	const sentence = storyManager.getSelectedSentence()

	return useMemo(
		function () {
			if (!selectedWord || !sentence) {
				return null
			}

			// Буду искать грамматический объект сокращенного слова
			let abbreviatedFormGrammar: null | GrammarConfigT.AbbreviatedForm = null

			// Пройду по идентификаторам фраз этого слова
			selectedWord.phraseIds.forEach((phraseId) => {
				const phrase = sentence.phrases.find((phrase) => {
					return phrase.phraseId === phraseId
				})
				if (!phrase) return

				// Буду искать грамматическую тему сокращённого слова
				phrase.grammars.forEach((grammar) => {
					if (grammar.topic === GrammarAliases.AbbreviatedForm) {
						abbreviatedFormGrammar = grammar
					}
				})
			})

			if (abbreviatedFormGrammar) {
				const fullWord = getFullWordFormFromAbbreviatedForm(
					selectedWord.word.engWord,
					// @ts-ignore
					abbreviatedFormGrammar.type,
				)

				return {
					shortWord: selectedWord.word.engWord,
					fullWord,
				}
			}

			return null
		},
		[selectedWord, sentence],
	)
}
