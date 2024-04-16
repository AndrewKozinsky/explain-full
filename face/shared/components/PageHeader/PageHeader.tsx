import React from 'react'
import './PageHeader.scss'

type PageHeaderProps = {
	children: React.ReactNode
}

export function PageHeader(props: PageHeaderProps) {
	const { children } = props

	return <h1 className="page-header">{children}</h1>
}
