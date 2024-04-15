'use client'

import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { PageUrls } from '../../../shared/сonsts/pageUrls'
import { useIsCurrentPage } from './fn/mainMenuFn'
import './MainMenu.scss'

export function MainMenu() {
	return (
		<nav data-testid="main-menu">
			<ul className="main-menu__ul">
				<li>
					<MainMenuLink linkData={PageUrls.course} />
				</li>
				<li>
					<MainMenuLink linkData={PageUrls.contacts} />
				</li>
			</ul>
		</nav>
	)
}

type MenuLinkProps = {
	linkData: {
		url: string
		name: string
	}
}

export function MainMenuLink(props: MenuLinkProps) {
	const { linkData } = props
	const { url, name } = linkData

	const isCurrentPage = useIsCurrentPage(url)
	// console.log(isCurrentPage)

	return (
		<Link href={url} className={cn('link', isCurrentPage && 'link--current')} data-testid="main-menu-link">
			{name}
		</Link>
	)
}
