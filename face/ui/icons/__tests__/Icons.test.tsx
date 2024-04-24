import { render } from '@testing-library/react'
import { LeftArrow, RightArrow } from '../Arrow/Arrow'
import { CloseIcon } from '../CloseIcon/CloseIcon'

describe('Icons', () => {
	it('should render all icons', () => {
		const icons = [<LeftArrow />, <RightArrow />, <CloseIcon />]

		for (let i = 0; i < icons.length; i++) {
			const { container } = render(icons[i])
			const $svgElem = container.children[0]

			expect($svgElem).toBeInTheDocument()
		}
	})
})
