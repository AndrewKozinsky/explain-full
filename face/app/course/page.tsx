'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Home() {
	const pathname = usePathname()
	return (
		<main>
			<Link href="/article">article</Link>
		</main>
	)
}
