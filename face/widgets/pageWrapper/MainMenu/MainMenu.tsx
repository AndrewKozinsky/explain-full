'use client'

import React from 'react'
import Link from 'next/link'
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

	if(isCurrentPage) {
		return (
			<p className='link--current' data-testid="main-menu-item">
				{name}
			</p>
		)
	}

	return (
		<Link href={url} className='link' data-testid="main-menu-item">
			{name}
		</Link>
	)
}
