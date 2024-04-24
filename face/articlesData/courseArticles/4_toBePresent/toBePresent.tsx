import ArticleType from '../../articleType'

const toBePresent: ArticleType.ArtArticle = {
	type: ArticleType.ArtType.article,
	meta: {
		number: 4,
		slug: 'to-be-present',
		caption: 'Глава 2',
		articleName: 'Глагол be',
		articleDescription:
			'Глагол be используется для описания состояния, местоположения или принадлежности.',
	},
	content: [
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
					text: 'Предложение на английском языке должно содержать в себе как минимум подлежащее и сказуемое. Подлежащее — это объект совершающий действие. Он может быть выражен местоимением, именем, существительным. А сказуемое — это само действие совершаемое подлежащим. Выражено глаголом.',
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
					text: 'В предложениях подлежащие в виде местоимения. Тут сделано как надо. Но в моих предложениях нет сказуемого, то есть самого действия. Когда-то давно в таких предложениях в русском языке оно ставилось. На современный манер звучало бы как «есть». В болгарском оно существует до сих пор. И в английском тоже. Оно называется be. Поставлю в перевод.',
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
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Сказуемое всегда должно показывать время совершения действия. Давайте be переделаем в форму настоящего времени.',
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
					text: 'Последним шагом перед существительными в единственном числе поставлю неопределённый артикль a. Его назначение будет объяснено в следующей главе. А существительное clown стоит в единственном числе. Чтобы сделать во множественном добавлю окончание -s. Эта тема тоже будет разобрана в одной из следующих глав.',
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
			type: 'paragraph',
			offset: true,
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
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'В русском языке глагол «есть» уже явно присутствует в прошедшем времени в виде формы «был/была/было».',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Я был космонавтом.' },
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
				{ type: 'text', color: 'black', weight: 'normal', text: 'Они были клоунами.' },
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
				{ type: 'text', color: 'black', weight: 'normal', text: 'Он был щенком.' },
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
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Английский глагол не имеет формы будущего времени. Поэтому предложения строят в форме настоящего времени, но применяют некоторые средства чтобы указать на будущие действия. Одно из них — это модальный глагол will.',
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
							text: 'Обычные глаголы выражают действие (летать, прыгать, падать), а ',
						},
						{ type: 'text', color: 'blue', weight: 'normal', text: 'модальные' },
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: ' выражают отношение к действию (могу, буду, должен) после которых указывается ',
						},
						{ type: 'text', color: 'gold', weight: 'normal', text: 'смысловой глагол' },
						{ type: 'text', color: 'black', weight: 'normal', text: ':' },
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
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Модальный глагол will означает «изволить что-то сделать в будущем».',
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
				{ type: 'text', text: ' ' },
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
					text: '. И дальше должно идти какое действие я изволяю совершить: ',
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
				{ type: 'text', color: 'black', weight: 'normal', text: ' космонавтом».' },
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
					text: 'Вы уже знаете, что через сказуемое передаётся время совершения действия. Глагол will стоит в настоящем времени. И получаеся всё предложение тоже в настоящем. Но по смыслу обозначает будущее. Остальные глаголы время не передают и должны находиться в инфинитивной форме. Поэтому глагол be в инфинитивной форме.',
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
					text: 'Попробуйте перевести предложения в будущем времени.',
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
										text: 'Почему в заголовке главы говорится про be, но в предложениях почему-то используется am, are и is?',
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
										text: 'To be — это неопределённая форма глагола «быть». Это как сказать «Саша печь печенье». По такому глаголу нельзя определить время действия действия. Поэтому глагол нагружают каким-то временем: пёк (прошедшее), печёт (настоящее), испечёт (будущее). То же самое и с to be. В настоящем времени он будет в форме am, are или is.',
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
										text: 'В каких случаях применяется to be?',
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
										text: 'To be применяется для указания у лица или предмета свойства в широком смысле в виде прилагательного, существительного, имени.',
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
										text: 'В каком времени стоит глагол will в этом предложении? Это будет кораблём',
									},
									{ type: 'arrow' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'It will be a ship',
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
										text: 'To be пр',
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

export default toBePresent
