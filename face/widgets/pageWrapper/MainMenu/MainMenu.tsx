'use client'

import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { PageUrls } from '../../../shared/сonsts/pageUrls'
import { useIsCurrentPage } from './fn/isCurrentPage'
import './MainMenu.scss'

function MainMenu() {
	return (
		<nav>
			<ul className="main-menu__ul">
				<li>
					<MenuLink linkData={PageUrls.course} />
				</li>
				<li>
					<MenuLink linkData={PageUrls.contacts} />
				</li>
			</ul>
		</nav>
	)
}

export default MainMenu

type MenuLinkProps = {
	linkData: {
		url: string
		name: string
	}
}

function MenuLink(props: MenuLinkProps) {
	const { linkData } = props
	const { url, name } = linkData

	const currentPage = useIsCurrentPage(url)

	return (
		<Link href={url} className={cn('link', currentPage && 'link--current')}>
			{name}
		</Link>
	)
}
