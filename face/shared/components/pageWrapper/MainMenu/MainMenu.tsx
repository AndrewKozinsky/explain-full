'use client'

import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { PageUrls } from '../../../сonsts/pageUrls'
import { useIsCurrentPage } from './fn/isCurrentPage'
import './MainMenu.scss'

function MainMenu() {
	return (
		<nav>
			<ul className="main-menu__ul">
				<li>
					<MenuLink name={PageUrls.course.name} url={PageUrls.course.url} />
				</li>
			</ul>
		</nav>
	)
}

export default MainMenu

type MenuLinkProps = {
	url: string
	name: string
}

function MenuLink(props: MenuLinkProps) {
	const { url, name } = props

	const currentPage = useIsCurrentPage(url)

	return (
		<Link href={url} className={cn('link', currentPage && 'link--current')}>
			{name}
		</Link>
	)
}
