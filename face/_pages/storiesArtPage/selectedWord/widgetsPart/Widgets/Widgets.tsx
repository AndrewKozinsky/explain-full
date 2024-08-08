import React from 'react'
import Widget from '../Widget/Widget'
import WidgetContentArrow from '../WidgetContentArrow/WidgetContentArrow'
import WidgetContentParagraph from '../WidgetContentParagraph/WidgetContentParagraph'
import WidgetContentPhrase from '../WidgetContentPhrase/WidgetContentPhrase'
import './Widgets.scss'

function Widgets() {
	return (
		<div className="grammar-widgets">
			<Widget title="Сокращённая форма" color="gray">
				<WidgetContentPhrase>
					he’s
					<WidgetContentArrow />
					he is
				</WidgetContentPhrase>
			</Widget>
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
			<Widget title="Часть устойчивого выражения" color="green">
				<WidgetContentPhrase>
					I wish to hell
					<WidgetContentArrow />Я бы очень хотел
				</WidgetContentPhrase>
				<WidgetContentParagraph>
					Дословно переводится «Я желаю до ада». Обозначает сильное желание или стремления
					к чему-то, что говорящий не имеет.
				</WidgetContentParagraph>
				<WidgetContentParagraph>
					Фраза используется для выражения разочарования, сожаления или желания, чтобы у
					говорящего были какие-то возможности, качества или вещи, которых у него сейчас
					нет.
				</WidgetContentParagraph>
			</Widget>
		</div>
	)
}

export default Widgets
