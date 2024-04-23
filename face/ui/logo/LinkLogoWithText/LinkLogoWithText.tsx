'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoWithText from '../LogoWithText/LogoWithText'
import './LinkLogoWithText.scss'

export function LinkLogoWithText() {
	const pathname = usePathname()

	if (pathname === '/') {
		return (
			<div className="link-logo-default" data-testid="defaultLogoWithText">
				<LogoWithText />
			</div>
		)
	}

	return (
		<Link href="/face/public" className="link-logo" data-testid="linkLogoWithText">
			<LogoWithText />
		</Link>
	)
}
