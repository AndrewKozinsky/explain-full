import React from 'react'
import Button from '../../../../../ui/buttons/Button/Button'
import { useGetButtonText, useGetOnButtonClick, useSetEnterKeyHandler } from './fn/button'

function BottomButton() {
	const buttonText = useGetButtonText()
	const onButtonClick = useGetOnButtonClick()
	useSetEnterKeyHandler()

	return <Button text={buttonText} onClick={onButtonClick} />
}

export default BottomButton
