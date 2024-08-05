import { StoryConfigT } from '../types'

const main: StoryConfigT.Story = {
	enHeader: "The Rajah's Diamond",
	ruHeader: 'Бриллиант раджи',
	level: ['a1'],
	paragraphs: [
		{
			type: 'paragraph',
			sentences: [
				{
					type: 'sentence',
					id: 1,
					sentenceParts: [
						{
							id: 1,
							type: 'word',
							word: {
								partOfSentence: 'Noun',
								partOfSpeech: 'Subject',
								engWord: 'Harry',
								rusWord: 'Гарри',
								enTranscription: 'ˈhæri',
								usTranscription: 'ˈhæri',
							},
							coords: {
								start: 0.84,
								end: 1.23,
							},
						},
						{
							id: 2,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'did',
								rusWord: '',
								enTranscription: 'dɪd',
								usTranscription: 'dɪd',
							},
							coords: {
								start: 1.23,
								end: 1.38,
							},
						},
						{
							id: 3,
							type: 'word',
							word: {
								partOfSentence: 'Adverb',
								partOfSpeech: 'Modifier',
								engWord: 'not',
								rusWord: '',
								enTranscription: 'nɒt',
								usTranscription: 'nɑt',
							},
							coords: {
								start: 1.38,
								end: 1.59,
							},
						},
						{
							id: 4,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'like',
								rusWord: 'любить',
								enTranscription: 'laɪk',
								usTranscription: 'laɪk',
							},
							coords: {
								start: 1.59,
								end: 1.83,
							},
						},
						{
							id: 5,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Object',
								engWord: 'studying',
								rusWord: 'изучение',
								enTranscription: 'ˈstʌdiɪŋ',
								usTranscription: 'ˈstʌdiɪŋ',
							},
							coords: {
								start: 1.83,
								end: 2.31,
							},
						},
						{
							id: 6,
							type: 'word',
							word: {
								partOfSentence: 'Adverb',
								partOfSpeech: 'Modifier',
								engWord: 'very',
								rusWord: 'очень',
								enTranscription: 'ˈvɛri',
								usTranscription: 'ˈvɛri',
							},
							coords: {
								start: 2.31,
								end: 2.58,
							},
						},
						{
							id: 7,
							type: 'word',
							word: {
								partOfSentence: 'Adverb',
								partOfSpeech: 'Modifier',
								engWord: 'much',
								rusWord: 'много',
								enTranscription: 'mʌtʃ',
								usTranscription: 'mʌtʃ',
							},
							coords: {
								start: 2.58,
								end: 2.91,
							},
						},
						{
							type: 'punctuation',
							text: ',',
						},
						{
							id: 8,
							type: 'word',
							word: {
								partOfSentence: 'Conjunction',
								partOfSpeech: 'Conjunction',
								engWord: 'so',
								rusWord: 'так что',
								enTranscription: 'səʊ',
								usTranscription: 'soʊ',
							},
							coords: {
								start: 3.27,
								end: 3.54,
							},
						},
						{
							id: 9,
							type: 'word',
							word: {
								partOfSentence: 'Pronoun',
								partOfSpeech: 'Subject',
								engWord: 'he',
								rusWord: 'он',
								enTranscription: 'hiː',
								usTranscription: 'hi',
							},
							coords: {
								start: 3.54,
								end: 3.69,
							},
						},
						{
							id: 10,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'was',
								rusWord: 'был',
								enTranscription: 'wɒz',
								usTranscription: 'wəz',
							},
							coords: {
								start: 3.69,
								end: 3.84,
							},
						},
						{
							id: 11,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'allowed',
								rusWord: 'допущенный',
								enTranscription: 'əˈlaʊd',
								usTranscription: 'əˈlaʊd',
							},
							coords: {
								start: 3.84,
								end: 4.26,
							},
						},
						{
							id: 12,
							type: 'word',
							word: {
								partOfSentence: 'Preposition',
								partOfSpeech: 'Predicate',
								engWord: 'to',
								rusWord: '',
								enTranscription: 'tə',
								usTranscription: 'tə',
							},
							coords: {
								start: 4.26,
								end: 4.44,
							},
						},
						{
							id: 13,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'finish',
								rusWord: 'заканчивать',
								enTranscription: 'ˈfɪnɪʃ',
								usTranscription: 'ˈfɪnɪʃ',
							},
							coords: {
								start: 4.44,
								end: 4.86,
							},
						},
						{
							id: 14,
							type: 'word',
							word: {
								partOfSentence: 'Pronoun',
								partOfSpeech: 'Modifier',
								engWord: 'his',
								rusWord: 'его',
								enTranscription: 'hɪz',
								usTranscription: 'hɪz',
							},
							coords: {
								start: 4.86,
								end: 5.01,
							},
						},
						{
							id: 15,
							type: 'word',
							word: {
								partOfSentence: 'Noun',
								partOfSpeech: 'Object',
								engWord: 'education',
								rusWord: 'образование',
								enTranscription: 'ˌɛdʒʊˈkeɪʃən',
								usTranscription: 'ˌɛdʒəˈkeɪʃən',
							},
							coords: {
								start: 5.01,
								end: 5.76,
							},
						},
						{
							id: 16,
							type: 'word',
							word: {
								partOfSentence: 'Preposition',
								partOfSpeech: 'Modifier',
								engWord: 'before',
								rusWord: 'до',
								enTranscription: 'bɪˈfɔː',
								usTranscription: 'bɪˈfɔr',
							},
							coords: {
								start: 5.76,
								end: 6.15,
							},
						},
						{
							id: 17,
							type: 'word',
							word: {
								partOfSentence: 'Adjective',
								partOfSpeech: 'Modifier',
								engWord: 'most',
								rusWord: 'большинство',
								enTranscription: 'məʊst',
								usTranscription: 'moʊst',
							},
							coords: {
								start: 6.15,
								end: 6.6,
							},
						},
						{
							id: 18,
							type: 'word',
							word: {
								partOfSentence: 'Adjective',
								partOfSpeech: 'Modifier',
								engWord: 'young',
								rusWord: 'молодой',
								enTranscription: 'jʌŋ',
								usTranscription: 'jʌŋ',
							},
							coords: {
								start: 6.6,
								end: 6.9,
							},
						},
						{
							id: 19,
							type: 'word',
							word: {
								partOfSentence: 'Noun',
								partOfSpeech: 'Object of Preposition',
								engWord: 'men',
								rusWord: 'человек',
								enTranscription: 'mɛn',
								usTranscription: 'mɛn',
							},
							coords: {
								start: 6.9,
								end: 7.23,
							},
						},
						{
							id: 20,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'do',
								rusWord: 'делает',
								enTranscription: 'duː',
								usTranscription: 'du',
							},
							coords: {
								start: 7.23,
								end: 7.59,
							},
						},
						{
							type: 'punctuation',
							text: '.',
						},
					],
					sentence: {
						eng: 'Harry did not like studying very much, so he was allowed to finish his education before most young men do.',
						rus: 'Гарри не очень любил учиться, поэтому ему позволили закончить образование раньше, чем большинству юношей.',
					},
				},
				{
					type: 'sentence',
					id: 2,
					sentenceParts: [
						{
							id: 21,
							type: 'word',
							word: {
								partOfSentence: 'Conjunction',
								partOfSpeech: 'Modifier',
								engWord: 'However,',
								rusWord: 'однако',
								enTranscription: 'haʊˈɛvə',
								usTranscription: 'haʊˈɛvər',
							},
							coords: {
								start: 8.4,
								end: 8.88,
							},
						},
						{
							id: 22,
							type: 'word',
							word: {
								partOfSentence: 'Noun',
								partOfSpeech: 'Subject',
								engWord: 'Harry',
								rusWord: 'Гарри',
								enTranscription: 'ˈhæri',
								usTranscription: 'ˈhæri',
							},
							coords: {
								start: 9.21,
								end: 9.54,
							},
						},
						{
							id: 23,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'loved',
								rusWord: 'любил',
								enTranscription: 'lʌvd',
								usTranscription: 'lʌvd',
							},
							coords: {
								start: 9.54,
								end: 9.87,
							},
						},
						{
							id: 24,
							type: 'word',
							word: {
								partOfSentence: 'Noun',
								partOfSpeech: 'Object',
								engWord: 'music',
								rusWord: 'музыка',
								enTranscription: 'ˈmjuːzɪk',
								usTranscription: 'ˈmjuzɪk',
							},
							coords: {
								start: 9.9,
								end: 10.44,
							},
						},
						{
							id: 25,
							type: 'word',
							word: {
								partOfSentence: 'Conjunction',
								partOfSpeech: 'Conjunction',
								engWord: 'and',
								rusWord: 'и',
								enTranscription: 'ænd',
								usTranscription: 'ænd',
							},
							coords: {
								start: 0,
								end: 0,
							},
						},
						{
							id: 26,
							type: 'word',
							word: {
								partOfSentence: 'Pronoun',
								partOfSpeech: 'Subject',
								engWord: 'he',
								rusWord: 'он',
								enTranscription: 'hiː',
								usTranscription: 'hi',
							},
							coords: {
								start: 0,
								end: 0,
							},
						},
						{
							id: 27,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'could',
								rusWord: 'мог',
								enTranscription: 'kʊd',
								usTranscription: 'kʊd',
							},
							coords: {
								start: 0,
								end: 0,
							},
						},
						{
							id: 28,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'sing',
								rusWord: 'петь',
								enTranscription: 'sɪŋ',
								usTranscription: 'sɪŋ',
							},
							coords: {
								start: 0,
								end: 0,
							},
						},
						{
							id: 29,
							type: 'word',
							word: {
								partOfSentence: 'Conjunction',
								partOfSpeech: 'Predicate',
								engWord: 'and',
								rusWord: 'и',
								enTranscription: 'ænd',
								usTranscription: 'ænd',
							},
							coords: {
								start: 0,
								end: 0,
							},
						},
						{
							id: 30,
							type: 'word',
							word: {
								partOfSentence: 'Verb',
								partOfSpeech: 'Predicate',
								engWord: 'play',
								rusWord: 'играть',
								enTranscription: 'pleɪ',
								usTranscription: 'pleɪ',
							},
							coords: {
								start: 0,
								end: 0,
							},
						},
						{
							id: 31,
							type: 'word',
							word: {
								partOfSentence: 'Article',
								partOfSpeech: 'Modifier',
								engWord: 'the',
								rusWord: '',
								enTranscription: 'ðə (weak form)',
								usTranscription: 'ðə (weak form)',
							},
							coords: {
								start: 0,
								end: 0,
							},
						},
						{
							id: 32,
							type: 'word',
							word: {
								partOfSentence: 'Noun',
								partOfSpeech: 'Object',
								engWord: 'piano',
								rusWord: 'пианино',
								enTranscription: 'pɪˈænəʊ',
								usTranscription: 'piˈænoʊ',
							},
							coords: {
								start: 0,
								end: 0,
							},
						},
						{
							id: 33,
							type: 'word',
							word: {
								partOfSentence: 'Adverb',
								partOfSpeech: 'Modifier',
								engWord: 'well',
								rusWord: 'хорошо',
								enTranscription: 'wɛl',
								usTranscription: 'wɛl',
							},
							coords: {
								start: 0,
								end: 0,
							},
						},
						{
							type: 'punctuation',
							text: '.',
						},
					],
					sentence: {
						eng: 'However, Harry loved music and he could sing and play the piano well.',
						rus: 'Однако Гарри любил музыку, умел петь и хорошо играть на фортепиано.',
					},
				},
			],
		},
	],
}
