'use client'

import cn from 'classnames'
import React from 'react'
import Link from 'next/link'
import { PageUrls } from '../../../сonsts/pageUrls'
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

	return (
		<Link
			href={url}
			className={cn('link', isCurrentPage && 'main-menu__link--current')}
			data-testid="main-menu-item"
		>
			{name}
		</Link>
	)
}
