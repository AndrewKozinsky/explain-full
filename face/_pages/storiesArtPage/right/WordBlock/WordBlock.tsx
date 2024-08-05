'use client'

import React from 'react'
import NoWordSelected from '../NoWordSelected/NoWordSelected'
import WordSelected from '../WordSelected/WordSelected'
import { useGetShowBlockType } from './fn/showBlockType'
import './WordBlock.scss'

/** Страница вводной глав курса */
function WordBlock() {
	const showingBlockType = useGetShowBlockType()

	return (
		<div className="word-block">
			{showingBlockType === 'notSelected' && <NoWordSelected />}
			{showingBlockType === 'selected' && <WordSelected />}
		</div>
	)
}

export default WordBlock
