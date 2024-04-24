// import React from 'react'
// import Tabs from '../../../../../../ui/Tabs/Tabs'
// import ArticleBuilder from '../../../../ArticleBuilder/ArticleBuilder'
// import { exercisesManager } from '../../../common/exercisesManager'
// import { WriteExercises } from '../../../zustand/exercisesStoreTypes'
// import AnalysisWrapper from '../../common/AnalysisWrapper/AnalysisWrapper'
// import { useGetSimilarEngSentenceByUserTranslate } from '../common/getSimilarEngSentenceByTranslate'
// import { useGetCorrectEngSentenceTexts, useSetRightVariantsTabIfNecessary } from './fn/exercises'
// import { useGetNavConfig } from './fn/getNavConfig'
// import s from './Analysis.module.scss'

/*function Analysis() {
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise

	return (
		<AnalysisWrapper extraClass={s.wrapper}>
			{exercise.engSentences.length === 0 ? <NoEngSentences /> : <AnalysisContent />}
		</AnalysisWrapper>
	)
}*/

// export default Analysis

// Содержимое если нет вариантов перевода русского предложения.
// Скорее всего так не будет, потому что ученик не сможет пройти упражнение, но учитывать такой вариант нужно.
/*function NoEngSentences() {
	return <p className={s.paragraph}>Вариантов перевода нет.</p>
}*/

/*function AnalysisContent() {
	useSetRightVariantsTabIfNecessary()

	return (
		<>
			<Tabs items={useGetNavConfig()} />
			<div className={s.analysisContent}>
				<AnalysisTabContent />
				<RightVariantsTabContent />
			</div>
		</>
	)
}*/

/*function AnalysisTabContent() {
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise
	const similarEngSentence = useGetSimilarEngSentenceByUserTranslate()

	if (exercise.analysisTab !== 'analysis') {
		return null
	}

	if (!similarEngSentence || !similarEngSentence.analysis) {
		return (
			<p className={s.paragraph}>
				<strong className={s.bold}>Программе не известен такой вариант перевода.</strong>{' '}
				Возможно он правильный.
			</p>
		)
	}

	return <ArticleBuilder articleContent={similarEngSentence.analysis} />
}*/

/*function RightVariantsTabContent() {
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise
	const correctEngSentenceTexts = useGetCorrectEngSentenceTexts()

	if (exercise.analysisTab !== 'rightVariants') {
		return null
	}

	return (
		<div className={s.correctSentencesWrapper}>
			{correctEngSentenceTexts.map((text) => {
				return (
					<p className={s.correctEngSentence} key={text}>
						{text}
					</p>
				)
			})}
		</div>
	)
}*/
