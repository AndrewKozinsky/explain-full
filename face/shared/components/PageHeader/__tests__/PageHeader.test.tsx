import { render, screen } from '@testing-library/react'
import { PageHeader } from '../PageHeader'

describe('BreadCrumbs', () => {
	it('should render BreadCrumbs consist of one index page link', () => {
		render(
			<PageHeader>
				Header <span>2</span>
			</PageHeader>,
		)

		const headerElem = screen.getByRole('heading')
		expect(headerElem).toBeInTheDocument()
		expect(headerElem.textContent).toBe('Header 2')
		expect(headerElem).toContainHTML('Header <span>2</span>')
	})
})
