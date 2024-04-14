import { render, screen } from '@testing-library/react'
import {renderWithRouter} from '../../../../../__tests__/utils/utils'
import LinkLogoWithText from '../LinkLogoWithText'
import nextNavigation from 'next/navigation'

const usePathnameMock = jest.spyOn(nextNavigation, 'usePathname')

describe('LogoWithText', () => {
	it('should render LogoWithText', () => {
		usePathnameMock.mockImplementationOnce(() => '/')
		render(<LinkLogoWithText />)

		expect(screen.getByTestId('defaultLogoWithText')).toBeInTheDocument()
		// expect(screen.getByText('Explain it')).toBeInTheDocument()
		// expect(screen.getByText(/Курс/i)).toBeInTheDocument()
	})
})
