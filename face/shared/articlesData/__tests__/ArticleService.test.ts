import { ArticleService } from '../articleService'
import ArticleType from '../articleType'

const pureArticles: ArticleType.Art[] = [
	{
		type: ArticleType.ArtType.welcome,
		meta: {
			number: 1,
			slug: 'welcome',
			articleName: 'Welcome',
			articleDescription: 'Добро пожаловать на курс',
		},
	},
	{
		type: ArticleType.ArtType.level,
		level: 'a1' as any,
		meta: {
			number: 2,
			slug: 'level',
			articleName: 'A1 Beginner',
			articleDescription: 'Добро пожаловать на курс',
		},
	},
	{
		type: ArticleType.ArtType.media,
		meta: {
			number: 3,
			slug: 'media',
			articleName: 'Media',
			articleDescription: 'Фильмы',
		},
	},
	{
		type: ArticleType.ArtType.article,
		meta: {
			number: 4,
			slug: 'personal-pronouns',
			articleName: 'Личные местоимения',
			articleDescription:
				'Личные местоимения в английском языке указывают на лицо, предмет или понятие, но не называют его.',
		},
		content: [],
	},
]

describe('ArticleService', () => {
	let articleService = new ArticleService(pureArticles)

	beforeEach(() => {
		articleService = new ArticleService(pureArticles)
	})

	it('should return all articles', () => {
		const articles = articleService.getArticles()
		expect(articles).toHaveLength(4)
		expect(articles).toEqual(pureArticles)
	})

	it('should return null if a article is not exists', () => {
		const article = articleService.getArticle('wrong')
		expect(article).toBeNull()
	})

	it('should return article with a slug `level`', () => {
		const article = articleService.getArticle('level')
		expect(article).toEqual(pureArticles[1])
	})

	it('should return previous and next article of the article with a slug `level`', () => {
		const articlePrev = articleService.getArticle('level', 'prev')
		const articleNext = articleService.getArticle('level', 'next')

		expect(articlePrev).toEqual(pureArticles[0])
		expect(articleNext).toEqual(pureArticles[2])
	})
})
