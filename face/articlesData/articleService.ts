import { PageUrls } from '../сonsts/pageUrls'
import articles from './courseArticles/articlesData'
import ArticleType from './articleType'

type ArticleOfLevel = { name: string; url: string }

// Класс с методами работы со статьями
export class ArticleService {
	constructor(private articles: ArticleType.Art[]) {}

	/** Возвращает все статьи */
	getArticles() {
		return this.articles
	}

	/**
	 * Получение статьи по слагу
	 * @param articleSlug — слаг
	 * @param articleType — тип статьи:
	 * prev — предыдущая статья статьи с указанным слагом.
	 * this — статья с указанным слагом.
	 * next — следующая статья статьи с указанным слагом.
	 */
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

	/**
	 * Возвращает статьи определённого уровня языка (a1, a2...).
	 * @param langLevel — уровень языка
	 */
	getArticlesOfLevel(langLevel: ArticleType.LangLevel): ArticleOfLevel[] {
		// Получить индекс, где начинается статья начала уровня
		const levelStartIdx = this.articles.findIndex((article) => {
			return article.type === ArticleType.ArtType.level && article.level === langLevel
		})

		if (levelStartIdx < 0) {
			return []
		}

		// С этого индекса начинается статья нужного уровня.
		const levelArtStartIdx = levelStartIdx + 1

		const foundedArticles: ArticleOfLevel[] = []

		for (let i = levelArtStartIdx; i < this.articles.length; i++) {
			const article = this.articles[i]

			// Завершить если наткрулись на другой уровень языка
			if (article.type === ArticleType.ArtType.level) break
			// Игнорировать материалы отличные от стандатных статей
			if (article.type !== ArticleType.ArtType.article) continue

			// Трансформировать статью под нужный формат.
			foundedArticles.push({
				name: article.meta.articleName,
				url: PageUrls.courseArticle(article.meta.slug).url,
			})
		}

		return foundedArticles
	}
}

const articleService = new ArticleService(articles)
export default articleService
