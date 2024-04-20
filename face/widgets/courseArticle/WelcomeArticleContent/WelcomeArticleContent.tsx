import React from 'react'
import { ArtPrevAndNextButtons } from '../../../features/article/ArtPrevAndNextButtons/ArtPrevAndNextButtons'
import ArticleType from '../../../shared/articlesData/articleType'
import './WelcomeArticleContent.scss'

type WelcomeArticleContentProps = {
	prevArticle: ArticleType.Art | null
	article: ArticleType.Art
	nextArticle: ArticleType.Art | null
}

function WelcomeArticleContent(props: WelcomeArticleContentProps) {
	const { prevArticle, article, nextArticle } = props

	return (
		<div className="welcome-article">
			<div className="welcome-article__content" />
			<ArtPrevAndNextButtons prevArticle={prevArticle} nextArticle={nextArticle} />
		</div>
	)
}

export default WelcomeArticleContent
