import React from 'react'
import Button from '../../../../ui/buttons/Button/Button'
import { ExercisesManagerTypes } from '../../logic/exercisesManagerTypes'
import { useExercisesModalStore } from '../../store/store'
import BottomButton from '../common/BottomButton/BottomButton'
import { useIsShownResultInOralExercise } from '../common/commonFn'
import Dictionary from '../common/Dictionary/Dictionary'
import EngTranslateInput from '../writing/EngTranslateInput/EngTranslateInput'
import RightEngTranslate from '../oral/RightEngTranslate/RightEngTranslate'
import RusExercise from '../common/RusExercise/RusExercise'
import './ExerciseContent.scss'

function ExerciseContent() {
	const exercise = useExercisesModalStore().store.currentExercise

	return exercise.type === ExercisesManagerTypes.ExerciseType.write ? (
		<WritingExerciseContent />
	) : (
		<OralExerciseContent />
	)
}

export default ExerciseContent

function WritingExerciseContent() {
	return (
		<div className="exercise-content">
			<div className="exercise-content__top">
				<RusExercise />
				<EngTranslateInput />
			</div>
			<Dictionary />
			<BottomButton />
		</div>
	)
}

function OralExerciseContent() {
	const isShownResultInOralExercise = useIsShownResultInOralExercise()

	return (
		<div className="exercise-content">
			<div className="exercise-content__top">
				<RusExercise />
				{isShownResultInOralExercise && <RightEngTranslate />}
			</div>
			{!isShownResultInOralExercise && <Dictionary />}
			<BottomButton />
		</div>
	)
}
