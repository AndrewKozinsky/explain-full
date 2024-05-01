import ArticleType from '../articlesData/articleType'
import articles from '../articlesData/courseArticles/articlesData'
import ExercisesType from '../articlesData/exercisesType'
import { PageUrls } from '../сonsts/pageUrls'
import ArtType = ArticleType.ArtType

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

			// Завершить если наткнулись на другой уровень языка
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

	getArticleExercises(
		articleSlug: string,
		exercisesId: number,
	): undefined | ExercisesType.ExercisesObj {
		const article = this.getArticle(articleSlug)
		if (!article || article.type !== ArtType.article) return

		const exercisesObj = article.content.find((contentItem) => {
			return contentItem.type === 'exercises' && contentItem.id === exercisesId
		})
		if (!exercisesObj) return

		// @ts-ignore
		return exercisesObj
	}

	/**
	 * Получает объект статьи и вычленяет блоки со словами для заучивания
	 * @param articleSlug — слаг статьи
	 */
	getArticleWords(articleSlug: string): ExercisesType.Word[] {
		const article = this.getArticle(articleSlug)
		if (!article || article.type !== ArticleType.ArtType.article) return []

		const wordBlocks: ExercisesType.Word[] = []

		// Get article's words
		article.content.forEach((currentComp) => {
			if (currentComp.type !== 'exercises') return

			currentComp.exercises.forEach((exercise) => {
				if (!exercise.words) return

				wordBlocks.push(...exercise.words)
			})
		})

		// Set transcriptions to English words
		wordBlocks.forEach((wordBlock) => {
			// console.log(this.getEnglishWordTranscription(wordBlock.engWord))
			wordBlock.transcription = this.getEnglishWordTranscription(wordBlock.engWord)
		})

		// Clear words from repeated ones
		const clearedWords: ExercisesType.Word[] = []

		wordBlocks.forEach((currentWord) => {
			// Найти текущий блок слов в уже очищенном массиве
			const searchWordInClearedWords = clearedWords.find((clearedWord) => {
				return (
					currentWord.rusWord == clearedWord.rusWord &&
					currentWord.engWord == clearedWord.engWord
				)
			})

			// Если не найден, то поставить
			if (!searchWordInClearedWords) {
				clearedWords.push(currentWord)
			}
		})

		return clearedWords
	}

	/**
	 * Получает английское слово и возвращает его транскрипцию (если есть)
	 * @param engWord
	 */
	getEnglishWordTranscription(engWord: string) {
		const wordTranscriptions = {
			'a book': 'ə bʊk',
			'a magazine': 'mæɡəˈziːn',
			'a teacher': 'ə ˈtiːtʃə',
			'a doctor': 'ə ˈdɒktə',
			'a student': 'ə ˈstjuːd(ə)nt',
			sick: 'sɪk',
			'a child': 'ə tʃaɪld',
			glad: 'ɡlæd',
			ready: 'ˈredɪ',
			soon: 'suːn',
			happy: 'ˈhæpɪ',
		}

		// @ts-ignore
		return wordTranscriptions[engWord]
	}
}

const articleService = new ArticleService(articles)
export default articleService
