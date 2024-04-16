import {render, screen} from '@testing-library/react'
import { MainMenuLink } from '../MainMenu'

const useIsCurrentPageMock = jest.fn()
jest.mock('../fn/mainMenuFn', () => {
	return {
		useIsCurrentPage: () => useIsCurrentPageMock()
	}
})

describe('MainMenuLink', () => {
	const url = '/my-url'
	const name = 'my-name'
	const linkData = {url, name}

	beforeEach(() => {
		useIsCurrentPageMock.mockClear()
	})

	it('should render MenuLink with correct href and text', () => {
		const { container } = render(<MainMenuLink linkData={linkData} />)

		expect(screen.getByRole('link')).toBeInTheDocument()
		expect(container.querySelector('a')?.href).toBe('http://localhost' + url)
		expect(container.querySelector('a')?.textContent).toBe(name)
	})

	it('should set correct class names if page uri is match to the link', () => {
		useIsCurrentPageMock.mockReturnValue( true)

		render(<MainMenuLink linkData={linkData} />)

		const classes = screen.getByRole('link').getAttribute('class')
		expect(classes).toBe('link link--current')
	})

	it('should set correct class names if page uri is not match to the link', () => {
		useIsCurrentPageMock.mockReturnValue( false)

		render(<MainMenuLink linkData={linkData} />)

		const classes = screen.getByRole('link').getAttribute('class')
		expect(classes).toBe('link')
	})
})
