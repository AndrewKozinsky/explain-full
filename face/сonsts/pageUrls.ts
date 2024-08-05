export const PageUrls = {
	course: {
		url: '/course',
		name: 'Курс',
	},
	courseArticle(articleSlug: string) {
		return {
			url: '/course/' + articleSlug,
			name: 'Курс',
		}
	},
	contacts: {
		url: '/contacts',
		name: 'Контакты',
	},
	history: {
		url: '/history',
		name: 'История обновлений',
	},
	stories: {
		url: '/stories',
		name: 'Истории',
	},
}
