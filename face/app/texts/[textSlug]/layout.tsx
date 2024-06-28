import { ReactNode } from 'react'
import { Metadata } from 'next'
import articleService from '../../../articleService/articleService'

type GenerateMetadataParams = {
	params: {
		textSlug: string
	}
}

export async function generateMetadata(params: GenerateMetadataParams): Promise<Metadata> {
	const { textSlug } = params.params

	return {
		description: 'Text description',
		title: 'Text title',
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
