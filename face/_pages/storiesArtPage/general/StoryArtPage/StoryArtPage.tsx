import React from 'react'
import { StoryConfigT } from '../../../../requests/texts/textsApiTypes'
import { BreadCrumbs } from '../../../../ui/pageRelated/BreadCrumbs/BreadCrumbs'
import { PageContentWrapper } from '../../../../ui/pageRelated/PageContentWrapper/PageContentWrapper'
import { PageHeader } from '../../../../ui/pageRelated/PageHeader/PageHeader'
import { PageUrls } from '../../../../сonsts/pageUrls'
import StorySection from '../StorySection/StorySection'

type TextArtPageProps = {
	text: StoryConfigT.Story
}

/** Страница вводной глав курса */
function StoryArtPage(props: TextArtPageProps) {
	const { text } = props

	return (
		<PageContentWrapper>
			<BreadCrumbs items={[PageUrls.stories]} />
			<PageHeader subheaderText={text.ruHeader}>{text.enHeader}</PageHeader>
			<StorySection storyConfig={text} />
		</PageContentWrapper>
	)
}

export default StoryArtPage
