import type { Metadata } from 'next'
import PageWrapper from '../widgets/pageWrapper/PageWrapper/PageWrapper'
import Metrika from './_in/Metrika/Metrika'
import './_in/style/global.scss'

export const metadata: Metadata = {
	title: 'Курс английского языка',
	description: 'Курс английского языка с нуля до уровня А2',
	verification: {
		yandex: '1611c5fab3b46857',
	},
	keywords: ['Английский', 'курс'],
}

type RootLayoutProps = {
	children: React.ReactNode
}
export default function RootLayout(props: RootLayoutProps) {
	const { children } = props

	return (
		<html lang="ru">
			<head>
				<link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
			</head>
			<body>
				<Metrika />
				<PageWrapper>{children}</PageWrapper>
			</body>
		</html>
	)
}

// TODO Напиши тесты на useIsCurrentPage.
// TODO Сделай из логотипа ссылку.
// TODO Считаю нужно сделать кнопку входа в учётную запись.
