import React from 'react'
import ArticleType from '../../../articlesData/articleType'
import './LanguageLevelBadge.scss'

type LanguageLevelBadgeProps = {
	level: ArticleType.LangLevel
}

// Уровень и название уровня знания английского языка
export function LanguageLevelBadge(props: LanguageLevelBadgeProps) {
	const { level } = props

	const levelName = ArticleType.LangLevelName[level]

	return (
		<div className="language-level-badge">
			<p className="language-level-badge__header">{level}</p>
			<p className="language-level-badge__pill">{levelName}</p>
		</div>
	)
}
