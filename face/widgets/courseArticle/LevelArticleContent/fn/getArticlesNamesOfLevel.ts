import { useMemo } from 'react'
import articleService from '../../../../shared/articlesData/articleService'
import ArticleType from '../../../../shared/articlesData/articleType'

export function getArticlesNamesOfLevel(article: ArticleType.ArtLevel): string[] {
	return useMemo(function () {
		const { level } = article
		const articles = articleService.getArticlesOfLevel(level)
		const articlesNames = articles.map((article) => article.name)

		for (let i = 0; i < articlesNames.length; i++) {
			if (i < 1) continue

			articlesNames.splice(i, 0, '*')
			i++
		}

		return articlesNames
	}, [])
}
