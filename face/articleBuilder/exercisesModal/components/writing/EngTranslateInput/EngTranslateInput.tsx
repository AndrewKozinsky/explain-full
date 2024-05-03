import cn from 'classnames'
import React, { useRef } from 'react'
import { ExercisesManagerTypes } from '../../../logic/exercisesManagerTypes'
import { useExercisesModalStore } from '../../../store/store'
import s from './EngTranslateInput.module.scss'
import { onEnterKeyDown } from './fn/getOnEnterKeyDown'
import { useGetOnInput } from './fn/onKeyDown'
import { useSetFocusToInput } from './fn/setFocusToInput'
import AnalysisStatus = ExercisesManagerTypes.AnalysisStatus

// Поле для ввода перевода русского предложения
function EngTranslateInput() {
	const { analysis } = useExercisesModalStore().store
	const textareaRef = useRef<null | HTMLTextAreaElement>(null)

	useSetFocusToInput(textareaRef)

	let additionalTextClass = ''
	if (analysis.status === AnalysisStatus.visible) {
		additionalTextClass = analysis.isTranslateCorrect ? s.greenText : s.redText
	}

	return (
		<textarea
			className={cn(s.textarea, additionalTextClass)}
			placeholder="Перевод..."
			onInput={useGetOnInput}
			autoFocus
			onKeyDown={onEnterKeyDown}
			ref={textareaRef}
		/>
	)
}

export default EngTranslateInput
