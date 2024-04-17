import React from 'react'
// import cn from 'classnames'
import Link from 'next/link'
// import ArticleType from '../../../articles/articlesData/articleType'
// import AppUrls from '../../../parts/pageUrl'
import './ArticleTile.scss'

type ArticleListItemProps = {
	url: string
	// article: ArticleType.ShortArticle
}

// Карточка-ссылка на статью
function ArticleTile(props: ArticleListItemProps) {
	const { url } = props

	/*const cardClasses = cn(
		'article-list__card',
		article.isPaid ? 'article-list__card--paid' : 'article-list__card--free'
	)*/

	return (
		<Link href={url} className="article-tile">
			<p>HELLO</p>
			{/*<p className="article-list__card-num">Глава {article.number}</p>
			<div className="article-list__card-content">
				<h3 className="article-list__card-name">{article.name}</h3>
				{!article.isPaid && (
					<p className="article-list__card-description">{article.description}</p>
				)}
			</div>*/}
		</Link>
	)
}

export default ArticleTile
