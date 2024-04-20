import React from 'react'
import { PrevAndNextButtons } from '../../../shared/articlesData/articlesBackAndNextButtons/ArtBackAndNextButtons/PrevAndNextButtons'
import ArticleType from '../../../shared/articlesData/articleType'
import { useGetPrevAndNextButtonsConfig } from './fn/getPrevAndNextButtonsConfig'

type WelcomeArticleContentProps = {
	prevArticle: ArticleType.Art | null
	nextArticle: ArticleType.Art | null
}

export function ArtPrevAndNextButtons(props: WelcomeArticleContentProps) {
	const { prevArticle, nextArticle } = props

	const { prevBtnConfig, nextBtnConfig } = useGetPrevAndNextButtonsConfig(
		prevArticle,
		nextArticle,
	)

	return <PrevAndNextButtons backConfig={prevBtnConfig} nextConfig={nextBtnConfig} />
}
