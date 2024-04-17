'use client'
import ArticleTile from '../../shared/components/articles/ArticleTile/ArticleTile'
import { TilesWrapper } from '../../shared/components/articles/TilesWrapper/TilesWrapper'
import { BreadCrumbs } from '../../shared/components/pageDetails/BreadCrumbs/BreadCrumbs'
import { PageContentWrapper } from '../../shared/components/pageDetails/PageContentWrapper/PageContentWrapper'
import { PageHeader } from '../../shared/components/pageDetails/PageHeader/PageHeader'

export default function Home() {
	return (
		<main>
			<PageContentWrapper>
				<BreadCrumbs />
				<PageHeader>Курс «Понимая английский»</PageHeader>
				<TilesWrapper>
					<ArticleTile url="/" key={1} />
					<ArticleTile url="/" key={2} />
					<ArticleTile url="/" key={3} />
					<ArticleTile url="/" key={4} />
					<ArticleTile url="/" key={5} />
				</TilesWrapper>
			</PageContentWrapper>
		</main>
	)
}
