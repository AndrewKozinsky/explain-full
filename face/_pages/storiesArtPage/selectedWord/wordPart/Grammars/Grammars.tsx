import React from 'react'
import LinkToArticle from '../LinkToArticle/LinkToArticle'
import './Grammars.scss'

function PhrasesGrammars() {
	const doPhraseLinks: GrammarLinkConfig[] = [
		{ text: 'Present Simple', href: '' },
		{ text: 'Модальный глагол must', href: '' },
	]
	const goOnPhraseLinks: GrammarLinkConfig[] = [{ text: 'Фразовые глаголы', href: '' }]

	return (
		<div className="phrases-grammar">
			<PhraseGrammar header="go" linkConfigs={doPhraseLinks} />
			<PhraseGrammar header="go on" linkConfigs={goOnPhraseLinks} />
		</div>
	)
}

export default PhrasesGrammars

type GrammarLinkConfig = {
	text: string
	href: string
}

type PhraseGrammarProps = {
	header: string
	linkConfigs: GrammarLinkConfig[]
}

function PhraseGrammar(props: PhraseGrammarProps) {
	const { header, linkConfigs } = props

	return (
		<div className="phrase-grammar">
			<h3 className="phrase-grammar__header">{header}</h3>
			{linkConfigs.map((linkConfig) => {
				return <LinkToArticle href={linkConfig.href}>{linkConfig.text}</LinkToArticle>
			})}
		</div>
	)
}
