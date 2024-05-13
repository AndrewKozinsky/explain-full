import ArticleType from '../../articleType'

const adjectives: ArticleType.ArtArticle = {
	type: ArticleType.ArtType.article,
	meta: {
		number: 5,
		slug: 'adjectives',
		caption: 'Глава 3',
		articleName: 'Прилагательные',
		articleDescription:
			'Добавим новую часть речи в предложение и научимся описывать объекты и людей. Рассмотрим как окончания прилагательных влияет на перевод.',
		isPaid: false,
	},
	content: [
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Место в предложении' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'После глагола ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'be' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' может стоять не только существительное, но и прилагательное.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Я ' },
				{ type: 'text', color: 'gray', weight: 'normal', text: '(есть)' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' весёлый.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'I ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'am' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' jolly.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Мы ' },
				{ type: 'text', color: 'gray', weight: 'normal', text: '(есть)' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' любопытные.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'We ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'are' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' curious.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Она ' },
				{ type: 'text', color: 'gray', weight: 'normal', text: '(есть)' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' добрая.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'She ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'is' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' kind.' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Если к существительному добавлено прилагательное, то ',
				},
				{ type: 'text', color: 'black', weight: 'bold', text: 'неопределённый артикль a' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' ставится перед прилагательным потому что связка прилагательное + существительное по сути является одной сущностью. Например: серая мышь, красивая шляпка. Про неопределённый артикль будет рассказано в следующей главе.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это помидор.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It is ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a tomato' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это спелый помидор.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It is ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a ripe tomato' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это подвал.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It is ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a basement' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это тёмный подвал.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It is ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a dark basement' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Как прилагательное + существительное является одной сущностью, так и несколько действующих лиц являются одним подлежащим во множественном числе. От этого зависит форма глагола ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'be' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Я и Дженни — два лучших друга.',
				},
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'I and Jenny ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'are' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' two best-friends.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'small',
			children: [
				{
					type: 'text',
					color: 'gray',
					weight: 'normal',
					text: 'Я и Дженни — это подлежащее во множественном числе. Поэтому be будет в форме are, а не is.',
				},
			],
		},
		{
			type: 'exercises',
			id: 0,
			exercises: [
				{
					rusSentence: 'Мы счастливые.',
					engSentences: [
						{ engSentences: ['We are happy.'], isCorrect: true },
						{
							engSentences: ['We happy.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Пропущен глагол to be в форме настоящего времени второго лица: are. Такое предложение является грамматически неправильным.',
										},
									],
								},
							],
						},
						{
							engSentences: ['She is happy.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'They переводится как «они». Мы — это we. А в остальном правильно: после местоимений во втором лице ставится глагол to be в форме are.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'счастливый', engWord: 'happy' }],
				},
				{
					rusSentence: 'Кате двадцать лет.',
					engSentences: [
						{
							engSentences: ['Katya is twenty years old.', 'Katya is 20 years old.'],
							isCorrect: true,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Правильно! Вариант ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'Katya is twenty',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' тоже верен.',
										},
									],
								},
							],
						},
						{
							engSentences: ['Katya is twenty.'],
							isCorrect: true,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Правильно! Вариант ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'Katya is twenty years old',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' тоже верен.',
										},
									],
								},
							],
						},
						{
							engSentences: ['Katya twenty.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Двадцать лет — это свойство персонажа. Поэтому ставится ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '. Кроме того в русском предложении нет глагола. А это признак того, что в английском нужно ставить ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'двадцать лет', engWord: 'twenty years old' }],
				},
				{
					rusSentence: 'Они любопытные.',
					engSentences: [
						{ engSentences: ['They are curious.'], isCorrect: true },
						{
							engSentences: ['We are curious.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Предложение грамматически правильное, но в русском использовалось местоимение «они», что переводится they.',
										},
									],
								},
							],
						},
						{
							engSentences: ['You are curious.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'В русском использовалось местоимение «они», что переводится they, а не you.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'любопытный', engWord: 'curious' }],
				},
				{
					rusSentence: 'Я уверен, что буду готов.',
					engSentences: [
						{
							engSentences: [
								'I’m sure that I’ll be ready.',
								'I am sure that I will be ready.',
							],
							isCorrect: true,
						},
					],
					words: [
						{ rusWord: 'уверенный', engWord: 'sure' },
						{ rusWord: 'готовый', engWord: 'ready' },
						{ rusWord: 'что', engWord: 'that' },
					],
				},
				{
					rusSentence: 'Амелия тихая.',
					engSentences: [
						{ engSentences: ['Amelia is quiet.'], isCorrect: true },
						{
							engSentences: ['Amelia quiet.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Если сообщается о качестве или свойстве, то требуется глагол ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' в одной из своих форм. Форма зависит от времени и лица подлежащего.',
										},
									],
								},
							],
						},
						{
							engSentences: ['Amelia are quiet.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Чтобы определить в какой форме должен быть глагол ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' нужно понять в каком лице находится подлежащее. В этом предложении подлежащее Амелия. Имена всегда являются третьими лицами. А после третьего лица используется ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' в форме ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'is',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'тихий', engWord: 'quiet' }],
				},
				{
					rusSentence: 'Это неправильный путь.',
					engSentences: [
						{ engSentences: ['It is a wrong way.'], isCorrect: true },
						{
							engSentences: ['It is a wrong path.'],
							isCorrect: true,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Ещё вместо ',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'bold',
											text: 'path',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' можно использовать слово ',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'bold',
											text: 'way',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '. ',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'bold',
											text: 'Path',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' по смыслу обозначает путь, который можно пройти сделав определённые шаги чтобы достичь какой-то цели. А ',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'bold',
											text: 'way',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' — это более широкое и абстрактное понятие.',
										},
									],
								},
							],
						},
						{
							engSentences: ['It is the wrong way.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Определённый артикль тут использовать не нужно потому что подразумевается один неправильный путь из класса неправильных путей. Поэтому определённый артикль the лучше заменить на ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'a',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'неправильный', engWord: 'wrong' },
						{ rusWord: 'путь', engWord: 'way' },
					],
				},
				{
					rusSentence: 'Это тяжелое решение.',
					engSentences: [{ engSentences: ['It is a tough decision.'], isCorrect: true }],
					words: [
						{ rusWord: 'тяжёлое (решение)', engWord: 'tough' },
						{ rusWord: 'решение', engWord: 'decision' },
					],
				},
				{
					rusSentence: 'Он сумасшедший учёный.',
					engSentences: [
						{ engSentences: ['He is a crazy scientist.'], isCorrect: true },
						{
							engSentences: ['He is crazy a scientist.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Неопределённый артикль a должен стоять перед связкой прилагательного + существительного. По смыслу выглядит как он сумасшедний, а после прикручено слово «учёный» не понятно к чему относящиеся.',
										},
									],
								},
							],
						},
						{
							engSentences: ['He be a crazy scientist.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'В настоящем времени глагол to be после местоимений he (он), she (она), it (оно, это) будет в форме is. Ставить чистый be грамматически неправильно потому что это форма голого инфинитива. Из этого не понятно в каком времени происходит действие бытия.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'сумасшедший', engWord: 'crazy' },
						{ rusWord: 'учёный', engWord: 'scientist' },
					],
				},
				{
					rusSentence: 'Горы всегда величественны.',
					engSentences: [
						{ engSentences: ['Mountains are always majestic.'], isCorrect: true },
					],
					words: [
						{ rusWord: 'гора', engWord: 'mountain' },
						{ rusWord: 'всегда', engWord: 'always' },
						{ rusWord: 'величественный', engWord: 'majestic' },
					],
				},
				{
					rusSentence: 'Мы часто занятые.',
					engSentences: [
						{ engSentences: ['We are often busy.'], isCorrect: true },
						{
							engSentences: ['We often buzy.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Не ',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'bold',
											text: 'buzy',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ', а ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'busy',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'часто', engWord: 'often' },
						{ rusWord: 'занятой', engWord: 'busy' },
					],
				},
			],
			offset: true,
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Прилагательные на -ing и -ed' },
		{
			type: 'grid',
			offset: false,
			gridId: 'grid-17497',
			cells: [
				{
					children: [
						{ type: 'header', tag: 'h4', style: 'h4', text: '-ing' },
						{
							type: 'paragraph',
							offset: false,
							textSize: 'normal',
							children: [
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'Прилагательные с окончанием ',
								},
								{ type: 'text', color: 'blue', weight: 'normal', text: '–ing' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: ' описывают впечатление, которое производит на человека.',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'confusing',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'смущающий',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'tiring' },
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'утомительный',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'exciting',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'волнующий',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'surprising',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'удивительный',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'interesting',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'интересный',
								},
							],
						},
					],
				},
				{
					children: [
						{ type: 'header', tag: 'h4', style: 'h4', text: '-ed' },
						{
							type: 'paragraph',
							offset: false,
							textSize: 'normal',
							children: [
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'А заканчивающиеся на ',
								},
								{ type: 'text', color: 'blue', weight: 'normal', text: '-ed' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: ' описывают эмоции человека.',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'confused',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'смущённый',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'tired' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'усталый' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'excited' },
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'взволнованный',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'surprised',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'удивленный',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'interested',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'заинтересованный',
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'giant',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Мои дети были так взволнованы.',
				},
				{ type: 'arrow' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'My children were so excited.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Это действительно интересная книга.',
				},
				{ type: 'arrow' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'It is a really interesting book.',
				},
			],
		},
		{
			type: 'exercises',
			id: 1,
			exercises: [
				{
					rusSentence: 'Я уставший.',
					engSentences: [
						{
							engSentences: ['I am tired.'],
							isCorrect: true,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Верно! Прилагательные с окончанием ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: '-ed',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' описывают эмоции человека.',
										},
									],
								},
							],
						},
						{
							engSentences: ['I is tired.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Глагол to be в форме is используется в настоящем времени только после подлежащих в третьем лице. Это местоимения he, she, it. А у нас местоимение первого лица, поэтому должен быть am.',
										},
									],
								},
							],
						},
						{
							engSentences: ['I tired.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Если сообщаете о свойстве, то при переводе используйте глагол to be в форме настоящего времени. Поэтому он будет выглядеть в одной из трёх форм в зависимости от лица подлежащего: ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'am',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ', ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'are',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' или ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'is',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '. После подлежащего первого лица используется ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'am',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'уставший', engWord: 'tired' }],
				},
				{
					rusSentence: 'Она талантливая певица.',
					engSentences: [
						{
							engSentences: ['She is a talented singer.'],
							isCorrect: true,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Верно! Прилагательные с окончанием ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: '-ed',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' описывают эмоции человека.',
										},
									],
								},
							],
						},
						{
							engSentences: ['She a is talented singer.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Воспринимайте talented singer как одну сущность: талантливая певица. Но англичанам важно знать это одна из множества талантливых певиц или та самая. Одна из множества. Поэтому перед ней ставьте неопределённый артикль a потому что «певица» — это исчисляемое существительное в единственном числе. А артикль ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'a',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' ставится перед ними.',
										},
									],
								},
								{
									type: 'paragraph',
									offset: true,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Так как сообщается кем является персонаж, то ставится ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' в форме ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'is',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '. И следом сама конструкция ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'a talented singer',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '.',
										},
									],
								},
							],
						},
						{
							engSentences: ['She are talented singer.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'После she должен стоять to be в форме is, а не are.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'талантливый', engWord: 'talented' },
						{ rusWord: 'певец', engWord: 'singer' },
					],
				},
				{
					rusSentence: 'Это ограниченная серия.',
					engSentences: [{ engSentences: ['It is a limited series.'], isCorrect: true }],
					words: [
						{ rusWord: 'ограниченный', engWord: 'limited' },
						{ rusWord: 'серия', engWord: 'series' },
					],
				},
				{
					rusSentence: 'Эти инструкции дейстительно запутанные.',
					engSentences: [
						{
							engSentences: ['This instructions are really confusing.'],
							isCorrect: true,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Верно! Прилагательные с окончанием ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: '-ing',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' описывают впечатление оказываемое на человека.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'инструкции', engWord: 'instructions' },
						{ rusWord: 'дейстительно', engWord: 'really' },
						{ rusWord: 'запутанный', engWord: 'confusing' },
					],
				},
				{
					rusSentence: 'Я был разочарован.',
					engSentences: [
						{
							engSentences: ['I was disappointed.'],
							isCorrect: true,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Верно! Прилагательные с окончанием ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: '-ed',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' описывают эмоции человека.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'разочарованный', engWord: 'disappointed' }],
				},
				{
					rusSentence: 'Это заметно и является проблемой.',
					engSentences: [
						{
							engSentences: ['It is noticed and is an issue.'],
							isCorrect: true,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Верно! Прилагательные с окончанием ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: '-ed',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' описывают эмоции человека.',
										},
									],
								},
							],
						},
						{
							engSentences: [],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'После подлежащего должен быть to be в форме is потому что следом идёт прилагательное и существительное.',
										},
									],
								},
							],
						},
						{
							engSentences: [],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'issue — это существительное. Поэтому должно быть определяющее слово. А ещё второе существительное относится к подлежащему it, поэтому перед ним должен быть to be.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'заметный', engWord: 'noticed' },
						{ rusWord: 'проблема', engWord: 'issue' },
					],
				},
				{
					rusSentence: 'Они были отвратительны и, вероятно, ядовиты.',
					engSentences: [
						{
							engSentences: ['They were disgusting and probably poisonous.'],
							isCorrect: true,
						},
					],
					words: [
						{ rusWord: 'отвратительный', engWord: 'disgusting' },
						{ rusWord: 'вероятно', engWord: 'probably' },
						{ rusWord: 'ядовит', engWord: 'poisonous' },
					],
				},
				{
					rusSentence: 'Я единственный ребенок и очень балованная.',
					engSentences: [
						{ engSentences: ['I am an only child and very spoiled.'], isCorrect: true },
					],
					words: [
						{ rusWord: 'единственный', engWord: 'only' },
						{ rusWord: 'ребенок', engWord: 'child' },
						{ rusWord: 'очень', engWord: 'very' },
						{ rusWord: 'балованный', engWord: 'spoiled' },
					],
				},
				{
					rusSentence: 'Я был очень смущён.',
					engSentences: [{ engSentences: ['I was very confused.'], isCorrect: true }],
					words: [
						{ rusWord: 'очень', engWord: 'very' },
						{ rusWord: 'смущён', engWord: 'confused' },
					],
				},
				{
					rusSentence: 'Это было захватывающее шоу.',
					engSentences: [
						{
							engSentences: ['It was an exciting show.'],
							isCorrect: true,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Верно! Прилагательные с окончанием ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: '-ing',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' описывают впечатление оказываемое на человека.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'захватывающее', engWord: 'exciting' },
						{ rusWord: 'шоу', engWord: 'show' },
					],
				},
			],
			offset: true,
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Противоположное значение' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Некоторые префиксы изменяют смысл прилагательного на противоположное.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'un' },
				{ type: 'text', color: 'black', weight: 'normal', text: ':' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Обычный, необычный' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Usual, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'un' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'usual' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Знакомый, незнакомый' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Familiar, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'un' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'familiar' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'in' },
				{ type: 'text', color: 'black', weight: 'normal', text: ':' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Правильный, неправильный',
				},
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Correct, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'in' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'correct' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Полный, неполный' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Complete, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'In' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'complete' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'il' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' перед ' },
				{ type: 'text', color: 'gold', weight: 'normal', text: 'I' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Законный, незаконный' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Legal, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'il' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'legal' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Грамотный, неграмотный' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Illiterate, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'il' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'literate' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'ir' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' перед ' },
				{ type: 'text', color: 'gold', weight: 'normal', text: 'r' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Уместный, неуместный' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Relevant, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'ir' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'relevant' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Ответственный, безответственный',
				},
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Responsible, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'ir' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'responsible' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'im' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' перед ' },
				{ type: 'text', color: 'gold', weight: 'normal', text: 'm' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' и ' },
				{ type: 'text', color: 'gold', weight: 'normal', text: 'p' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Вежливый, невежливый' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Polite, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'im' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'polite' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Возможный, невозможный' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Possible, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'im' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'possible' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'К сожалению невозможно вычислить через какой префикс задать прилагательному противоположное значение. Это нужно только знать. Дело усугубляется ещё и тем, что не каждое слово может иметь противоположение значение. А множеству слов вообще нельзя добавлять эти префиксы.  Для таких случаев есть отрицательная частица которую изучим в одной из следующих глав.',
				},
			],
		},
		{
			type: 'exercises',
			id: 2,
			exercises: [
				{
					rusSentence: 'Честер незаменим.',
					engSentences: [
						{ engSentences: ['Chester is irreplaceable.'], isCorrect: true },
						{
							engSentences: ['Chester are irreplaceable.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Так как имена имеют третье лицо, то после них глагол ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' в настоящем времени будет стоять в форме ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'is',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '.',
										},
									],
								},
							],
						},
						{
							engSentences: ['Chester irreplaceable.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Если в предложении сообщаете о свойстве или качестве не забывайте про ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'незаменимый', engWord: 'irreplaceable' }],
				},
				{
					rusSentence: 'Она ведёт себя аморально.',
					engSentences: [{ engSentences: ['Her behavior is immoral.'], isCorrect: true }],
					words: [
						{
							note: 'Дословный перевод «её поведение»',
							rusWord: 'Она ведёт себя',
							engWord: 'Her behavior',
						},
						{
							note: 'Происходит от moral — нравственный',
							rusWord: 'Аморально',
							engWord: 'immoral',
						},
					],
				},
				{
					rusSentence: 'Это слишком неточный способ.',
					engSentences: [
						{ engSentences: ['It is too inaccurate way.'], isCorrect: true },
					],
					words: [
						{ rusWord: 'неточный', engWord: 'inaccurate' },
						{ note: 'Дословно «путь»', rusWord: 'способ', engWord: 'way' },
					],
				},
				{
					rusSentence: 'Он был безграмотным человеком.',
					engSentences: [
						{ engSentences: ['He was an illiterate person.'], isCorrect: true },
					],
					words: [
						{
							note: 'Происходит от literate — грамотный',
							rusWord: 'безграмотный',
							engWord: 'illiterate',
						},
					],
				},
				{
					rusSentence: 'Она была в неизвестном месте среди неизвестных людей.',
					engSentences: [
						{
							engSentences: ['She was at an unknown place, among unknown people.'],
							isCorrect: true,
						},
					],
					words: [
						{ rusWord: 'неизвестный', engWord: 'unknown' },
						{ rusWord: 'место', engWord: 'place' },
						{ rusWord: 'среди', engWord: 'among' },
						{ rusWord: 'люди', engWord: 'people' },
					],
				},
				{
					rusSentence: 'Джек очень несчастен.',
					engSentences: [{ engSentences: ['Jake is very unhappy.'], isCorrect: true }],
					words: [{ rusWord: 'несчастен', engWord: 'unhappy' }],
				},
			],
			offset: true,
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Образование из существительных' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Прилагательное можно сделать из существительного  через добавления суффикса.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [{ type: 'text', color: 'blue', weight: 'normal', text: 'y' }],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Здоровье, здоровый' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Health, health' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'y' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [{ type: 'text', color: 'blue', weight: 'normal', text: 'ly' }],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Друг, дружеский' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Friend, friend' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'ly' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [{ type: 'text', color: 'blue', weight: 'normal', text: 'al' }],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Политика, политический' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Politic, politic' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'al' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [{ type: 'text', color: 'blue', weight: 'normal', text: 'ful' }],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Красота, красивый' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Beauty, beauti' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'ful' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [{ type: 'text', color: 'blue', weight: 'normal', text: 'ous' }],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Опасность, опасный' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Danger, danger' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'ous' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [{ type: 'text', color: 'blue', weight: 'normal', text: 'ish' }],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Швед, шведский' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Swede, Swed' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'ish' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [{ type: 'text', color: 'blue', weight: 'normal', text: 'ive' }],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Действие, действительный',
				},
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Effect, effect' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'ive' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Суффикс ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'less' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' указывает на отсутствие свойства или качества.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Дом, бездомный' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Home, home' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'less' },
			],
		},
		{
			type: 'exercises',
			id: 3,
			exercises: [
				{
					rusSentence: 'Это прекрасный день.',
					engSentences: [
						{ engSentences: ['It is a beautiful day.'], isCorrect: true },
						{
							engSentences: ['It a beautiful day.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'В предложении говорится чем является это, поэтому должен присутствовать ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: '.',
										},
									],
								},
							],
						},
						{
							engSentences: ['The is beautiful day.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'В переводе забыто слово «это». И после ',
										},
										{
											type: 'text',
											color: 'gold',
											weight: 'normal',
											text: 'the',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'to be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' не ставится.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'прекрасный', engWord: 'beautiful' },
						{ rusWord: 'день', engWord: 'day' },
					],
				},
				{
					rusSentence: 'Открытая Россия — политическая партия.',
					engSentences: [
						{ engSentences: ['Open Russia is a political party.'], isCorrect: true },
						{
							engSentences: [],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'Не стоит неопределённый артикль a перед political party. Его нужно поставить потому что подразумевается, что Открытая Россия не является одной из множества политических партий. Англичанам важно знать какое существительное перед ними: неопределённое или конкретное.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'открытый', engWord: 'open' },
						{ rusWord: 'Россия', engWord: 'Russia' },
						{ rusWord: 'политический', engWord: 'political' },
						{ rusWord: 'партия', engWord: 'party' },
					],
				},
				{
					rusSentence: 'Несмотря на это, они слишком эмоциональны.',
					engSentences: [
						{ engSentences: ['Despite it, they are too emotional.'], isCorrect: true },
						{
							engSentences: [],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: 'После подлежащего должен быть to be в форме are.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'несмотря на это', engWord: 'despite it' },
						{ rusWord: 'слишком', engWord: 'too' },
						{ rusWord: 'эмоциональный', engWord: 'emotional' },
					],
				},
			],
			offset: true,
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Такие образования прилагательных из существительных не характерны в основной массе. В большинстве случаев не только прилагательные, но и другие слова выглядят одинаково для нескольких частей речи. Например слово professional может быть или существительным «профессионал» и прилагательным «профессиональный». Часть речи зависит от положения слова в предложении.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Все эти префиксы и суффиксы сразу запомнить невозможно. Но я хочу чтобы эта информация просто осела и при переводе с английского вы это замечали. Также можно сократить количество запоминаемых слов если, например, учить существительные, а по ним прибавляя суффикс получать прилагательное.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Ответьте на вопросы чтобы понять как вы усвоили материал.',
				},
			],
		},
		{
			type: 'faq',
			items: [
				{
					question: {
						type: 'ReactNode',
						value: [
							{
								type: 'paragraph',
								offset: false,
								textSize: 'normal',
								children: [
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'Что такое ',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'bold',
										text: 'инфинитив',
									},
									{ type: 'text', color: 'black', weight: 'normal', text: '?' },
								],
							},
						],
					},
					answer: {
						type: 'ReactNode',
						value: [
							{
								type: 'paragraph',
								offset: false,
								textSize: 'normal',
								children: [
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'Это форма глагола отвечающая на вопросы «Что делать?», «Что сделать?». По ней невозможно определить время совершения действия, лицо, число. Выражает само действие в чистом виде.',
									},
								],
							},
							{
								type: 'paragraph',
								offset: false,
								textSize: 'big',
								children: [
									{
										type: 'text',
										color: 'gray',
										weight: 'normal',
										text: 'Что делать?',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' Смотреть.',
									},
								],
							},
							{
								type: 'paragraph',
								offset: false,
								textSize: 'big',
								children: [
									{
										type: 'text',
										color: 'gray',
										weight: 'normal',
										text: 'Что делать?',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' Отдыхать.',
									},
								],
							},
						],
					},
				},
				{
					question: {
						type: 'ReactNode',
						value: [
							{
								type: 'paragraph',
								offset: false,
								textSize: 'normal',
								children: [
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'Что будет если ',
									},
									{ type: 'text', color: 'black', weight: 'bold', text: 'be' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' не ставить?',
									},
								],
							},
						],
					},
					answer: {
						type: 'ReactNode',
						value: [
							{
								type: 'paragraph',
								offset: false,
								textSize: 'normal',
								children: [
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'Англичане привыкли, что после подлежащего стоит глагол. Подлежащее выполняет действие направленное на кого-то. Действие связывает подлежащее с остальными частями предложения, устанавливает их взаимоотношения. И если его опустить, то предложение просто лишится смысла. Представьте если вы в предложении',
									},
								],
							},
							{
								type: 'paragraph',
								offset: false,
								textSize: 'big',
								children: [
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'Осёл ',
									},
									{
										type: 'text',
										color: 'gray',
										weight: 'normal',
										text: 'выпил',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' воду.',
									},
								],
							},
							{
								type: 'paragraph',
								offset: false,
								textSize: 'normal',
								children: [
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'убрать глагол «выпил», то отношения между существительными не понятны.',
									},
								],
							},
						],
					},
				},
				{
					question: {
						type: 'ReactNode',
						value: [
							{
								type: 'paragraph',
								offset: false,
								textSize: 'normal',
								children: [
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'Для чего ставить глагол ',
									},
									{ type: 'text', color: 'black', weight: 'bold', text: 'be' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' в одной из временных форм?',
									},
								],
							},
						],
					},
					answer: {
						type: 'ReactNode',
						value: [
							{
								type: 'paragraph',
								offset: false,
								textSize: 'normal',
								children: [
									{ type: 'text', color: 'black', weight: 'bold', text: 'Be' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' для англичан обычный глагол как и любой другой смысловой глагол. Глагол обозначает действие. Персонаж всегда выполняет действие в какое-то определённое время: прошлое, настоящее, будущее. Без указания на время предложение будет неполноценным.',
									},
								],
							},
						],
					},
				},
				{
					question: {
						type: 'ReactNode',
						value: [
							{
								type: 'paragraph',
								offset: false,
								textSize: 'normal',
								children: [
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'Чем ',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'bold',
										text: 'инфинитивная',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' форма глагола отличается от ',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'bold',
										text: 'неопределённой',
									},
									{ type: 'text', color: 'black', weight: 'normal', text: '?' },
								],
							},
						],
					},
					answer: {
						type: 'ReactNode',
						value: [
							{
								type: 'paragraph',
								offset: false,
								textSize: 'normal',
								children: [
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'Ничем. Это синонимы. Глагол не нагруженный временем и выражающий чистое действие в русском языке называется неопределённым, а в английском инфинитивом.',
									},
								],
							},
						],
					},
				},
			],
		},
	],
}

export default adjectives
