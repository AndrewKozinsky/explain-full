import type { Metadata } from 'next'
import './_in/style/global.scss'

export const metadata: Metadata = {
	title: 'Курс английского языка',
	description: 'Курс английского языка',
}

type RootLayoutProps = {
	children: React.ReactNode
}
export default function RootLayout(props: RootLayoutProps) {
	const { children } = props

	return (
		<html lang="ru">
			<head>
				<link rel="icon" href="favicon.svg" sizes="any" type="image/svg+xml" />
			</head>
			<body>{children}</body>
		</html>
	)
}
