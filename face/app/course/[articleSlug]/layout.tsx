import { ReactNode } from 'react'
import { Metadata } from 'next'
import articleService from '../../../shared/articlesData/articleService'

type GenerateMetadataParams = {
	params: {
		articleSlug: string
	}
}

export async function generateMetadata(params: GenerateMetadataParams): Promise<Metadata> {
	const { articleSlug } = params.params

	const article = articleService.getArticle(articleSlug)

	if (!article) {
		return {
			description: 'Глава не найдена',
			title: 'Глава не найдена',
		}
	}

	return {
		description: article.meta.articleDescription,
		title: article.meta.articleName,
	}
}

// ==============================

type ArticleLayoutProps = {
	children: ReactNode
}

function Layout(props: ArticleLayoutProps) {
	const { children } = props

	return children
}

export default Layout
