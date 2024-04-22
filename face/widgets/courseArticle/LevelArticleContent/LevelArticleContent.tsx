import React from 'react'
import { ArtPrevAndNextButtons } from '../../../features/article/ArtPrevAndNextButtons/ArtPrevAndNextButtons'
import ArticleType from '../../../shared/articlesData/articleType'
import { LanguageLevelBadge } from '../../../shared/components/articles/LanguageLevelBadge/LanguageLevelBadge'
import { getArticlesNamesOfLevel } from './fn/getArticlesNamesOfLevel'
import './LevelArticleContent.scss'

type WelcomeArticleContentProps = {
	prevArticle: ArticleType.Art | null
	article: ArticleType.Art
	nextArticle: ArticleType.Art | null
}

function LevelArticleContent(props: WelcomeArticleContentProps) {
	const { prevArticle, article, nextArticle } = props

	if (article.type !== ArticleType.ArtType.level) {
		return null
	}

	return (
		<div className="level-article">
			<div className="level-article__content">
				<LanguageLevelBadge level={article.level} />
				<ArticlesNames article={article} />
			</div>
			<ArtPrevAndNextButtons
				prevArticle={prevArticle}
				nextArticle={nextArticle}
				textColor="white"
			/>
		</div>
	)
}

export default LevelArticleContent

type ArticlesNamesProps = {
	article: ArticleType.ArtLevel
}

function ArticlesNames(props: ArticlesNamesProps) {
	const { article } = props

	const articlesNames = getArticlesNamesOfLevel(article)

	return (
		<p>
			{articlesNames.map((name) => {
				if (name === '*') {
					return <span className="level-article__star">✦</span>
				}

				return name
			})}
		</p>
	)
}
