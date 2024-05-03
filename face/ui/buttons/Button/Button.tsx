import React from 'react'
import '../Button.scss'
import './Button.scss'

type ButtonProps = {
	text: string
}

function Button(props: ButtonProps) {
	const { text } = props

	return <button className="button rect-button">{text}</button>
}

export default Button
