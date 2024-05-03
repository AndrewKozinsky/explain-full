import ArticleType from '../../articleType'

const welcome: ArticleType.ArtWelcome = {
	type: ArticleType.ArtType.welcome,
	meta: {
		number: 1,
		slug: 'welcome',
		caption: 'Вводная глава',
		articleName: 'Добро пожаловать на курс!',
		articleDescription: 'Добро пожаловать на курс',
		isPaid: false,
	},
}

export default welcome
