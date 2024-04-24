// import React, { useRef } from 'react'
// import cn from 'classnames'
// import { exercisesManager } from '../../../common/exercisesManager'
// import { WriteExercises } from '../../../zustand/exercisesStoreTypes'
// import { useSetFocusToInput } from '../WritingEx/fn/setFocusToInput'
// import { onEnterKeyDown } from './fn/getOnEnterKeyDown'
// import { useGetOnInput, useSetTextareaHeightOnMount } from './fn/onKeyDown'
// import s from './EngTranslateInput.module.scss'

// Поле для ввода перевода русского предложения
/*function EngTranslateInput() {
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise
	const textareaRef = useRef<null | HTMLTextAreaElement>(null)

	useSetFocusToInput(exercise, textareaRef)
	useSetTextareaHeightOnMount(textareaRef.current)

	return (
		<textarea
			value={exercise.userTranslate}
			className={cn(
				s.wrapper,
				exercise.isTranslateCorrect === true && s.greenText,
				exercise.isTranslateCorrect === false && s.redText
			)}
			placeholder="Перевод..."
			onInput={useGetOnInput()}
			autoFocus
			onKeyDown={onEnterKeyDown}
			ref={textareaRef}
		/>
	)
}*/

// export default EngTranslateInput
