import ArticleType from '../../articleType'
import ArticleA from './ArticleA'
import ArticleMany from './ArticleMany'
import ArticleThe from './ArticleThe'
import ArticleMy from './ArticleMy'
import ArticleThis from './ArticleThis'

const indefiniteArticle: ArticleType.ArtArticle = {
	type: ArticleType.ArtType.article,
	meta: {
		number: 5,
		slug: 'indefinite-article',
		caption: 'Глава 3',
		articleName: 'Неопределённый артикль a',
		articleDescription:
			'Кратко рассмотрено для чего перед каждым существительным ставят определитель и разберём неопределённый артикль a/an.',
		isPaid: false,
	},
	content: [
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Что такое определители' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Существительное может быть ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'неопределённым' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' или ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'определённым' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Возьму такое предложение:',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Купи, пожалуйста, мяч.' },
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
					text: 'Если про мяч сообщается впервые, то будет обозначать просьбу купить любой мяч. А если упоминался ранее, то конкретный упомянутый мяч. В русском языке мы это понимаем по контексту. Но нередко перед определёнными существительными ставим местоимения «тот», «этот» чтобы сделать отсылку на объект упомянутый ранее.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Купи, пожалуйста, ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'тот' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' мяч.' },
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
					text: 'Англоговорящие явно указывают неопределённость или определённость существительного ставя перед ним ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'определитель' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Есть несколько групп определителей.',
				},
			],
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Перед неопределёнными существительными' },
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Неопределённый артикль a' },
		{ type: 'customComponent', component: <ArticleA /> },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'Неопределённый артикль a' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' используется с неопределёнными существительными в единственном числе.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Количественные определители' },
		{ type: 'customComponent', component: <ArticleMany /> },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'blue',
					weight: 'normal',
					text: 'Количественные определители',
				},
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' some, any, many и другие используются перед неопределёнными существительными во множественном числе. ',
				},
			],
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Перед определёнными существительными' },
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Определённый артикль the' },
		{ type: 'customComponent', component: <ArticleThe /> },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'Определённый артикль the' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' сообщает, что следом идёт определённое, конкретное существительное. То есть указывается на то, что собеседник знает о каком именно предмете идёт речь.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Притяжательные местоимения' },
		{ type: 'customComponent', component: <ArticleMy /> },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это ' },
				{
					type: 'text',
					color: 'blue',
					weight: 'normal',
					text: 'притяжательные местоимения',
				},
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' как и в русском языке. Само собой когда говорят о чьём-то персонаже или предмете, то подразумевают нечто конкретное. Если есть возможность обозначить принадлежность, то предпочтут одно из притяжательных местоимений, а не определённый артикль the.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Указательные местоимения' },
		{ type: 'customComponent', component: <ArticleThis /> },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'И ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'указательные местоимения' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' как у нас. И если указывают на предмет, то указывают на конкретный.',
				},
			],
		},
		{
			type: 'note',
			noteStyle: 'yellow',
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
							text: 'Выше дано упрощённое представление работы артиклей a, the и других определителей. На самом деле есть большое количество правил и исключений когда они ставятся или не ставятся. Они будут рассмотрены по ходу курса.',
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
					text: 'Вы уже ставили неопределённый артикль a в предыдущей главе. Давайте разберём его в деталях. А с другими определителями познакомимся ближе по ходу курса.',
				},
			],
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Неопределённый артикль a' },
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Указывает на неопределённый объект' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Неопределённый артикль ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' ставится перед неопределёнными существительными. То есть когда говорят об одном из объектов без разницы каком.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' car' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'машина' },
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
					text: 'Любая машина из всех машин. Не важно какая.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' carrot' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'морковь' },
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
					text: 'Любая морковь из всех в мире, а не конкретная.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Только для единственного числа' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'Артикль a' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' произошёл от древнеанглийского слова «один». Поэтому его можно использовать только для существительных в единственном числе.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Только для исчисляемых' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Исчисляемое существительное — это существительное, обозначающее название лиц или предметов поддающихся счету: студент — ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a student' },
				{ type: 'text', color: 'black', weight: 'normal', text: ', кактус — ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a cactus' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Чтобы определить исчисляемое ли это существительное добавьте к нему любое число и посмотрите можно ли так сказать:',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [{ type: 'text', color: 'black', weight: 'normal', text: 'Три знания' }],
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
					text: 'Так говорить нельзя, поэтому «знание» — это неисчисляемое существительное. Артикль не ставится.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Два стакана воды' },
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
					text: 'Вода — неисчисляемое существительное. Но число относится не к воде, а к стаканам. Стаканы исчисляемое. Поэтому артикль ставится.',
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
							text: 'Это правило снова отсылает к изначальному значению артикля ',
						},
						{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
						{
							type: 'text',
							color: 'black',
							weight: 'normal',
							text: '. Зачем говорить «один» для существительных не поддающихся счёту?',
						},
					],
				},
			],
		},
		{
			type: 'grid',
			offset: true,
			gridId: 'grid-67466',
			cells: [
				{
					minWidth: '300px',
					width: '50%',
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
									text: 'Перед неопределёнными исчисляемыми существительными в единственном числе артикль ',
								},
								{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: ' ставится.',
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
									text: 'Это пакет.',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'It is a bag.',
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
									text: 'Это столовая ложка.',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'It is a tablespoon.',
								},
							],
						},
					],
				},
				{
					minWidth: '300px',
					width: '50%',
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
									text: 'Перед неопределёнными неисчисляемыми не ставится.',
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
									text: 'Это рис.',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'It is rice.',
								},
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
									text: 'Не может быть «2 риса» или «5 рисов».',
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
									text: 'Это деньги.',
								},
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'It is money.',
								},
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
									text: 'Рис выглядит как множество рисинок, а деньги как купюры или монеты. То есть множество объектов. Но для обозначения используется местоимение it, а не they. They используется для исчисляемых объектов.',
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'exercises',
			id: 0,
			exercises: [
				{
					rusSentence: 'Я Кельвин.',
					engSentences: [
						{ engSentences: ['I am Calvin.'], isCorrect: true },
						{
							engSentences: ['I Calvin.'],
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
											text: 'Если в предложении сообщаете о свойстве или качестве не забывайте про to be.',
										},
									],
								},
							],
						},
						{
							engSentences: ['I is Calvin.'],
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
											text: 'Так как имена имеют третье лицо, то после них глагол to be в настоящем времени будет стоять в форме is.',
										},
									],
								},
							],
						},
					],
					words: [],
				},
				{
					rusSentence: 'Он дикарь.',
					engSentences: [
						{ engSentences: ['He is a savage.'], isCorrect: true },
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
											text: 'Местоимение he стоит в третьем лице. А to be в третьем лице настоящего времени будет в форме is. В остальном предложение правильное.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'дикарь', engWord: 'savage' }],
				},
				{
					note: 'На английском «идеальный вариант» будет «идеал».',
					rusSentence: 'Одна минута каждый день — идеальный вариант.',
					engSentences: [
						{
							engSentences: ['One minute every day is ideal.'],
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
											text: 'Вариант A minute тоже подходит.',
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
											text: 'Вариант One minute тоже подходит.',
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
											text: 'Тут подлежащее One minute. Это местоимение третьего лица. Поэтому to be должен быть в форме is.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'минута', engWord: 'minute' },
						{ rusWord: 'каждый', engWord: 'every' },
						{ rusWord: 'день', engWord: 'day' },
						{
							note: 'ideal применяется без неопределённого артикля a.',
							rusWord: 'идеальный',
							engWord: 'ideal',
						},
					],
				},
				{
					rusSentence: 'Я не ребенок, мне 44 года.',
					engSentences: [
						{ engSentences: ['I am not a child I am 44.'], isCorrect: true },
					],
					words: [{ rusWord: '44 года', engWord: '44 years old' }],
				},
				{
					rusSentence: 'Он полицейский.',
					engSentences: [{ engSentences: ['He is a policeman.'], isCorrect: true }],
					words: [{ rusWord: 'полицейский', engWord: 'policeman' }],
				},
				{
					rusSentence: 'Она знаменитая художница.',
					engSentences: [
						{ engSentences: ['She is a famous artist.'], isCorrect: true },
						{
							engSentences: ['She a famous artist is.'],
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
											text: 'В английских предложениях есть чёткий порядок слов: за подлежащим следует сказуемое в повествовательных предложениях. Тут сказуемое убежало в конец предложения.',
										},
									],
								},
							],
						},
						{
							engSentences: ['She am a famous artist.'],
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
											text: 'После местоимения ',
										},
										{
											type: 'text',
											color: 'blue',
											weight: 'normal',
											text: 'she',
										},
										{
											type: 'text',
											color: 'black',
											weight: 'normal',
											text: ' следует ',
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
					words: [
						{ rusWord: 'знаменитый', engWord: 'famous' },
						{ rusWord: 'художник', engWord: 'an artist' },
					],
				},
				{
					rusSentence: 'Жёлтая папка.',
					engSentences: [
						{ engSentences: ['An yellow folder.'], isCorrect: true },
						{
							engSentences: ['Is yellow folder.'],
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
											text: 'Бесмысленное предложение. В повествовательных предложениях глагол to be не может стоять раньше подлежащего.',
										},
									],
								},
							],
						},
						{
							engSentences: ['It is an yellow folder.'],
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
											text: 'Грамматически-правильный, но не точный перевод.',
										},
									],
								},
							],
						},
						{
							engSentences: ['Yellow folder.'],
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
											text: 'Перед существительными или прилагательном и существительном должно стоять определяющее слово. Если контекст отсутствует, то при переводе используйте неопределённый артикль.',
										},
									],
								},
							],
						},
					],
					words: [
						{ rusWord: 'жёлтый', engWord: 'yellow' },
						{ rusWord: 'папка', engWord: 'a folder' },
					],
				},
			],
			offset: true,
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Перевод неисчисляемых в исчисляемые' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Ко многим неисчисляемым существительным обозначающие вещества можно добавить неопределённый артикль. Тогда они станут исчисляемыми и приобретут значение порции этого вещества.',
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
					text: 'Это чай. Это стакан чая.',
				},
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It is tea. It is a tea.' },
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
					text: 'Артикль перед неисчисляемым сделал его исчисляемым в значении порции этого вещества. Порция чая подразумевается под стаканом чая.',
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
					text: 'В русском языке вынуждены использовать разные слова для обозначения разных сущностей. А в английском слово приобретает другое значение после добавления неопределённого артикля.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это бумага. Это газета.' },
				{ type: 'arrow' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'It is paper. It is a paper.',
				},
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
					text: 'paper без артикля будет в значении «бумага», а с добавление артикля «газета».',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [{ type: 'text', color: 'black', weight: 'normal', text: 'Ещё примеры:' }],
		},
		{
			type: 'grid',
			offset: false,
			gridId: 'grid-33878',
			cells: [
				{
					children: [
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'wood' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'лес' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'iron' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'железо' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'coal' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'уголь' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'hair' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'волосы' },
							],
						},
					],
				},
				{
					children: [
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a wood' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'дерево' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'an iron' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'утюг' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a coal' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'уголёк' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a hair' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'волосок' },
							],
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
					text: 'Некоторые абстрактные понятия можно сделать исчисляемыми.',
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
					text: 'Это красота. Она красотка.',
				},
				{ type: 'arrow' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'It is beauty. She is a beauty.',
				},
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
					text: 'Красота и красотка переводятся одинаковым словом beauty. Но «красота» неисчисляемое, а «красотка» исчисляемое. Поэтому в первом случае артикль не ставится, а во втором ставится. В отношении красивого мужчины используют слово handsome.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [{ type: 'text', color: 'black', weight: 'normal', text: 'Ещё примеры:' }],
		},
		{
			type: 'grid',
			offset: false,
			gridId: 'grid-56319',
			cells: [
				{
					children: [
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'life' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'жизнь' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'time' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'время' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'play' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'игра' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'fire' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'огонь' },
							],
						},
					],
				},
				{
					children: [
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a life' },
								{ type: 'arrow' },
								{
									type: 'text',
									color: 'black',
									weight: 'normal',
									text: 'жизненный путь',
								},
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a time' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'раз' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a play' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'пьеса' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a fire' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'пожар' },
							],
						},
					],
				},
			],
		},
		{
			type: 'exercises',
			id: 1,
			exercises: [
				{
					rusSentence: 'Это (бокал) вина.',
					engSentences: [{ engSentences: ['It is vine.'], isCorrect: true }],
					words: [{ rusWord: 'вино', engWord: 'vine' }],
				},
				{
					rusSentence: 'Это железо, а это утюг.',
					engSentences: [
						{ engSentences: ['It is iron, but it is an iron.'], isCorrect: true },
					],
					words: [{ rusWord: 'железо/утюг', engWord: 'iron' }],
				},
			],
			offset: true,
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Ввод существительного в контекст' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Вы узнали, что существительные в английском могут быть определёнными или неопределёнными. Определённые — это те, которые уже находятся в контексте разговора. Но до этого их нужно в контекст ввести. Поэтому сначала упоминают неопределённое существительное помечая его артиклем a, а затем оно становится вместе с одним из определённых.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Огромный слон.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It is a dog.' },
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
					text: 'В первый раз ввели в повествование собаку. Она пока неопределённая. При последующих упоминаниях будет определённым с подходящим определителем.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Это дверь.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'It is a door.' },
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
					text: 'В первый раз упомянута дверь.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Указывает на типичное поведение' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Неопределённый артикль a могут применять не в значении «один из объектов что-то делает», а в обобщённом значении как типичное поведение любого объекта этого класса.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Врач лечит людей.' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'A doctor treats people.' },
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
					text: 'Не какой-то врач лечит людей, а в целом любой врач это делает. Это их характерное поведение.',
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
					text: 'Кролик — домашнее животное.',
				},
				{ type: 'arrow' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'A rabbit is a domestic animal.',
				},
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
					text: 'Заметьте, что артикль стоит и перед rabbit и перед domestic animal.',
				},
			],
		},
		{
			type: 'exercises',
			id: 2,
			exercises: [
				{
					rusSentence: 'Металлическая скамейка менее популярна, чем деревянная',
					engSentences: [
						{
							engSentences: ['A metal bench is less popular than wooden bench'],
							isCorrect: true,
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
											text: 'В этом пр',
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
											text: 'В этом п',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'два', engWord: 'two' }],
				},
				{
					rusSentence: 'Мобильный криптокошелёк отличается высокой безопасностью.',
					engSentences: [
						{
							engSentences: ['A mobile crypto wallet is very secure.'],
							isCorrect: true,
						},
					],
					words: [
						{ rusWord: 'к сожалению', engWord: 'unfortunately' },
						{ rusWord: 'криптокошелёк', engWord: 'crypto wallet' },
						{ rusWord: 'безопасный', engWord: 'secure' },
					],
				},
				{
					rusSentence: 'Собака — верный питомец.',
					engSentences: [{ engSentences: ['Dogs are loyal pets.'], isCorrect: true }],
					words: [
						{ rusWord: 'собака', engWord: 'dog' },
						{ rusWord: 'верный', engWord: 'loyal' },
						{ rusWord: 'домашнее животное', engWord: 'pet' },
					],
				},
				{
					rusSentence: 'Человеческий младенец полностью беспомощен.',
					engSentences: [
						{ engSentences: ['A human babie is totally helpless.'], isCorrect: true },
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
											text: 'В этом пр',
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
											text: 'В этом п',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'два', engWord: 'two' }],
				},
				{
					note: 'Если место обозначается по роду деятельности (больница — место где лечат, тюрьма — место где отбывают наказание), то артикль не ставится.',
					rusSentence: 'Преступник должен быть в тюрьме.',
					engSentences: [
						{ engSentences: ['A criminal must be in prison.'], isCorrect: true },
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
											text: 'В этом пр',
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
											text: 'В этом п',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'два', engWord: 'two' }],
				},
			],
			offset: true,
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Изменение артикля для благозвучности' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Если исчисляемое существительное в единственном числе ',
				},
				{ type: 'text', color: 'black', weight: 'bold', text: 'при произношении' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' (не на письме!) начинается с гласной буквы, то перед ним ставят артикль ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'an' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ', а если с согласной, то ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Это сформировалось для благозвучности чтобы не произносить гласные друг за другом.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'an apple' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' — произносится ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: '[ˈæpl]' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' и пишется с гласной. Поэтому ставится ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'an' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'an honest boy' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' — хотя в письме начинается с согласной, но произносится с гласной ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: '[ˈɑːnɪst]' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Поэтому тут также стоит артикль ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'an' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: '. Обратите внимание, что нужно смотреть не на существительное, а на слово, которое стоит после артикля. В этом примере это прилагательное ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'honest' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' потому что прилагательные вклиниваются между артиклем и существительным.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a table' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' — произносится и пишется ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: '[ˈteɪbl]' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' с согласной. Поэтому стоит артикль ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
				{ type: 'text', color: 'black', weight: 'normal', text: '.' },
			],
		},
		{
			type: 'paragraph',
			offset: true,
			textSize: 'normal',
			children: [
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a unity' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' — хотя в письме начинается с гласной, но произносится с согласной ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: '[ˈjuːnəti]' },
				{ type: 'text', color: 'black', weight: 'normal', text: '. Поэтому ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'a' },
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
							text: 'Чтобы лучше запоминать произношения слов нужно развивать насмотренность и наслушанность. А это делается через постоянное чтение и прослушивание рассказов. Лучший эффект даст материал где вы понимаете 80% слов. Так будите и понимать смысл и не уставать часто прибегая к словарю.',
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
					text: 'В русском языке мы также изменяем слова для благозвучности. Например предлог «в» мы изменим на «во» если после него стоит слово начинающееся на «в»: «в цирке», но «во время исполнения».',
				},
			],
		},
		{
			type: 'exercises',
			id: 3,
			exercises: [
				{
					rusSentence: 'Вы идиот.',
					engSentences: [{ engSentences: ['You are an idiot '], isCorrect: true }],
					words: [{ rusWord: 'идиот', engWord: 'idiot' }],
				},
				{
					rusSentence: 'Это Майк.',
					engSentences: [{ engSentences: ['He is Mike.'], isCorrect: true }],
					words: [],
				},
				{
					rusSentence: 'Это аэропорт.',
					engSentences: [{ engSentences: ['It is an airport.'], isCorrect: true }],
					words: [{ rusWord: 'аэропорт', engWord: 'airport' }],
				},
				{
					rusSentence: 'Это конверт.',
					engSentences: [
						{ engSentences: ['It is an envelop.'], isCorrect: true },
						{
							engSentences: ['It is a envelop.'],
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
											text: 'Неопределённый артикль a пишется перед словами начинающиеся с согласной для благозвучности. А envelop начинается с гласной. Поэтому тут используйте an.',
										},
									],
								},
							],
						},
						{
							engSentences: ['It is envelop.'],
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
											text: 'Перед существительным должно быть определяющее слово. О каком конверте идёт речь: об определённом или одном из? Если отдельно не сказано, то об одном из множества.',
										},
									],
								},
							],
						},
					],
					words: [{ rusWord: 'конверт', engWord: 'envelope' }],
				},
				{
					rusSentence: 'Это совет.',
					engSentences: [{ engSentences: ['It is an advice.'], isCorrect: true }],
					words: [{ rusWord: 'совет', engWord: 'advice' }],
				},
				{
					rusSentence: 'Скоро ты будешь взрослой.',
					engSentences: [
						{ engSentences: ['Soon you will be an adult'], isCorrect: true },
						{ engSentences: ['You will be an adult soon.'], isCorrect: true },
					],
					words: [
						{ rusWord: 'скоро', engWord: 'soon' },
						{ rusWord: 'взрослый', engWord: 'adult' },
					],
				},
			],
			offset: true,
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
										text: 'определитель',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' и для чего нужен?',
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
										text: 'Определитель ставится перед существительным обозначая неопределённый или определённый объект. Английский более точный и конкретный язык в отличии от русского. Тут и чёткий порядок членов предложения и указание на конкретные существительные не на уровне контекста и общего смысла разговора, а на уровне грамматики.',
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
										text: 'Какие условия должны сойтись чтобы поставить ',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'bold',
										text: 'неопределённый артикль a',
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
										text: 'Должно сойтись два условия: существительное должно быть в единственном числе и исчисляемое.',
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
										text: 'В каком члене предложения указывается время совершения действия?',
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
										text: 'Время совершения действия указывается на ',
									},
									{
										type: 'text',
										color: 'blue',
										weight: 'normal',
										text: 'сказуемом',
									},
									{ type: 'text', color: 'black', weight: 'normal', text: '.' },
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
										text: 'Они умные.',
									},
									{ type: 'arrow' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'They ',
									},
									{ type: 'text', color: 'blue', weight: 'normal', text: 'are' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' smart.',
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
										text: 'В будущем времени ',
									},
									{
										type: 'text',
										color: 'blue',
										weight: 'normal',
										text: 'сказуемым',
									},
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' становится модальный глагол ',
									},
									{ type: 'text', color: 'blue', weight: 'normal', text: 'will' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: '. На него ложится время. А так как ',
									},
									{ type: 'text', color: 'black', weight: 'bold', text: 'be' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' уже не сказуемое, а дополнение, то находится в инфинитивной форме.',
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
										text: 'Они будут умными.',
									},
									{ type: 'arrow' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: 'They ',
									},
									{ type: 'text', color: 'blue', weight: 'normal', text: 'will' },
									{
										type: 'text',
										color: 'black',
										weight: 'normal',
										text: ' be smart.',
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

export default indefiniteArticle
