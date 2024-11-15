import React, { useState } from 'react'
import ExercisesType from '../../../../../articlesData/exercisesType'
import Switcher from '../../../../../ui/Switcher/Switcher'
import ArticleBuilder from '../../../../ArticleBuilder/ArticleBuilder'
import { ExercisesManagerTypes } from '../../../logic/exercisesManagerTypes'
import { useExercisesModalStore } from '../../../store/store'
import AnalysisStatus = ExercisesManagerTypes.AnalysisStatus
import s from './Analysis.module.scss'

/** Анализ перевода введённого пользователем либо показ правильных вариантов */
function Analysis() {
	const { currentExercise: exercise } = useExercisesModalStore().store

	return exercise.userTranslate ? <AnalysisForTranslation /> : <CorrectTranslations />
}

export default Analysis

/** Список правильных вариантов русского предложения */
function CorrectTranslations() {
	const { analysis } = useExercisesModalStore().store

	if (analysis.status !== AnalysisStatus.visible) {
		return null
	}

	return <CorrectTranslationsList correctTranslations={analysis.correctTranslations} />
}

/** Разбор перевода данного пользователем */
function AnalysisForTranslation() {
	const { analysis } = useExercisesModalStore().store

	const [viewType, setViewType] = useState<'analysis' | 'correctVariants'>('analysis')

	if (analysis.status !== AnalysisStatus.visible) {
		return null
	}

	return (
		<div className={s.wrapper}>
			<Switcher
				orientation="horizontal"
				items={[
					{
						text: 'Разбор',
						isCurrent: viewType === 'analysis',
						onClick: () => {
							setViewType('analysis')
						},
					},
					{
						text: 'Варианты перевода',
						isCurrent: viewType === 'correctVariants',
						onClick: () => {
							setViewType('correctVariants')
						},
					},
				]}
			/>
			{viewType === 'correctVariants' && (
				<CorrectTranslationsList correctTranslations={analysis.correctTranslations} />
			)}
			{viewType === 'analysis' && analysis.translateAnalysis && (
				<ArticleBuilder articleContent={analysis.translateAnalysis} />
			)}
		</div>
	)
}

type CorrectTranslationsListProps = {
	correctTranslations: ExercisesType.EngSentence[]
}

/** Список правильных вариантов перевода */
function CorrectTranslationsList(props: CorrectTranslationsListProps) {
	const { correctTranslations } = props

	const engSentences: string[] = []

	correctTranslations.forEach((translation) => {
		translation.engSentences.forEach((tr) => {
			engSentences.push(tr)
		})
	})

	return (
		<div className={s.translationsList}>
			{engSentences.map((se, i) => (
				<p key={i}>{se}</p>
			))}
		</div>
	)
}
