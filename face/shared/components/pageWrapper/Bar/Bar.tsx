import React from 'react'
import Logo from '../../Logo/Logo'
import './Bar.scss'
import MainMenu from '../MainMenu/MainMenu'

function Bar() {
	return (
		<div className="page-bar">
			<Logo />
			<MainMenu />
		</div>
	)
}

export default Bar
