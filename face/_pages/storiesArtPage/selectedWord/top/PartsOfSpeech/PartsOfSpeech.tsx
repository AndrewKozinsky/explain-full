import cn from 'classnames'
import React from 'react'
import { useGetPartsOfSpeech } from './fn/getPartsOfSpeech'
import './PartsOfSpeech.scss'

function PartsOfSpeech() {
	const partsOfSpeech = useGetPartsOfSpeech()

	return (
		<div className="parts-of-speech">
			<PartOfSpeechItem
				title="В предл."
				textInBlock={partsOfSpeech.inSentence}
				blockColor="black"
			/>
			<PartOfSpeechItem
				title="В речи"
				textInBlock={partsOfSpeech.inSpeech}
				blockColor="white"
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
