import React from 'react'
import './PageWrapper.scss'
import Bar from '../Bar/Bar'

type PageWrapperProps = {
	children: React.ReactNode
}

function PageWrapper(props: PageWrapperProps) {
	const { children } = props

	return (
		<div className="page-wrapper">
			<header className="page-wrapper__top">
				<Bar />
			</header>
			<div className="page-wrapper__middle">{children}</div>
			<footer className="page-wrapper__bottom">
				<Bar />
			</footer>
		</div>
	)
}

export default PageWrapper
