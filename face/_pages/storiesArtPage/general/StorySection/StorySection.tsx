import React from 'react'
import { StoryConfigT } from '../../../../requests/texts/textsApiTypes'
import WordBlock from '../../right/WordBlock/WordBlock'
import StoryBlock from '../../text/StoryBlock/StoryBlock'
import './StorySection.scss'

type TextArtPageProps = {
	textConfig: StoryConfigT.Story
}

/** Страница вводной глав курса */
function StorySection(props: TextArtPageProps) {
	const { textConfig } = props

	return (
		<section className="story-section">
			<StoryBlock textConfig={textConfig} />
			<WordBlock />
		</section>
	)
}

export default StorySection
