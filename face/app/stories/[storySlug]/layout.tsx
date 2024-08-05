import { ReactNode } from 'react'
import { Metadata } from 'next'

type GenerateMetadataParams = {
	params: {
		storySlug: string
	}
}

export async function generateMetadata(params: GenerateMetadataParams): Promise<Metadata> {
	const { storySlug } = params.params

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
