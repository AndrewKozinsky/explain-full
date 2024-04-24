// import React from 'react'
import cn from 'classnames'
import ArticleType from '../../../articlesData/articleType'
import ArrowText from '../ArrowText/ArrowText'
import Text from '../Text/Text'
import './Paragraph.scss'

type HeaderProps = {
	config: ArticleType.Paragraph
}

function Paragraph(props: HeaderProps) {
	const { config } = props

	const classes = [
		'art-paragraph',
		config.textSize && 'art-paragraph--size-' + config.textSize,
		// Такого свойства нет.
		// config.textColor && 'art-paragraph--color-' + config.textColor,
		config.offset && 'art-paragraph--offset',
	]

	return (
		<p className={cn(classes)}>
			<ParagraphChildren textConfigs={config.children} />
		</p>
	)
}

export default Paragraph

type ParagraphChildrenProps = {
	textConfigs: ArticleType.TextElem[]
}

function ParagraphChildren(props: ParagraphChildrenProps) {
	const { textConfigs } = props

	return (
		<>
			{textConfigs.map((config, i) => {
				if (config.type === 'text') {
					return <Text config={config} key={i} />
				} else if (config.type === 'arrow') {
					return <ArrowText key={i} />
				} else {
					return null
				}
			})}
		</>
	)
}
