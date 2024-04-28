'use client'

import React from 'react'
import ArticleType from '../../../articlesData/articleType'
import { ModalIcon } from '../../../ui/icons/ModalIcon/ModalIcon'
import Modal from '../../../ui/Modal/Modal'
import { useGetClickOnBlock } from './fn/clickOnBlock'
import { getWords } from './fn/getWords'
import './LearnByHeartButton.scss'

type ExercisesProps = {
	article: null | ArticleType.Art
}

// Кнопка перехода к модальному окну со списком слов для заучивания главы
function LearnByHeartButton(props: ExercisesProps) {
	const { article } = props

	if (!article || article.type !== ArticleType.ArtType.article) {
		return null
	}

	const words = getWords(article)
	if (!words.length) return null

	return (
		<>
			<ButtonWrapper article={article}>
				<div className="learn-by-heart-button__bg" />
				<div className="learn-by-heart-button__content">
					<h2 className="learn-by-heart-button__header">Слова следующей главы</h2>
					<p className="learn-by-heart-button__header-info">
						Выучите, чтобы без подсказок переводить предложения в следующей главе.
					</p>
					<WordsParagraph words={words} />
				</div>
				<div className="learn-by-heart-button__divider" />
				<div className="learn-by-heart-button__modal-sign-wrapper">
					<ModalIcon />
				</div>
			</ButtonWrapper>
			<Modal header="Тренировка" isOpen close={() => {}}>
				<p>hello</p>
			</Modal>
		</>
	)
}

export default LearnByHeartButton

type ButtonWrapperProps = {
	article: ArticleType.ArtArticle
	children: React.ReactNode[]
}

// Кнопка открывающая модальное окно списка слов для заучивания
function ButtonWrapper(props: ButtonWrapperProps) {
	const { article, children } = props

	const blockClickHandler = useGetClickOnBlock(article)

	return (
		<button className="learn-by-heart-button" onClick={blockClickHandler}>
			{children}
		</button>
	)
}

type WordsTextProps = {
	words: string[]
}

// Абзац текста с примерами слов для заучивания
function WordsParagraph(props: WordsTextProps) {
	const { words } = props

	return (
		<p className="learn-by-heart-button__words">
			{words.map((word, i) => {
				return (
					<React.Fragment key={word}>
						<span>{word}</span>
						<span className="learn-by-heart-button__word-divider" />
					</React.Fragment>
				)
			})}
		</p>
	)
}
