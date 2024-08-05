// Типы для взаимодействия с API школы
namespace TextsApiTypes {
	export type GetText = StoryConfigT.Story
}

export default TextsApiTypes

// Объект текста
export namespace StoryConfigT {
	// Объект текста
	export type Story = {
		// Заголовок на английском
		enHeader: string
		// Перевод заголовка на английском на русский
		ruHeader: string
		// Уровень сложности текста
		level: ('a1' | 'a2' | 'b1' | 'b2' | 'c1')[]
		// Весь текст
		paragraphs: Paragraph[]
		// Ссылка на аудио (при наличии)
		// audioSrc?: string
		// Ссылка на видео (при наличии)
		// videoSrc?: string
	}

	// Абзац
	export type Paragraph = {
		type: 'paragraph'
		sentences: Sentence[]
	}

	// Предложение
	export type Sentence = {
		type: 'sentence'
		id: number
		sentenceParts: (Word | Punctuation)[]
		sentence: {
			eng: string
			rus: string
		}
	}

	// Слово в предложении
	export type Word = {
		id: number
		type: 'word'
		word: {
			// Какой части предложения слово
			partOfSentence: string
			// Какой части речи слово
			partOfSpeech: string
			// Слово на английском
			engWord: string
			// Перевод слова на русском. Если нельзя подобрать перевод, то поставить пустое значение.
			rusWord: string
			// Транскрипция на британском английском
			enTranscription: string
			// Транскрипция на американском английском
			usTranscription: string
		}
		// Координаты в какое время слово начинается и заканчивается
		coords: {
			// На какой секунде начинается
			start: number
			// На какой секунде заканчивается
			end: number
		}
	}

	// Знак препинания в предложении
	export type Punctuation = {
		type: 'punctuation'
		text: string
	}
}
