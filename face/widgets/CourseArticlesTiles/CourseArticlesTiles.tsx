import React from 'react'
import ArticleTile from '../../shared/components/articles/ArticleTile/ArticleTile'
import { TilesWrapper } from '../../shared/components/articles/TilesWrapper/TilesWrapper'

export function CourseArticlesTiles() {
	return (
		<TilesWrapper>
			<ArticleTile tile={{ type: 'welcome', url: '/' }} key={1} />
			<ArticleTile
				tile={{ type: 'level', level: 'a1', name: 'beginner', url: '/' }}
				key={2}
			/>
			<ArticleTile
				tile={{
					type: 'article',
					top: 'Глава 1',
					header: 'Личные местоимения',
					description:
						'Кратко рассмотрено для чего перед каждым существительным нужно ставить определитель и разберём неопределённый артикль a/an.',
					url: '/',
				}}
				key={3}
			/>
			<ArticleTile
				tile={{
					type: 'article',
					header: 'Прошедшее время в to be',
					description:
						'Уточняют кому принадлежит персонаж или предмет. Одни из самых частоиспользуемых местоимений в английском языке.',
					url: '/',
				}}
				key={4}
			/>
			<ArticleTile
				tile={{
					type: 'media',
					url: '/',
				}}
				key={5}
			/>
		</TilesWrapper>
	)
}
