import React from 'react'
import ArticleTile from '../../shared/components/articles/ArticleTile/ArticleTile'
import { TilesWrapper } from '../../shared/components/articles/TilesWrapper/TilesWrapper'
import { useGetTilesData } from './fn/getTilesData'

export function CourseArticlesTiles() {
	const tilesArr = useGetTilesData()

	return (
		<TilesWrapper>
			{tilesArr.map((tile) => {
				const url = tile.url

				if (tile.type === 'welcome') {
					return <ArticleTile tile={tile} key={url} />
				} else if (tile.type === 'level') {
					return <ArticleTile tile={tile} key={url} />
				} else if (tile.type === 'media') {
					return <ArticleTile tile={tile} key={url} />
				}

				return <ArticleTile tile={tile} key={url} />
			})}
		</TilesWrapper>
	)
}