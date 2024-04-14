import { render } from '@testing-library/react'
import {ReactElement} from 'react'
import { MemoryRouter } from 'react-router-dom'

// DELETE
export function renderWithRouter(component: ReactElement, options = {}) {
	const Wrapper = <MemoryRouter {...options}>{component}</MemoryRouter>

	return render(Wrapper);
}
