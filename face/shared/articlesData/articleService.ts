import articles from './courseArticles/articlesData'
import ArticleType from './articleType'

// Класс с методами работы со статьями
export class ArticleService {
	constructor(private articles: ArticleType.Art[]) {}

	// Возвращает все статьи
	getArticles() {
		return this.articles
	}

	// Получение статьи по слагу
	getArticle(
		articleSlug: string,
		articleType: 'prev' | 'this' | 'next' = 'this',
	): null | ArticleType.Art {
		const articleIdx = this.articles.findIndex((article) => article.meta.slug === articleSlug)

		if (articleIdx < 0) {
			return null
		}

		if (articleType === 'prev') {
			return articleIdx > 0 ? this.articles[articleIdx - 1] : (null as any)
		} else if (articleType === 'next') {
			return articleIdx < this.articles.length - 1
				? this.articles[articleIdx + 1]
				: (null as any)
		}

		return this.articles[articleIdx]
	}
}

const articleService = new ArticleService(articles)
export default articleService
