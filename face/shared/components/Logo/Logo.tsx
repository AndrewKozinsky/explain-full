import React from 'react'

type LogoProps = {
	extraClass?: string
}

function Logo(props: LogoProps) {
	const { extraClass } = props

	return <img className={extraClass} src="/images/common/logo.svg" alt="logo" />
}

export default Logo
