import React from 'react'
import {
	PrevAndNextButtons,
	PrevAndNextButtonsTextColor,
} from '../../../shared/components/articles/PrevAndNextButtons/PrevAndNextButtons'
import ArticleType from '../../../shared/articlesData/articleType'
import { useGetPrevAndNextButtonsConfig } from './fn/getPrevAndNextButtonsConfig'

type WelcomeArticleContentProps = {
	textColor?: PrevAndNextButtonsTextColor
	prevArticle: ArticleType.Art | null
	nextArticle: ArticleType.Art | null
}

export function ArtPrevAndNextButtons(props: WelcomeArticleContentProps) {
	const { textColor, prevArticle, nextArticle } = props

	const { prevBtnConfig, nextBtnConfig } = useGetPrevAndNextButtonsConfig(
		prevArticle,
		nextArticle,
	)

	return (
		<PrevAndNextButtons
			backConfig={prevBtnConfig}
			nextConfig={nextBtnConfig}
			textColor={textColor}
		/>
	)
}
