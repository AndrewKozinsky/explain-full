import React from 'react'
import NoWordSelected from '../NoWordSelected/NoWordSelected'
import './SelectedWordBlock.scss'

/** Страница вводной глав курса */
function SelectedWordBlock() {
	return (
		<div className="selected-word-block">
			<NoWordSelected />
		</div>
	)
}

export default SelectedWordBlock
