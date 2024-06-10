import ArticleType from '../../articleType'

const welcome: ArticleType.ArtWelcome = {
	type: ArticleType.ArtType.welcome,
	meta: {
		number: 1,
		slug: 'welcome',
		caption: 'Вводная глава',
		articleName: 'Добро пожаловать на курс!',
		articleDescription: 'Вводная глава где объясняются организацинные моменты.',
		isPaid: true,
	},
}

export default welcome
