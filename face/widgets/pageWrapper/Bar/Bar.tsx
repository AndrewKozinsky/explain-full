import React from 'react'
import { LinkLogoWithText } from '../../../shared/components/logo/LinkLogoWithText/LinkLogoWithText'
import { MainMenu } from '../MainMenu/MainMenu'
import './Bar.scss'

function Bar() {
	return (
		<div className="page-bar">
			<LinkLogoWithText />
			<MainMenu />
		</div>
	)
}

export default Bar
