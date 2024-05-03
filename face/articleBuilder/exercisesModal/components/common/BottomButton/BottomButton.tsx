import React from 'react'
import Button from '../../../../../ui/buttons/Button/Button'
import { exercisesLogic } from '../../../store/store'
import { useGetButtonText } from './fn/button'

function BottomButton() {
	const buttonText = useGetButtonText()

	return <Button text={buttonText} onClick={() => exercisesLogic.checkCurrentExercise()} />
}

export default BottomButton
