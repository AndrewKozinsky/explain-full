'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Home() {
	return (
		<main>
			<Link href="/">index page</Link>
		</main>
	)
}
