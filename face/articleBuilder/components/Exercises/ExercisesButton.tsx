'use client'

import React from 'react'
import { ModalIcon } from '../../../ui/icons/ModalIcon/ModalIcon'
import cn from 'classnames'
import { useGetClickOnBlock } from './fn/clickOnBlock'
import { getSentences } from './fn/getSentences'
import ExercisesType from '../../../articlesData/exercisesType'
import './Exercises.scss'

type ExercisesProps = {
	exercises: ExercisesType.Exercises
}

// Кнопка перехода к модальному окну выполнения упражнений
function ExercisesButton(props: ExercisesProps) {
	const { exercises } = props

	if (exercises.exercises.length <= 2) {
		return null
	}

	return (
		<ButtonWrapper exercises={exercises}>
			<div className="exercises__bg" />
			<div className="exercises__content">
				<h2 className="exercises__header">
					Тренировка <span className="exercises__header-clue">Нажмите для открытия</span>
				</h2>
				<SentencesText exercises={exercises} />
			</div>
			<div className="exercises__divider" />
			<div className="exercises__right-part">
				<ModalIcon />
			</div>
		</ButtonWrapper>
	)
}

export default ExercisesButton

type ButtonWrapperProps = {
	exercises: ExercisesType.Exercises
	children: React.ReactNode[]
}

function ButtonWrapper(props: ButtonWrapperProps) {
	const { exercises, children } = props

	const blockClickHandler = useGetClickOnBlock(exercises.exercises)

	return (
		<button
			className={cn('exercises', exercises.offset && 'exercises--offset')}
			onClick={blockClickHandler}
		>
			{children}
		</button>
	)
}

type SentencesTextProps = {
	exercises: ExercisesType.Exercises
}

function SentencesText(props: SentencesTextProps) {
	const { exercises } = props

	const sentences = getSentences(exercises)

	return (
		<div className="exercises__exercises">
			{sentences.map((sentence, i) => {
				return (
					<p className="exercises__exercise" key={sentence}>
						{sentence}
						{sentences.length - 1 > i && <span className="exercises__star">✦</span>}
					</p>
				)
			})}
		</div>
	)
}
