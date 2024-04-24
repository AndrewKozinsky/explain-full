import React from 'react'
import ArticleBuilder from '../../../../articleBuilder/ArticleBuilder/ArticleBuilder'
import { PrevAndNextArticlesNav } from '../../common/ArtPrevAndNextButtons/PrevAndNextArticlesNav'
import ArticleType from '../../../../articlesData/articleType'
import './ArticleArticleContent.scss'

type WelcomeArticleContentProps = {
	prevArticle: ArticleType.Art | null
	article: ArticleType.ArtArticle
	nextArticle: ArticleType.Art | null
}

/** Содержимое страницы начала уровня языка в курсе */
function ArticleArticleContent(props: WelcomeArticleContentProps) {
	const { prevArticle, article, nextArticle } = props

	return (
		<div className="article-article">
			<div className="article-article__content">
				<ArticleBuilder articleContent={article.content} />
			</div>
			<PrevAndNextArticlesNav prevArticle={prevArticle} nextArticle={nextArticle} />
		</div>
	)
}

export default ArticleArticleContent
