import React from 'react'
import ArticleType from '../../../../articlesData/articleType'
import './LanguageLevelBadge.scss'

type LanguageLevelBadgeProps = {
	level: ArticleType.LangLevel
}

// Уровень и название уровня знания английского языка
export function LanguageLevelBadge(props: LanguageLevelBadgeProps) {
	const { level } = props

	const levelName = ArticleType.LangLevelName[level]

	return (
		<div className="language-level-badge" data-testid="lang-level-badge">
			<p className="language-level-badge__header" data-testid="lang-level-badge__level">
				{level}
			</p>
			<p className="language-level-badge__pill" data-testid="lang-level-badge__name">
				{levelName}
			</p>
		</div>
	)
}