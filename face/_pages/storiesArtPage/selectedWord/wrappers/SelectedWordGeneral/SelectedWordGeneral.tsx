import React from 'react'
import SentenceReview from '../../sentencePart/SentenceReview/SentenceReview'
import TopReview from '../../topPart/TopReview/TopReview'
import Widgets from '../../widgetsPart/Widgets/Widgets'
import Grammars from '../../wordPart/Grammars/Grammars'
import './SelectedWordGeneral.scss'

function SelectedWordGeneral() {
	return (
		<section className="selected-word-general">
			<TopReview />
			<Widgets />
			<div className="selected-word-general__block">
				<h3 className="selected-word-general__header">Грамматика слов и фраз</h3>
				<Grammars />
			</div>
			<div className="selected-word-general__block">
				<h3 className="selected-word-general__header">Предложение</h3>
				<SentenceReview />
			</div>
		</section>
	)
}

export default SelectedWordGeneral
