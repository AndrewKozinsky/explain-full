import ArticleType from '../../articleType'
import ToBePresentTable from './ToBePresentTable'
import ToBePastTable from './ToBePastTable'
import ToBeFutureTable from './ToBeFutureTable'

const toBePositive: ArticleType.ArtArticle = {
	type: ArticleType.ArtType.article,
	meta: {
		number: 4,
		slug: 'to-be-positive',
		caption: 'Глава 2',
		articleName: 'Глагол be',
		articleDescription:
			'Глагол be используется для описания состояния, местоположения или принадлежности.',
		isPaid: false,
	},
	content: [
		{ type: 'header', tag: 'h2', style: 'h2', text: 'В настоящем времени' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Давайте попробуем дословно перевести следующие предложения:',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Я космонавт.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'I spaceman.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Они клоуны.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'They clown.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это щенок.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It puppy.' },
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
					text: 'Предложение на английском языке должно содержать в себе как минимум подлежащее и сказуемое. ',
				},
				{ type: 'text', color: 'black', weight: 'bold', text: 'Подлежащее' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' — это объект совершающий действие. Он может быть выражен местоимением, именем, существительным. А ',
				},
				{ type: 'text', color: 'black', weight: 'bold', text: 'сказуемое' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' — это само действие. Выражается глаголом.',
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
					text: 'В предложениях подлежащие в виде местоимения. Тут сделано как надо. Но в моих предложениях нет сказуемого, то есть самого действия. Когда-то давно в русском языке оно ставилось. На современный манер звучало бы как «есть». В болгарском оно существует до сих пор. И в английском тоже. Оно называется be. Поставлю в перевод.',
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
				{ type: 'text', color: 'black', weight: 'normal', text: ' космонавт.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'I ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'be' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' spaceman.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Они ' },
				{ type: 'text', color: 'gray', weight: 'normal', text: '(есть)' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' клоуны.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'They ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'be' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' clown.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это ' },
				{ type: 'text', color: 'gray', weight: 'normal', text: '(есть)' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' щенок.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'be' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' puppy.' },
			],
		},
		{
			type: 'note',
			noteStyle: 'gray',
			children: [
				{
					type: 'paragraph',
					offset: false,
					textSize: 'normal',
					children: [
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: 'Иногда и в современном русском языке явно используем глагол «есть» в разных видах:',
						},
					],
				},
				{
					type: 'paragraph',
					offset: false,
					textSize: 'big',
					children: [
						{ type: 'text', color: 'black', weight: 'normal', text: 'Незаконным ' },
						{ type: 'text', color: 'blue', weight: 'normal', text: 'является' },
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: ' способ получения этих средств.',
						},
					],
				},
				{
					type: 'paragraph',
					offset: false,
					textSize: 'big',
					children: [
						{ type: 'text', color: 'black', weight: 'normal', text: 'Что вы из себя ' },
						{ type: 'text', color: 'blue', weight: 'normal', text: 'представляете' },
						{ type: 'text', color: 'black', weight: 'normal', text: '?' },
					],
				},
				{
					type: 'paragraph',
					offset: false,
					textSize: 'big',
					children: [
						{ type: 'text', color: 'black', weight: 'normal', text: 'Там ' },
						{ type: 'text', color: 'blue', weight: 'normal', text: 'есть' },
						{ type: 'text', color: 'black', weight: 'normal', text: ' стол.' },
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
							text: 'Тире также аналог слова «есть»:',
						},
					],
				},
				{
					type: 'paragraph',
					offset: false,
					textSize: 'big',
					children: [
						{ type: 'text', color: 'black', weight: 'normal', text: 'Борис ' },
						{ type: 'text', color: 'blue', weight: 'normal', text: '—' },
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: ' сильный мужчина.',
						},
					],
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
					text: 'Английские глаголы могут находиться в одном из трёх форм:',
				},
			],
		},
		{
			type: 'list',
			listType: 'numbers',
			children: [
				{
					type: 'paragraph',
					offset: false,
					textSize: 'normal',
					children: [
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: 'В неопределённой форме (инфинитив). Это глагол отвечающий на вопрос «что делать?». Он не содержит в себе сведений о времени совершения действия. Глагол «есть» в неопределённой форме будет ',
						},
						{ type: 'text', color: 'blue', weight: 'normal', text: 'be' },
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: '. Как я и поставил.',
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
							text: 'В форме настоящего времени.',
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
							text: 'В форме прошедшего времени.',
						},
					],
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
					text: 'Форма глагола be в настоящем времени зависит от лица подлежащего.',
				},
			],
		},
		{ type: 'customComponent', component: <ToBePresentTable /> },
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Сказуемое всегда должно показывать время совершения действия. Давайте ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'be' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' переделаем в форму настоящего времени.',
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
				{ type: 'text', color: 'black', weight: 'normal', text: ' космонавт.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'I ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'am' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' spaceman.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Они ' },
				{ type: 'text', color: 'gray', weight: 'normal', text: '(есть)' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' клоуны.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'They ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'are' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' clown.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это ' },
				{ type: 'text', color: 'gray', weight: 'normal', text: '(есть)' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' щенок.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'is' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' puppy.' },
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
					text: 'Последним шагом перед существительными в единственном числе поставлю неопределённый артикль ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Его назначение будет объяснено в следующей главе. А существительное clown стоит в единственном числе. Чтобы сделать во множественном добавлю окончание ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: '-s' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Эта тема тоже будет разобрана в одной из следующих глав.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Я космонавт.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'I am ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' spaceman.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Они клоуны.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'They are clown' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 's' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это щенок.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It is ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' puppy.' },
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
					text: 'Чтобы закрепить новые значения выполните упражнения на перевод.',
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
						{ engSentences: ['It is a book.'], isCorrect: true },
						{
							engSentences: ['It a book.'],
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
											text: 'В предложении сообщается чем является подлежащее «Это». Поэтому после него ставиться to be в одной из своих форм зависящей от лица подлежащего.',
										},
									],
								},
							],
						},
						{
							engSentences: ['It is the book.'],
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
											text: 'Книга упоминается в первый раз. Поэтому существительное «книга» будет в значении «одна из книг». Чтобы это показать поставьте неопределённый артикль ',
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
											text: ' вместо ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'the',
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
					words: [{ rusWord: 'книга', engWord: 'a book' }],
				},
				{
					rusSentence: 'Я строитель',
					engSentences: [{ engSentences: ['I am a builder.'], isCorrect: true }],
					words: [{ rusWord: 'книга', engWord: 'a book' }],
				},
				{
					rusSentence: 'Это журнал.',
					engSentences: [
						{ engSentences: ['It is a magazine.'], isCorrect: true },
						{
							engSentences: ['It are a magazine.'],
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
											text: 'После ',
										},
										{
											type: 'text',
											color: 'gold',
											weight: 'normal',
											text: 'it',
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
											text: 'be',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' будет в форме ',
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
											text: '. Are ставится только после подлежащего второго лица.',
										},
									],
								},
							],
						},
						{
							engSentences: ['They are a magazine.'],
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
											text: 'They обозначает «они». А в предложении сказано «Это». Поэтому должно быть ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'it',
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
						{ rusWord: 'журнал', engWord: 'a magazine', transcription: 'mæɡəˈziːn' },
					],
				},
				{
					rusSentence: 'Он учитель.',
					engSentences: [
						{ engSentences: ['He is a teacher.'], isCorrect: true },
						{
							engSentences: ['He teacher.'],
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
											text: 'В этом предложении сообщается о профессии человека, кем он является. В английском чтобы сообщить и каким является персонаж и кем/чем нужно использовать to be в форме зависящей от лица подлежащего. «Он» — это третье лицо, поэтому to be будет в форме is.',
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
											text: 'Ещё перед любым существительным англоговорящие ставят определяющее слово каким оно является: определённым или неопределённым. Определённые существительные обозначают точный предмет известный собеседнику. А неопределённые любой предмет из класса таких же предметов. В русском предложении говорится о профессии персонажа: он один из учителей. Поэтому существительное будет неопределённым. А чтобы это обозначить перед ним ставится неопределённый артикль a.',
										},
									],
								},
							],
						},
						{
							engSentences: ['He a teacher.'],
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
											text: 'В этом предложении сообщается о профессии человека, кем он является. В английском чтобы сообщить и каким является персонаж и кем/чем нужно использовать to be в форме зависящей от лица подлежащего. «Он» — это третье лицо, поэтому to be будет в форме is.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'учитель', engWord: 'a teacher' }],
				},
				{
					rusSentence: 'Мария врач.',
					engSentences: [
						{ engSentences: ['Maria is a doctor.'], isCorrect: true },
						{
							engSentences: ['Maria is a vet.'],
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
											text: 'Мария не ветеринар, а врач.',
										},
									],
								},
							],
						},
						{
							engSentences: ['Maria am doctor.'],
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
											text: 'Все имена в третьем лице. Поэтому после них to be стоит в форме is, а не am.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'врач', engWord: 'a doctor' }],
				},
				{
					rusSentence: 'Это телефон.',
					engSentences: [
						{ engSentences: ['It is a phone.'], isCorrect: true },
						{
							engSentences: ['It is an phone.'],
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
											text: 'An используется если следом идёт слово начинающееся на гласную. А phone и на письме и вербально начинается на согласную ph.',
										},
									],
								},
							],
						},
						{
							engSentences: ['It are phone.'],
							isCorrect: false,
							analysis: [
								{
									type: 'paragraph',
									offset: false,
									textSize: 'normal',
									children: [
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'It',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' — это местоимение третьего лица. Поэтому после него должен стоять ',
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
											text: '. И перед существительным не написан неопределённый артикль ',
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
											text: ' потому что сообщается, что это один из множества старых телефонов, не не какой-то конкретный.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'телефон', engWord: 'a phone' }],
				},
				{
					rusSentence: 'Павел студент.',
					engSentences: [
						{ engSentences: ['Pavel is a student.'], isCorrect: true },
						{
							engSentences: ['Pavel be student.'],
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
											text: 'Павел является студентом. Тут правильно использован ',
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
											text: '. Но ',
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
											text: ' в чистом виде используется в других типах предложений. Тут ',
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
											text: ' должен быть в одной из форм настоящего времени потому что без указания времени бытия предложение грамматически неправильное. В какой форме будет ',
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
											text: '?',
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
											text: 'Ещё мы договорились перед существительными ставить один из определителей. Так как тут сообщается, что Павел является одним из студентов, то перед ним ставится неопределённый артикль ',
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
						{
							engSentences: ['Pavel is student.'],
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
											text: 'Перед существительными ставится один из определителей. Так как тут сообщается, что Павел является одним из студентов, то перед ним ставится неопределённый артикль ',
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
					words: [{ rusWord: 'студент', engWord: 'a student' }],
				},
				{
					rusSentence: 'Это дверь.',
					engSentences: [
						{ engSentences: ['It is a door.'], isCorrect: true },
						{
							engSentences: ['Pavel be student.'],
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
											text: 'Павел является студентом. Тут правильно использован ',
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
											text: '. Но ',
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
											text: ' в чистом виде используется в других типах предложений. Тут ',
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
											text: ' должен быть в одной из форм настоящего времени потому что без указания времени бытия предложение грамматически неправильное. В какой форме будет ',
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
											text: '?',
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
											text: 'Ещё мы договорились перед существительными ставить один из определителей. Так как тут сообщается, что Павел является одним из студентов, то перед ним ставится неопределённый артикль ',
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
					words: [{ rusWord: 'студент', engWord: 'a student' }],
				},
				{
					rusSentence: 'Они всё ещё дети.',
					engSentences: [{ engSentences: ['They are still children.'], isCorrect: true }],
					words: [{ rusWord: 'студент', engWord: 'a student' }],
				},
				{
					rusSentence: 'Просто представь себе они уже капитаны!',
					engSentences: [
						{
							engSentences: ['Just imagine they are captans already!'],
							isCorrect: true,
						},
					],
					words: [{ rusWord: 'студент', engWord: 'a student' }],
				},
			],
			offset: true,
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'В прошедшем' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Глагол be в прошедшем времени тоже зависит от лица подлежащего. Только тут две формы, а не три как в настоящем времени.',
				},
			],
		},
		{ type: 'customComponent', component: <ToBePastTable /> },
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'В русском языке глагол «есть» уже явно присутствует в прошедшем времени в виде формы «был/была/было/были».',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Я ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'был' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' космонавтом.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'I ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'was' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' a spaceman.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Они ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'были' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' клоунами.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'They ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'were' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' clowns.' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Он ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'был' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' щенком.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'was' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' a puppy.' },
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
					text: 'Предложение «Это был щенком» на русском звучит неестественно. Поэтому заменил на «он». Но в английском всё равно будет переводиться через it потому что he и she используются как местоимения для людей. Животные и неодушевлённые предметы называются через it.',
				},
			],
		},
		{
			type: 'note',
			noteStyle: 'gray',
			children: [
				{
					type: 'paragraph',
					offset: false,
					textSize: 'normal',
					children: [
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: 'Was ставится перед подлежащим единственного числа, а were множественного. Как и в русском для единственного говорим «был», а для множественного «были». Даже по количеству букв слова совпадают.',
						},
					],
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
					text: 'Попробуйте перевести предложения в прошедшем времени.',
				},
			],
		},
		{
			type: 'exercises',
			id: 1,
			exercises: [
				{
					rusSentence: 'К тому времени я был ученым.',
					engSentences: [
						{ engSentences: ['At that time, I was a scientist.'], isCorrect: true },
					],
					words: [{ rusWord: 'рад', engWord: 'glad' }],
				},
				{
					rusSentence: 'Он был слесарем.',
					engSentences: [{ engSentences: ['He was a mechanic.'], isCorrect: true }],
					words: [{ rusWord: 'рад', engWord: 'glad' }],
				},
				{
					rusSentence: 'Она была врачом.',
					engSentences: [{ engSentences: ['She was a doctor.'], isCorrect: true }],
					words: [{ rusWord: 'рад', engWord: 'glad' }],
				},
				{
					rusSentence: 'Они были детьми.',
					engSentences: [{ engSentences: ['They were children.'], isCorrect: true }],
					words: [{ rusWord: 'рад', engWord: 'glad' }],
				},
				{
					rusSentence: 'Это было испытанием.',
					engSentences: [{ engSentences: ['It was a challenge.'], isCorrect: true }],
					words: [{ rusWord: 'рад', engWord: 'glad' }],
				},
				{
					rusSentence: 'Я был ребёнком в глубине души.',
					engSentences: [{ engSentences: ['I was a child at heart.'], isCorrect: true }],
					words: [
						{ rusWord: 'ребёнок', engWord: 'a child' },
						{
							note: 'Буквально переводится «в сердце»',
							rusWord: 'в глубине души',
							engWord: 'at heart',
						},
					],
				},
				{
					rusSentence: 'Он был совершенно один.',
					engSentences: [{ engSentences: ['He was completely alone.'], isCorrect: true }],
					words: [{ rusWord: 'болен', engWord: 'sick' }],
				},
				{
					rusSentence: 'Она была профессионалом.',
					engSentences: [{ engSentences: ['She was a professional.'], isCorrect: true }],
					words: [{ rusWord: 'болен', engWord: 'sick' }],
				},
				{
					rusSentence: 'Я был трудоголиком в лучшие времена.',
					engSentences: [
						{
							engSentences: ['I was a workaholic in the best of times.'],
							isCorrect: true,
						},
					],
					words: [{ rusWord: 'болен', engWord: 'sick' }],
				},
				{
					rusSentence: 'Они были строителями днём, и грабителями ночью.',
					engSentences: [
						{
							engSentences: ['I was a workaholic in the best of times.'],
							isCorrect: true,
						},
					],
					words: [{ rusWord: 'болен', engWord: 'sick' }],
				},
			],
			offset: true,
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'В будущем' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Английские глаголы не имеет формы будущего времени. Поэтому предложения строят в форме настоящего времени, но применяют некоторые средства чтобы указать на будущие действия. Одно из них — модальный глагол ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'will' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'note',
			noteStyle: 'gray',
			children: [
				{
					type: 'paragraph',
					offset: false,
					textSize: 'normal',
					children: [
						{
							type: 'text',
							color: 'gold',
							weight: 'normal',
							text: 'Смысловые глаголы',
						},
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: ' выражают действие (летать, прыгать, падать), а ',
						},
						{ type: 'text', color: 'blue', weight: 'normal', text: 'модальные' },
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: ' выражают отношение к действию (могу, буду, должен).',
						},
					],
				},
				{
					type: 'paragraph',
					offset: false,
					textSize: 'giant',
					children: [
						{ type: 'text', color: 'black', weight: 'normal', text: 'Я ' },
						{ type: 'text', color: 'blue', weight: 'normal', text: 'могу' },
						{ type: 'text', color: 'black', weight: 'normal', text: ' ' },
						{ type: 'text', color: 'gold', weight: 'normal', text: 'летать' },
						{ type: 'text', color: 'black', weight: 'normal', text: '.' },
					],
				},
				{
					type: 'paragraph',
					offset: false,
					textSize: 'giant',
					children: [
						{ type: 'text', color: 'black', weight: 'normal', text: 'Я ' },
						{ type: 'text', color: 'blue', weight: 'normal', text: 'буду' },
						{ type: 'text', color: 'black', weight: 'normal', text: ' ' },
						{ type: 'text', color: 'gold', weight: 'normal', text: 'прыгать' },
						{ type: 'text', color: 'black', weight: 'normal', text: '.' },
					],
				},
				{
					type: 'paragraph',
					offset: false,
					textSize: 'giant',
					children: [
						{ type: 'text', color: 'black', weight: 'normal', text: 'Я ' },
						{ type: 'text', color: 'blue', weight: 'normal', text: 'должен' },
						{ type: 'text', color: 'black', weight: 'normal', text: ' ' },
						{ type: 'text', color: 'gold', weight: 'normal', text: 'взобраться' },
						{ type: 'text', color: 'black', weight: 'normal', text: '.' },
					],
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Модальный глагол ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'will' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' означает «изволить что-то сделать».',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Переведу предложение:' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Я буду космонавтом.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'I ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'will' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' ' },
				{ type: 'text', color: 'gold', weight: 'normal', text: 'be' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' a spaceman.' },
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
					text: 'Сказуемое тут — это глагол ',
				},
				{ type: 'text', color: 'gold', weight: 'normal', text: 'will' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Сказуемое всегда должно стоять во временной форме, вы это уже видели при разборе предложений в настоящем и прошедшем времени. Так как предложение в настоящем времени, то will будет в форме настоящего времени. И дальше должно идти действие, которе я изволяю совершить: ',
				},
				{ type: 'text', color: 'gold', weight: 'normal', text: 'бытие' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Это дополнение. Дословно можно перевести как «Я ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'изволю' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' ' },
				{ type: 'text', color: 'gold', weight: 'normal', text: 'быть' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' космонавтом». На дополнение не ложится нагрузка времени, поэтому оно стоит в инфинитивной форме ',
				},
				{ type: 'text', color: 'gold', weight: 'normal', text: 'be' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'note',
			noteStyle: 'gray',
			children: [
				{
					type: 'paragraph',
					offset: false,
					textSize: 'normal',
					children: [
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: 'В русском языке тоже после модального глагола стоит глагол в неопределённой форме.',
						},
					],
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
					text: 'Формула будущего действия самая простая.',
				},
			],
		},
		{ type: 'customComponent', component: <ToBeFutureTable /> },
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Попробуйте перевести предложения в будущем времени.',
				},
			],
		},
		{
			type: 'exercises',
			id: 2,
			exercises: [
				{
					rusSentence: 'Мы скоро будем готовы.',
					engSentences: [{ engSentences: ['We will be ready soon.'], isCorrect: true }],
					words: [
						{ rusWord: 'готовый', engWord: 'ready' },
						{ rusWord: 'скоро', engWord: 'soon' },
					],
				},
				{
					rusSentence: 'Скоро я буду дома.',
					engSentences: [{ engSentences: ['I will be home soon.'], isCorrect: true }],
					words: [
						{ rusWord: 'дом', engWord: 'home' },
						{ rusWord: 'скоро', engWord: 'soon' },
					],
				},
				{
					rusSentence: 'Однажды он станет врачом.',
					engSentences: [
						{ engSentences: ['He will be a doctor one day.'], isCorrect: true },
					],
					words: [
						{ rusWord: 'однажды', engWord: 'one day' },
						{ rusWord: 'врач', engWord: 'doctor' },
					],
				},
				{
					rusSentence: 'Скоро ты будешь взрослой.',
					engSentences: [
						{ engSentences: ['Soon you will be an adult'], isCorrect: true },
					],
					words: [
						{ rusWord: 'однажды', engWord: 'one day' },
						{ rusWord: 'врач', engWord: 'doctor' },
					],
				},
				{
					rusSentence: 'Завтра будет новый день.',
					engSentences: [
						{ engSentences: ['Tomorrow will be a new day.'], isCorrect: true },
					],
					words: [
						{ rusWord: 'однажды', engWord: 'one day' },
						{ rusWord: 'врач', engWord: 'doctor' },
					],
				},
				{
					rusSentence: 'Он будет лидером команды.',
					engSentences: [
						{ engSentences: ['She will be a team leader.'], isCorrect: true },
					],
					words: [
						{ rusWord: 'команда', engWord: 'team' },
						{ rusWord: 'лидер', engWord: 'leader' },
					],
				},
				{
					rusSentence: 'Я буду одновременно продавцом и кассиром.',
					engSentences: [
						{
							engSentences: ['I will be a salesman and a cashier at the same time.'],
							isCorrect: true,
						},
					],
					words: [
						{ rusWord: 'команда', engWord: 'team' },
						{ rusWord: 'лидер', engWord: 'leader' },
					],
				},
				{
					rusSentence: 'Я лягушка, но ночью буду принцессой.',
					engSentences: [
						{
							engSentences: ['I am a from, but I will be a princess tonight.'],
							isCorrect: true,
						},
						{
							engSentences: ['I am a from, but I will be a princess at night.'],
							isCorrect: true,
						},
						{
							engSentences: ['I am a from, but at night I will be a princess.'],
							isCorrect: true,
						},
					],
					words: [{ rusWord: 'команда', engWord: 'team' }],
				},
			],
			offset: true,
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Местоимение «это»' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'В русском языке мы очень вольно используем местоимение «это». Оно подходит как для указания на человека, животного, неодушевлённый предмет или множественного числа.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'big',
			children: [{ type: 'text', color: 'black', weight: 'normal', text: 'Это мой друг.' }],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'big',
			children: [{ type: 'text', color: 'black', weight: 'normal', text: 'Это жираф.' }],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'big',
			children: [{ type: 'text', color: 'black', weight: 'normal', text: 'Это слоны.' }],
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
					text: 'Английские местоимения имеют более чёткую специализацию. Для людей используется he или she в зависимости от половой принадлежности.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это мой друг.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'He is my friend.' },
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
					text: 'It для животных и неодишевлённых предметов в единственном числе.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это жираф.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It is a giraffe.' },
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
					text: 'They для животных и неодушевлённых предметов во множественном числе.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это слоны.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'They are elephants.' },
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
					text: 'Об этом уже говорилось в предыдущей главе, но не будет лишним это повторить и выполнить перевод на практике.',
				},
			],
		},
		{
			type: 'exercises',
			id: 3,
			exercises: [
				{
					rusSentence: 'Это карандаши.',
					engSentences: [{ engSentences: ['They are pencils.'], isCorrect: true }],
					words: [{ rusWord: 'команда', engWord: 'team' }],
				},
				{
					rusSentence: 'Это Маша.',
					engSentences: [{ engSentences: ['She is Masha,'], isCorrect: true }],
					words: [{ rusWord: 'команда', engWord: 'team' }],
				},
				{
					rusSentence: 'Это спички.',
					engSentences: [{ engSentences: ['She'], isCorrect: true }],
					words: [{ rusWord: 'команда', engWord: 'team' }],
				},
				{
					rusSentence: 'Это верблюды.',
					engSentences: [{ engSentences: ['She'], isCorrect: true }],
					words: [{ rusWord: 'команда', engWord: 'team' }],
				},
				{
					rusSentence: 'Это енот.',
					engSentences: [{ engSentences: ['She'], isCorrect: true }],
					words: [{ rusWord: 'команда', engWord: 'team' }],
				},
				{
					rusSentence: 'Это пишущая ручка.',
					engSentences: [{ engSentences: ['She'], isCorrect: true }],
					words: [{ rusWord: 'команда', engWord: 'team' }],
				},
				{
					rusSentence: 'Это косатка.',
					engSentences: [{ engSentences: ['She'], isCorrect: true }],
					words: [{ rusWord: 'команда', engWord: 'team' }],
				},
				{
					rusSentence: 'Это рабочий.',
					engSentences: [{ engSentences: ['She'], isCorrect: true }],
					words: [{ rusWord: 'команда', engWord: 'team' }],
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
					text: 'Ответьте на вопросы чтобы убедиться, что правильно поняли материал.',
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
										text: 'Что такое подлежащее и сказуемое?',
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
										weight: 'bold',
										text: 'Подлежащее',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' — это член предложения обозначающий объект совершаемый действие. Мы пока изучили личные местоимения, но подлежащим может быть существительное, имя.',
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
										weight: 'bold',
										text: 'Сказуемое',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' — это член предложения обозначающий действие совершаемое подлежащим. Выражается глаголом. Так как в английском предложении всегда должно быть явно обозначено действие, то в таких предложениях где на русском мы указываем свойство объекта, и глагол обычно не ставится, в английском явно есть глагол ',
									},
									{ type: 'text', color: 'black', weight: 'bold', text: 'be' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' в одной из временных форм: am, are, is, was, were.',
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
										text: 'Почему в заголовке главы говорится про be, но в предложениях почему-то используется am, are, is, was и were?',
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
										text: 'Be — это неопределённая форма глагола «быть». По такому глаголу нельзя определить время. Это как сказать «Саша ',
									},
									{ type: 'text', color: 'black', weight: 'bold', text: 'печь' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' печенье». Это действие в чистом виде. Поэтому глагол нагружают каким-то временем изменяя его форму: пёк (прошедшее), печёт (настоящее), испечёт (будущее). То же самое и с ',
									},
									{ type: 'text', color: 'black', weight: 'bold', text: 'be' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: '. В настоящем времени он будет в форме am, are или is. А в прошедшем was или were. Формы будущего времени ни у одного английского глагола нет.',
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
										text: 'В каком времени стоит глагол ',
									},
									{ type: 'text', color: 'black', weight: 'bold', text: 'will' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' в этом предложении? И почему именно в нём?',
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
										text: 'Это будет кораблём.',
									},
									{ type: 'arrow' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'It will be a ship.',
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
										text: 'После подлежащего должен стоять глагол нагруженный временем совершения действия. Так как английский глагол не имеет формы будущего времени, то стоит в настоящем. Поэтому will будут в настоящем.',
									},
								],
							},
							{
								type: 'note',
								noteStyle: 'gray',
								children: [
									{
										type: 'paragraph',
										offset: false,
										textSize: 'normal',
										children: [
											{
												type: 'text',
												color: 'black',
												weight: 'normal',
												text: 'Модальный глагол will в форме настоящего времени и в инфинитивной форме выглядит одинаково.',
											},
										],
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
										text: 'Почему в предложениях про будущее время глагол ',
									},
									{ type: 'text', color: 'black', weight: 'bold', text: 'be' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' выглядит как инфинитив? Мы же знаем, что такие предложения стоят в настоящем времени, следовательно ',
									},
									{ type: 'text', color: 'black', weight: 'bold', text: 'be' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' должен быть в формы am, are или is.',
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
										text: 'Это будет дворец.',
									},
									{ type: 'arrow' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'It will be a palace.',
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
										text: 'Потому что время совершения действия находится на сказуемом. Will стоит в форме настоящего времени. А be тут является дополнением, оно время не передаёт, поэтому стоит в инфинитивной форме.',
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

export default toBePositive
