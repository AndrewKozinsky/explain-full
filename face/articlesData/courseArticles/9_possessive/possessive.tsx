import ArticleType from '../../articleType'
import PossessiveDeterminate_1_Scheme from './PossessiveDeterminate_1_Scheme'
import PossessiveDeterminate_2_Scheme from './PossessiveDeterminate_2_Scheme'
import PossessiveDeterminate_3_Scheme from './PossessiveDeterminate_3_Scheme'
import PossessiveDeterminate_4_Scheme from './PossessiveDeterminate_4_Scheme'

const possessive: ArticleType.ArtArticle = {
	type: ArticleType.ArtType.article,
	meta: {
		number: 11,
		slug: 'possessive',
		caption: 'Глава 9',
		articleName: 'Притяжательный падеж',
		articleDescription:
			'Наравне с притяжательными местоимениями задаёт принадлежость предмета, но выбор слов гораздо больше, чем 7 местоимений.',
		isPaid: false,
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
					text: 'Падеж — это изменение окончания существительного для выражения связи с другими словами в предложении. В русском языке их 6. В английском 2: общий и притяжательный.',
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
							text: 'Предложения «Эта моя тарелка» и «Эта тарелка моя» можно перевести и как This is my plate, так и This plate is mine. Форма с самостоятельным притяжательным местоимением больше подходит чтобы заострить внимание на факте обладания.',
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
				{ type: 'text', color: 'black', weight: 'normal', text: 'Существительное ' },
				{ type: 'text', color: 'gold', weight: 'normal', text: 'в общем падеже' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' — это форма слова в словаре. В русском это ',
				},
				{ type: 'text', color: 'gold', weight: 'normal', text: 'именительный падеж' },
				{ type: 'text', color: 'black', weight: 'normal', text: '. А существительное в ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'притяжательном падеже' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ' является определением к следующему за ним существительному, задаёт принадлежность предмета.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'A ' },
				{ type: 'text', color: 'gold', weight: 'normal', text: 'boy' },
				{ type: 'text', color: 'black', weight: 'normal', text: '' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'A ' },
				{ type: 'text', color: 'blue', weight: 'normal', text: 'boy’s' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' photo' },
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
					text: 'boy — это форма в общем падеже, а boy’s в притяжательном.',
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
					text: 'На русский язык обычно переводится в обратном порядке.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'A boy’s photo' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Мальчика фотография' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Фотография мальчика' },
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
					text: 'Притяжательный падеж по назначению похож на притяжательные местоимения. Только тут принадлежность задаёт не местоимение, а существительное.',
				},
			],
		},
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Образование притяжательного падежа' },
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Одно слово в притяжательном падеже' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Существительному добавляется знака апострофа и буквы s к форме общего падежа.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Lisa' },
				{ type: 'text', color: 'blue', weight: 'normal', text: '’s' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' friend' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'друг Лизы' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'My father' },
				{ type: 'text', color: 'blue', weight: 'normal', text: '’s' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' lighter' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Зажигалка моего отца' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Children' },
				{ type: 'text', color: 'blue', weight: 'normal', text: '’s' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' umbrella' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Зонт детей' },
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
					text: 'Если существительное заканчивается на ',
				},
				{ type: 'text', color: 'blue', weight: 'normal', text: 's' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: ', то добавляется только апастроф.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'Iris' },
				{ type: 'text', color: 'blue', weight: 'normal', text: '’' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' coat' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Пальто Айрис' },
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'black', weight: 'normal', text: 'My friends' },
				{ type: 'text', color: 'blue', weight: 'normal', text: '’' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' book' },
				{ type: 'arrow' },
				{ type: 'text', color: 'black', weight: 'normal', text: 'Книга моих друзей' },
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
					text: 'При произношении никакой разницы с существительным в общем падежом нет.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Несколько слов в притяжательном падеже' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Если в притяжательном падеже стоит несколько слов, то ’s добавляется к последнему слову:',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'gold', weight: 'normal', text: 'My sister-in-law' },
				{ type: 'text', color: 'blue', weight: 'normal', text: '’s' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' advice' },
				{ type: 'arrow' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Совет моей сводной сестры.',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'gold', weight: 'normal', text: 'Romeo and Juliet' },
				{ type: 'text', color: 'blue', weight: 'normal', text: '’s' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' love story' },
				{ type: 'arrow' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Любовная история Ромео и Джульетты',
				},
			],
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'giant',
			children: [
				{ type: 'text', color: 'gold', weight: 'normal', text: 'The King of Monaco son' },
				{ type: 'text', color: 'blue', weight: 'normal', text: '’s' },
				{ type: 'text', color: 'black', weight: 'normal', text: ' wedding' },
				{ type: 'arrow' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Свадьба сына короля Монако',
				},
			],
		},
		{
			type: 'header',
			tag: 'h2',
			style: 'h2',
			text: 'Вытеснение определителя у определяемого слова',
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
					text: 'Определяемое слово может иметь определитель.',
				},
			],
		},
		{ type: 'customComponent', component: <PossessiveDeterminate_1_Scheme /> },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'А существительное в притяжательном падеже само по себе является определителем. ',
				},
				{ type: 'text', color: 'gray', weight: 'normal', text: 'Посмотрите главу про ' },
				{ type: 'text', color: 'gray', weight: 'bold', text: 'неопределённый артикль a' },
				{
					type: 'text',
					color: 'gray',
					weight: 'normal',
					text: ' где кратко рассказано про все виды определителей.',
				},
			],
		},
		{ type: 'customComponent', component: <PossessiveDeterminate_2_Scheme /> },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'У существительного не может быть больше одного определителя. Поэтому определитель определяемого слова вытесняется существительным в притяжательном падеже.',
				},
			],
		},
		{ type: 'customComponent', component: <PossessiveDeterminate_3_Scheme /> },
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
							text: 'Это правило верно для любых других определителей:',
						},
					],
				},
				{
					type: 'paragraph',
					offset: false,
					textSize: 'big',
					children: [
						{ type: 'text', color: 'error', weight: 'normal', text: 'This my' },
						{ type: 'text', color: 'black', weight: 'normal', text: ' pizza.' },
						{ type: 'arrow' },
						{ type: 'text', color: 'black', weight: 'normal', text: 'This pizza ' },
						{ type: 'text', color: 'gray', weight: 'normal', text: 'или' },
						{ type: 'text', color: 'black', weight: 'normal', text: ' My pizza.' },
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
					text: 'Но само существительное в притяжательном падеже не теряет собственный артикль:',
				},
			],
		},
		{ type: 'customComponent', component: <PossessiveDeterminate_4_Scheme /> },
		{ type: 'header', tag: 'h2', style: 'h2', text: 'Когда применимо' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'К существительному можно добавить притяжательный падеж если оно обозначает одушевлённый объект.  Неодушевленные существительные, за исключением некоторых случаев, в притяжательном падеже не употребляются.',
				},
			],
		},
		{
			type: 'header',
			tag: 'h3',
			style: 'h3',
			text: 'Существительные обозначающие временные промежутки',
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'blue',
					weight: 'normal',
					text: 'Такие наречия времени, как: today сегодня, yesterday вчера, tomorrow завтра. Например: today’s newspaper — сегодняшняя газета, yesterday’s excursion — вчерашняя экскурсия. Существительные, обозначающие время (year год, month месяц, day день, hour час, minute минута, …), части дня (night ночь, вечер, …), времена года. the night’s shadows — ночные тени, a month’s holiday — месячный отпуск,',
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
					text: 'One hot summer\'s day Joe was by the river.',
				},
				{ type: 'arrow' },
				{
					type: 'text',
					color: 'black',
					weight: 'normal',
					text: 'Однажды жарким летним днём Джо был около реки.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Звезды и планеты' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'blue',
					weight: 'normal',
					text: 'the moon’s surface — поверхность луны, the sun’s rays — солнечные лучи; лучи солнца.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Расстояния' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'blue',
					weight: 'normal',
					text: 'расстояние (mile миля, kilometer километр, …) at a mile’s distance — на расстоянии одной мили,',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Стоимость' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'blue',
					weight: 'normal',
					text: 'five dollar’s worth — стоимостью в пять долларов.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Группы людей' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'blue',
					weight: 'normal',
					text: 'Собирательные существительные, обозначающие сообщества людей: party партия, army армия, family семья, crew команда, экипаж, society общество, nation нация, government правительство и др. Например:\nthe society’s members — члены общества, the nation’s wealth — богатство нации.',
				},
			],
		},
		{
			type: 'header',
			tag: 'h3',
			style: 'h3',
			text: 'Местоимения, заменяющие одушевленные существительные',
		},
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'blue',
					weight: 'normal',
					text: 'Притяжательный падеж могут иметь местоимения, заменяющие одушевленные существительные: somebody, someone кто-то, anybody, anyone кто-нибудь, everyone, everybody все, nobody, no one никто и др. Например:\nIt’s nobody’s business — Это никого не касается.',
				},
			],
		},
		{ type: 'header', tag: 'h3', style: 'h3', text: 'Прочие понятия' },
		{
			type: 'paragraph',
			offset: false,
			textSize: 'normal',
			children: [
				{
					type: 'text',
					color: 'blue',
					weight: 'normal',
					text: 'world мир, earth земля, nature природа; continent континент, и их названия; ocean океан, sea море, river река и их названия; country страна, названия стран, и территорий; town, city город и их названия; ship корабль, судно и другие средства передвижения, и их названия; названия газет и др.\nAfrica’s future — будущее Африки the ocean’s roar — рев океана Canada’s population — население Канады London’s museums — музеи Лондона the ship’s crew — команда корабля.',
				},
			],
		},
		{
			type: 'exercises',
			id: 0,
			exercises: [
				{
					rusSentence: 'Моё по',
					engSentences: [{ engSentences: ['My situ'], isCorrect: true }],
					words: [{ rusWord: 'положение', engWord: 'situation' }],
				},
			],
			offset: true,
		},
	],
}

export default possessive
