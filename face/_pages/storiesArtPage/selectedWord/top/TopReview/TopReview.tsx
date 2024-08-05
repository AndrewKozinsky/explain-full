import React from 'react'
import EngWord from '../EngWord/EngWord'
import PartsOfSpeech from '../PartsOfSpeech/PartsOfSpeech'
import Transcriptions from '../Transcriptions/Transcriptions'
import Translate from '../Translate/Translate'
import './TopReview.scss'

function TopReview() {
	return (
		<div color="top-review">
			<PartsOfSpeech />
			<EngWord />
			<Transcriptions />
			<Translate />
		</div>
	)
}

export default TopReview
