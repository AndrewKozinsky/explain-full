import { useMemo } from 'react'
import ArticleType from '../../../../articlesData/articleType'
import articleService from '../../../../articleService/articleService'

/**
 * Получает объект статьи и вычленяет блоки со словами для заучивания
 * @param article — данные следующей статьи
 */
export function getWords(article: ArticleType.ArtArticle) {
	return useMemo(function () {
		const words = articleService.getArticleWords(article.meta.slug)

		return words.map((wordObj) => wordObj.engWord)
	}, [])
}
