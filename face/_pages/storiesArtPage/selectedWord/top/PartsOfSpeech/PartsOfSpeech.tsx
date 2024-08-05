import cn from 'classnames'
import React from 'react'
import { useGetSelectedWord } from '../common'
import './PartsOfSpeech.scss'

function PartsOfSpeech() {
	const selectedWord = useGetSelectedWord()

	if (!selectedWord) {
		return null
	}

	return (
		<div className="parts-of-speech">
			<PartOfSpeechItem
				title="Часть речи"
				textInBlock={selectedWord.word.partOfSpeech}
				blockColor="white"
			/>
			<PartOfSpeechItem
				title="Часть предл."
				textInBlock={selectedWord.word.partOfSentence}
				blockColor="black"
			/>
		</div>
	)
}

export default PartsOfSpeech

type PartOfSpeechItemProps = {
	title: string
	textInBlock: string
	blockColor: 'black' | 'white'
}

function PartOfSpeechItem(props: PartOfSpeechItemProps) {
	const { title, textInBlock, blockColor } = props

	return (
		<div className="part-of-speech">
			<p className="part-of-speech__title">{title}</p>
			<p
				className={cn(
					'part-of-speech__name',
					blockColor === 'black'
						? 'part-of-speech__name--black'
						: 'part-of-speech__name--white',
				)}
			>
				{textInBlock}
			</p>
		</div>
	)
}
