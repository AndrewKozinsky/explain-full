import { render, screen } from '@testing-library/react'
import LogoSign from '../LogoSign'

describe('LogoSign', () => {
	it('should render LogoSign', () => {
		render(<LogoSign />)

		// @ts-ignore
		expect(screen.getByRole('img')).toBeInTheDocument()
	})
})
