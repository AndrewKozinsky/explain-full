import { render, screen } from '@testing-library/react'
import ArticleType from '../../../../shared/articlesData/articleType'
import { ArtPrevAndNextButtons } from '../ArtPrevAndNextButtons'

describe('ArtPrevAndNextButtons component', () => {
	it('should not render component if passed no previous article nor next one', () => {
		render(<ArtPrevAndNextButtons prevArticle={null} nextArticle={null} />)

		expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
	})

	it('should render component with empty div as a next link if passed no next article and a link if previous article was passed', () => {
		const prevArtArticle: ArticleType.ArtArticle = {
			type: ArticleType.ArtType.article,
			meta: {
				number: 4,
				slug: 'personal-pronouns',
				articleName: 'Личные местоимения',
				articleDescription: 'Личные местоимения в английском языке.',
			},
			chapterNum: 'my chapterNum',
			content: [],
		}

		const { container } = render(
			<ArtPrevAndNextButtons prevArticle={prevArtArticle} nextArticle={null} />,
		)
		const prevLinkElem = container.children[0].children[0]
		const nextLinkElem = container.children[0].children[1]

		expect(screen.queryByRole('navigation')).toBeInTheDocument()
		expect(prevLinkElem.tagName).toBe('A')
		expect(nextLinkElem.tagName).toBe('DIV')
	})

	it('should render component with empty div as a previous link if passed no previous article and a link if next article was passed', () => {
		const nextArtArticle: ArticleType.ArtArticle = {
			type: ArticleType.ArtType.article,
			meta: {
				number: 4,
				slug: 'personal-pronouns',
				articleName: 'Личные местоимения',
				articleDescription: 'Личные местоимения в английском языке.',
			},
			chapterNum: 'my chapterNum',
			content: [],
		}

		const { container } = render(
			<ArtPrevAndNextButtons prevArticle={null} nextArticle={nextArtArticle} />,
		)
		const prevLinkElem = container.children[0].children[0]
		const nextLinkElem = container.children[0].children[1]

		expect(screen.queryByRole('navigation')).toBeInTheDocument()
		expect(prevLinkElem.tagName).toBe('DIV')
		expect(nextLinkElem.tagName).toBe('A')
	})
})
