import React from 'react'
import cn from 'classnames'
import './PageHeader.scss'

type PageHeaderProps = {
	extraClass?: string
	children: React.ReactNode
}

export function PageHeader(props: PageHeaderProps) {
	const { children, extraClass } = props

	return <h1 className={cn('page-header', extraClass)}>{children}</h1>
}
