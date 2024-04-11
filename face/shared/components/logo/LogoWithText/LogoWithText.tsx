import React from 'react'
import LogoSign from '../LogoSign/LogoSign'
import './LogoWithText.scss'

function LogoWithText() {
	return (
		<div className="logo-with-text">
			<LogoSign />
			<div className="logo-with-text__right">
				<p className="logo-with-text__name">Explain it</p>
				<p className="logo-with-text__description">Курс английского языка</p>
			</div>
		</div>
	)
}

export default LogoWithText
