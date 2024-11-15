import React from 'react'
import {
	PrevAndNextButtons,
	PrevAndNextButtonsTextColor,
} from '../PrevAndNextButtons/PrevAndNextButtons'
import ArticleType from '../../../../articlesData/articleType'
import { useGetPrevAndNextArticlesNavConfig } from './fn/getPrevAndNextButtonsConfig'

type PrevAndNextArticlesNavProps = {
	textColor?: PrevAndNextButtonsTextColor
	prevArticle: ArticleType.Art | null
	nextArticle: ArticleType.Art | null
}

/** Блок с кнопками-ссылками на предыдущую и следующую статью */
export function PrevAndNextArticlesNav(props: PrevAndNextArticlesNavProps) {
	const { textColor, prevArticle, nextArticle } = props

	const { prevBtnConfig, nextBtnConfig } = useGetPrevAndNextArticlesNavConfig(
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
