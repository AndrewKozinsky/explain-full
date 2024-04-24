import cn from 'classnames'
import React from 'react'
import { CloseIcon } from '../../icons/CloseIcon/CloseIcon'
import './CloseButton.scss'

type CloseButtonProps = {
	extraClass?: string
	onClick: () => void
}

function CloseButton(props: CloseButtonProps) {
	const { extraClass, onClick } = props

	return (
		<button onClick={onClick} className={cn('close-button', extraClass)}>
			<CloseIcon />
		</button>
	)
}

export default CloseButton
