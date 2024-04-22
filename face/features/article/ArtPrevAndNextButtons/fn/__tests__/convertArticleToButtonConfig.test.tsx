import { PrevAndNextButtonConfig } from '../../../../../shared/components/articles/PrevAndNextButtons/PrevAndNextButtons'
import ArticleType from '../../../../../shared/articlesData/articleType'
import { convertArticleToButtonConfig } from '../getPrevAndNextButtonsConfig'

describe('convertArticleToButtonConfig function', () => {
	it('should return undefined if null was passed', () => {
		expect(convertArticleToButtonConfig(null)).toBeUndefined()
	})

	it('should convert article data with type ArticleType.ArtArticle to PrevOrNextButton config data', () => {
		const artArticle: ArticleType.ArtArticle = {
			type: ArticleType.ArtType.article,
			meta: {
				number: 4,
				slug: 'personal-pronouns',
				articleName: 'Личные местоимения',
				articleDescription: 'Личные местоимения в английском языке.',
			},
			chapterNum: 'my chapterNum',
			content: [],
		}

		const expectedPrevOrNextButtonConfig: PrevAndNextButtonConfig = {
			topText: 'my chapterNum',
			name: 'Личные местоимения',
			description: 'Личные местоимения в английском языке.',
			href: '/course/personal-pronouns',
		}

		const result = convertArticleToButtonConfig(artArticle)

		expect(result).toEqual(expectedPrevOrNextButtonConfig)
	})

	it('should convert article data with type ArticleType.ArtLevel to PrevOrNextButton config data', () => {
		const levelArticle: ArticleType.ArtLevel = {
			type: ArticleType.ArtType.level,
			level: 'a1' as any,
			meta: {
				number: 2,
				slug: 'level',
				articleName: 'Уровень A1',
				articleDescription: 'Добро пожаловать на курс',
			},
		}

		const expectedPrevOrNextButtonConfig: PrevAndNextButtonConfig = {
			name: 'Уровень A1',
			description: 'Добро пожаловать на курс',
			href: '/course/level',
		}

		const result = convertArticleToButtonConfig(levelArticle)

		expect(result).toEqual(expectedPrevOrNextButtonConfig)
	})
})
