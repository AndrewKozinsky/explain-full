'use client'

import React from 'react'
import { useGetRusAndEngSentence } from './fn/getRusAndEngSentence'
import './SentenceReview.scss'

function SentenceReview() {
	const sentenceTexts = useGetRusAndEngSentence()

	return (
		<div className="sentence-review">
			<p className="sentence-review__eng">{sentenceTexts.eng}</p>
			<p className="sentence-review__rus">{sentenceTexts.rus}</p>
		</div>
	)
}

export default SentenceReview
