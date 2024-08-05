import React from 'react'
import { StoryConfigT } from '../../../../requests/texts/textsApiTypes'
import './StoryBlock.scss'

type TextArtPageProps = {
	textConfig: StoryConfigT.Story
}

/** Страница вводной глав курса */
function StoryBlock(props: TextArtPageProps) {
	const { textConfig } = props

	return (
		<div className="story-block">
			{textConfig.paragraphs.map((paragraph) => {
				return <Paragraph paragraph={paragraph}></Paragraph>
			})}
		</div>
	)
}

export default StoryBlock

type ParagraphProps = {
	paragraph: StoryConfigT.Paragraph
}

function Paragraph(props: ParagraphProps) {
	const { paragraph } = props

	return (
		<p>
			{paragraph.sentences.map((sentence) => {
				console.log(sentence)
				return <Sentence sentence={sentence} />
			})}
		</p>
	)
}

type SentenceProps = {
	sentence: StoryConfigT.Sentence
}
function Sentence(props: SentenceProps) {
	const { sentence } = props

	// return sentence.sentence.eng

	return sentence.sentenceParts.map((sentencePart) => {
		if (sentencePart.type === 'word') {
			return <Word word={sentencePart} />
		} else if (sentencePart.type === 'punctuation') {
			return <Punctuation punctuation={sentencePart} />
		}
	})
}

type WordProps = {
	word: StoryConfigT.Word
}
function Word(props: WordProps) {
	const { word } = props

	return <span className="story-block__word">{word.word.engWord}</span>
}

type PunctuationProps = {
	punctuation: StoryConfigT.Punctuation
}
function Punctuation(props: PunctuationProps) {
	const { punctuation } = props

	return <span>{punctuation.text}</span>
}
