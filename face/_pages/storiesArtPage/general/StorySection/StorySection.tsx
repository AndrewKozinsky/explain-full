import React from 'react'
import { StoryConfigT } from '../../../../requests/texts/textsApiTypes'
import SelectedWordBlock from '../../right/SelectedWordBlock/SelectedWordBlock'
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
			<SelectedWordBlock />
		</section>
	)
}

export default StorySection
