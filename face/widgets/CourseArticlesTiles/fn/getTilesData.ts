import { useMemo } from 'react'
import articleService from '../../../shared/articlesData/articleService'
import ArticleType from '../../../shared/articlesData/articleType'
import { ArticleTileType } from '../../../shared/components/articles/ArticleTile/fn/types'
import { PageUrls } from '../../../shared/сonsts/pageUrls'

export function useGetTilesData(): ArticleTileType.Tile[] {
	return useMemo(function () {
		const articles = articleService.getArticles()

		return articles.map((art) => {
			const articleType = art.type
			const url = PageUrls.courseArticle(art.meta.slug).url

			if (articleType === ArticleType.ArtType.welcome) {
				return getWelcomeTileConf(url)
			} else if (articleType === ArticleType.ArtType.level) {
				return getLevelTileConf(art, url)
			} else if (articleType === ArticleType.ArtType.media) {
				return getMediaTileConf(url)
			}

			return getArticleTileConf(art, url)
		})
	}, [])
}

function getWelcomeTileConf(url: string): ArticleTileType.WelcomeTile {
	return {
		type: 'welcome',
		url,
	}
}

function getLevelTileConf(article: ArticleType.ArtLevel, url: string): ArticleTileType.LevelTile {
	const levelNames = {
		[ArticleType.LangLevel.a1]: ArticleType.LangLevelName.a1,
		[ArticleType.LangLevel.a2]: ArticleType.LangLevelName.a2,
		[ArticleType.LangLevel.b1]: ArticleType.LangLevelName.b1,
		[ArticleType.LangLevel.b2]: ArticleType.LangLevelName.b2,
	}

	return {
		type: 'level',
		level: article.level,
		name: levelNames[article.level],
		url,
	}
}

function getMediaTileConf(url: string): ArticleTileType.MediaTile {
	return {
		type: 'media',
		url,
	}
}
function getArticleTileConf(
	article: ArticleType.ArtArticle,
	url: string,
): ArticleTileType.ArticleTile {
	return {
		type: 'article',
		top: 'Глава ' + article.meta.number,
		header: article.meta.articleName,
		description: article.meta.articleDescription,
		url,
	}
}
