export namespace ArticleTileType {
	export type Tiles = WelcomeTile | LevelTile | ArticleTile | MediaTile

	// Карточка приветственной статьи
	export type WelcomeTile = {
		type: 'welcome'
		url: string
	}

	// Карточка начала нового уровня изучения языка
	export type LevelTile = {
		type: 'level'
		level: 'a1' | 'a2'
		name: 'beginner' | 'elementary'
		url: string
	}

	// Карточка статьи
	export type ArticleTile = {
		type: 'article'
		top?: string
		header: string
		description: string
		url: string
	}

	// Карточка с фильмами и книгами
	export type MediaTile = {
		type: 'media'
		url: string
	}
}
