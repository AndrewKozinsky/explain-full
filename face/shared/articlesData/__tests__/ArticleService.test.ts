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
		level: ArticleType.LangLevel.a1,
		meta: {
			number: 2,
			slug: 'level',
			articleName: 'Уровень A1',
			articleDescription: 'Добро пожаловать на курс',
		},
	},
	{
		type: ArticleType.ArtType.article,
		meta: {
			number: 4,
			slug: 'my-art-1',
			articleName: 'Имя статьи 1',
			articleDescription: 'Описание статьи 1',
		},
		chapterNum: 'my chapterNum 1',
		content: [],
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
			slug: 'my-art-2',
			articleName: 'Имя статьи 2',
			articleDescription: 'Описание статьи 2',
		},
		chapterNum: 'my chapterNum 2',
		content: [],
	},
	{
		type: ArticleType.ArtType.level,
		level: ArticleType.LangLevel.a2,
		meta: {
			number: 2,
			slug: 'level',
			articleName: 'Уровень A1',
			articleDescription: 'Добро пожаловать на курс',
		},
	},
	{
		type: ArticleType.ArtType.article,
		meta: {
			number: 4,
			slug: 'my-art-3',
			articleName: 'Имя статьи 3',
			articleDescription: 'Описание статьи 3',
		},
		chapterNum: 'my chapterNum 3',
		content: [],
	},
]

describe('ArticleService', () => {
	let articleService = new ArticleService(pureArticles)

	beforeEach(() => {
		articleService = new ArticleService(pureArticles)
	})

	describe('getArticles method', () => {
		it('should return all articles', () => {
			const articles = articleService.getArticles()
			expect(articles).toHaveLength(pureArticles.length)
			expect(articles).toEqual(pureArticles)
		})
	})

	describe('getArticle method', () => {
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

	describe('getArticlesOfLevel method', () => {
		it('should return articles of the level a1`', () => {
			const receivedArticles = articleService.getArticlesOfLevel(ArticleType.LangLevel.a1)

			const expectedArticles: { name: string; url: string }[] = [
				{ name: 'Имя статьи 1', url: '/course/my-art-1' },
				{ name: 'Имя статьи 2', url: '/course/my-art-2' },
			]

			expect(receivedArticles).toEqual(expectedArticles)
		})

		it('should return articles of the level a2`', () => {
			const receivedArticles = articleService.getArticlesOfLevel(ArticleType.LangLevel.a2)

			const expectedArticles: { name: string; url: string }[] = [
				{ name: 'Имя статьи 3', url: '/course/my-art-3' },
			]

			expect(receivedArticles).toEqual(expectedArticles)
		})
	})
})
