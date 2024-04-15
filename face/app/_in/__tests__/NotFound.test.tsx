import { render, screen } from '@testing-library/react'
import NotFound from '../../not-found'

describe('NotFound page', () => {
	it('should render NotFound pageshould render RootLayout', () => {
		render(<NotFound />)

		expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument()
	})
})
