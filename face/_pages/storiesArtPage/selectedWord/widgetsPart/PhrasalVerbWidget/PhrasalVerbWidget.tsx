import React from 'react'
import Widget from '../content/Widget/Widget'
import WidgetContentArrow from '../content/WidgetContentArrow/WidgetContentArrow'
import WidgetContentParagraph from '../content/WidgetContentParagraph/WidgetContentParagraph'
import WidgetContentPhrase from '../content/WidgetContentPhrase/WidgetContentPhrase'
import { useGetAbbreviatedFormData } from './fn/showAbbreviatedFormWidget'

function PhrasalVerbWidget() {
	// const abbreviatedForm = useGetAbbreviatedFormData()
	// if (!abbreviatedForm) return null

	return null
	return (
		<Widget title="Часть Фразового глагола" color="orange">
			<WidgetContentParagraph>
				Предлог, добавленный к глаголу, меняет его значение.
			</WidgetContentParagraph>
			<WidgetContentPhrase>
				go
				<WidgetContentArrow />
				идти
			</WidgetContentPhrase>
			<WidgetContentPhrase>
				on
				<WidgetContentArrow />
				на
			</WidgetContentPhrase>
			<WidgetContentPhrase>
				go on
				<WidgetContentArrow />
				продолжать
			</WidgetContentPhrase>
		</Widget>
	)
}

export default PhrasalVerbWidget
