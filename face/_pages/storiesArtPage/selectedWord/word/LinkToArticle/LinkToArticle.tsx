import React from 'react'
import './LinkToArticle.scss'

type LinkToArticleProps = {
	children: string
	href: string
}

function LinkToArticle(props: LinkToArticleProps) {
	const { children, href } = props

	return <p className="link-to-article">{children}</p>
}

export default LinkToArticle
