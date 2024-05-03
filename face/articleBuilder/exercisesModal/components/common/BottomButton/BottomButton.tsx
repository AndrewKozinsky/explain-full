import React from 'react'
import Button from '../../../../../ui/buttons/Button/Button'
import { useGetButtonText } from './fn/button'

function BottomButton() {
	const buttonText = useGetButtonText()

	return <Button text={buttonText} />
}

export default BottomButton
