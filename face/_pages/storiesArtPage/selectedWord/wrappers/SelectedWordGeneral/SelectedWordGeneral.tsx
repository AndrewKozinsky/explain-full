import React from 'react'
import SentenceReview from '../../sentence/SentenceReview/SentenceReview'
import TopReview from '../../top/TopReview/TopReview'
import WordReview from '../../word/WordReview/WordReview'
import './SelectedWordGeneral.scss'

function SelectedWordGeneral() {
	return (
		<section className="selected-word-general">
			<TopReview />
			<div className="selected-word-general__block">
				<h3 className="selected-word-general__header">Грамматика слов и фраз</h3>
				<WordReview />
			</div>
			<div className="selected-word-general__block">
				<h3 className="selected-word-general__header">Предложение</h3>
				<SentenceReview />
			</div>
		</section>
	)
}

export default SelectedWordGeneral
