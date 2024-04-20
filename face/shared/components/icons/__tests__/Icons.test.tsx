import { render, screen } from '@testing-library/react'
import { LeftArrow, RightArrow } from '../Arrow/Arrow'

describe('Icons', () => {
	it('should render all icons', () => {
		const icons = [<LeftArrow />, <RightArrow />]

		for (let i = 0; i < icons.length; i++) {
			const { container } = render(icons[i])
			const $svgElem = container.children[0]

			expect($svgElem).toBeInTheDocument()
		}
	})
})
