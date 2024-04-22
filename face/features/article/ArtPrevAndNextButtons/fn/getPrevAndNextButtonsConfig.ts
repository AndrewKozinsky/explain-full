import { useMemo } from 'react'
import { PrevAndNextButtonConfig } from '../../../../shared/components/articles/PrevAndNextButtons/PrevAndNextButtons'
import ArticleType from '../../../../shared/articlesData/articleType'
import { PageUrls } from '../../../../shared/сonsts/pageUrls'

export function useGetPrevAndNextButtonsConfig(
	prevArticle: ArticleType.Art | null,
	nextArticle: ArticleType.Art | null,
) {
	return useMemo(function (): {
		prevBtnConfig: PrevAndNextButtonConfig | undefined
		nextBtnConfig: PrevAndNextButtonConfig | undefined
	} {
		return {
			prevBtnConfig: convertArticleToButtonConfig(prevArticle),
			nextBtnConfig: convertArticleToButtonConfig(nextArticle),
		}
	}, [])
}

export function convertArticleToButtonConfig(
	article: ArticleType.Art | null,
): undefined | PrevAndNextButtonConfig {
	if (!article) return

	let topText = undefined
	if (article.type === ArticleType.ArtType.article) {
		topText = article.chapterNum
	}

	return {
		topText,
		name: article.meta.articleName,
		description: article.meta.articleDescription,
		href: PageUrls.courseArticle(article.meta.slug).url,
	}
}
