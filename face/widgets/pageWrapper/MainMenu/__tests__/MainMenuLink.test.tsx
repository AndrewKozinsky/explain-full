import {render, screen} from '@testing-library/react'
import expect from 'expect'
import { useIsCurrentPage } from '../fn/mainMenuFn'
import { MainMenuLink } from '../MainMenu'
const foo = { useIsCurrentPage }

/*const useIsCurrentPageMock = jest.fn()
jest.mock('../fn/isCurrentPage', () => {
	return {
		useIsCurrentPage: () => useIsCurrentPageMock
	}
})*/
const useIsCurrentPageMock = jest.spyOn(foo, 'useIsCurrentPage')

describe('MainMenuLink', () => {
	const url = '/my-url'
	const name = 'my-name'
	const linkData = {url, name}

	it('should ', () => {
		expect(2 + 2).toBe(4)
	})

	/*it('should render MenuLink with correct href and text', () => {
		const { container } = render(<MainMenuLink linkData={linkData} />)

		expect(screen.getByRole('link')).toBeInTheDocument()
		expect(container.querySelector('a')?.href).toBe('http://localhost' + url)
		expect(container.querySelector('a')?.textContent).toBe(name)
	})

	it('should set correct class names if page uri is match to the link', () => {
		useIsCurrentPageMock.mockImplementationOnce(() => true)

		render(<MainMenuLink linkData={linkData} />)

		const classes = screen.getByTestId('main-menu-link').getAttribute('class')
		expect(classes).toBe('link link--current')
		// expect(useIsCurrentPageMock).toBeCalledTimes(1)
	})*/

	/*it('should set correct class names if page uri is not match to the link', () => {
		useIsCurrentPageMock.mockImplementationOnce(() => false)

		render(<MainMenuLink linkData={linkData} />)

		const classes = screen.getByRole('link').getAttribute('class')
		expect(classes).toBe('link')
	})*/
})
