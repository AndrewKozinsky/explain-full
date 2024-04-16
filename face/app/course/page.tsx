'use client'
import { BreadCrumbs } from '../../shared/components/pageDetails/BreadCrumbs/BreadCrumbs'
import { PageContentWrapper } from '../../shared/components/pageDetails/PageContentWrapper/PageContentWrapper'
import { PageHeader } from '../../shared/components/pageDetails/PageHeader/PageHeader'

export default function Home() {
	return (
		<main>
			<PageContentWrapper>
				<BreadCrumbs />
				<PageHeader>Курс «Понимая английский»</PageHeader>
				<p>Content</p>
			</PageContentWrapper>
		</main>
	)
}
