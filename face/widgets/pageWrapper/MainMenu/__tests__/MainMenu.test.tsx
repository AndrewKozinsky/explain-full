import {render, screen} from '@testing-library/react'
import * as isCurrentPage from '../fn/mainMenuFn'
import {MainMenu, MainMenuLink} from '../MainMenu'

describe('MainMenu', () => {
	it('should render Bar', () => {
		render(<MainMenu />)

		expect(screen.getByTestId('main-menu')).toBeInTheDocument()
	})
})
