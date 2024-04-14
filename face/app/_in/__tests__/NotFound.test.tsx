import { render, screen } from '@testing-library/react'
import NotFound from '../../not-found'


describe('NotFound page', () => {
	it('should render NotFound page', () => {
		render(<NotFound />)

		// @ts-ignore
		expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument()
	})
})
