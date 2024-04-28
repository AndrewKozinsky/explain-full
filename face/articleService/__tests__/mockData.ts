import ArticleType from '../../articlesData/articleType'

export const pureArticles: ArticleType.Art[] = [
	{
		type: ArticleType.ArtType.welcome,
		meta: {
			number: 1,
			caption: 'Вводная глава',
			slug: 'welcome',
			articleName: 'Welcome',
			articleDescription: 'Добро пожаловать на курс',
		},
	},
	{
		type: ArticleType.ArtType.level,
		level: ArticleType.LangLevel.a1,
		meta: {
			number: 2,
			caption: 'Уровень А1',
			slug: 'level',
			articleName: 'Уровень A1',
			articleDescription: 'Добро пожаловать на курс',
		},
	},
	{
		type: ArticleType.ArtType.article,
		meta: {
			number: 4,
			caption: 'Глава 1',
			slug: 'my-art-1',
			articleName: 'Имя статьи 1',
			articleDescription: 'Описание статьи 1',
		},
		content: [
			{
				type: 'paragraph',
				offset: true,
				textSize: 'normal',
				children: [
					{
						type: 'text',
						text: 'Мой текст',
					},
				],
			},
			{
				type: 'exercises',
				id: 0,
				exercises: [
					{
						rusSentence: 'Это книга.',
						engSentences: [
							{
								engSentences: [],
								isCorrect: false,
								analysis: [],
							},
						],
						words: [
							{ rusWord: 'книга', engWord: 'a book' },
							{ rusWord: 'это', engWord: 'it' },
						],
					},
					{
						rusSentence: 'Я строитель',
						engSentences: [
							{
								engSentences: [],
								isCorrect: false,
								analysis: [],
							},
						],
						words: [{ rusWord: 'строитель', engWord: 'a builder' }],
					},
					{
						rusSentence: 'Это журнал.',
						engSentences: [
							{
								engSentences: [],
								isCorrect: false,
								analysis: [],
							},
						],
						words: [{ rusWord: 'журнал', engWord: 'a magazine' }],
					},
				],
				offset: true,
			},

			{
				type: 'exercises',
				id: 1,
				exercises: [
					{
						rusSentence: 'К тому времени я был ученым.',
						engSentences: [
							{
								engSentences: [],
								isCorrect: false,
								analysis: [],
							},
						],
						words: [
							{ rusWord: 'рад', engWord: 'glad' },
							{ rusWord: 'это', engWord: 'it' },
						],
					},
					{
						rusSentence: 'Он был слесарем.',
						engSentences: [
							{
								engSentences: [],
								isCorrect: false,
								analysis: [],
							},
						],
						words: [{ rusWord: 'рад', engWord: 'glad' }],
					},
				],
			},
		],
	},
	{
		type: ArticleType.ArtType.media,
		meta: {
			number: 3,
			caption: 'В бой!',
			slug: 'media',
			articleName: 'Media',
			articleDescription: 'Фильмы',
		},
	},
	{
		type: ArticleType.ArtType.article,
		meta: {
			number: 4,
			caption: 'Глава 2',
			slug: 'my-art-2',
			articleName: 'Имя статьи 2',
			articleDescription: 'Описание статьи 2',
		},
		content: [],
	},
	{
		type: ArticleType.ArtType.level,
		level: ArticleType.LangLevel.a2,
		meta: {
			number: 2,
			caption: 'Глава 2',
			slug: 'level',
			articleName: 'Уровень A1',
			articleDescription: 'Добро пожаловать на курс',
		},
	},
	{
		type: ArticleType.ArtType.article,
		meta: {
			number: 4,
			caption: 'Глава 3',
			slug: 'my-art-3',
			articleName: 'Имя статьи 3',
			articleDescription: 'Описание статьи 3',
		},
		content: [],
	},
]