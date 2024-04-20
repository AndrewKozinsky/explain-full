import { renderHook } from '@testing-library/react'
import { PrevAndNextButtonConfig } from '../../../../../shared/articlesData/articlesBackAndNextButtons/ArtBackAndNextButtons/PrevAndNextButtons'
import ArticleType from '../../../../../shared/articlesData/articleType'
import { useGetPrevAndNextButtonsConfig } from '../getPrevAndNextButtonsConfig'

describe('useGetPrevAndNextButtonsConfig function', () => {
	it('should return empty data if empty articles were passed', () => {
		const hookWrapper = () => useGetPrevAndNextButtonsConfig(null, null)
		const { result } = renderHook(hookWrapper)

		expect(result.current).toEqual({ prevBtnConfig: undefined, nextBtnConfig: undefined })
	})

	it('should take 2 articles and return object with PrevOrNextButtons config data', () => {
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

		const expectedPrevButtonConfig: PrevAndNextButtonConfig = {
			topText: 'my chapterNum',
			name: 'Личные местоимения',
			description: 'Личные местоимения в английском языке.',
			href: '/course/personal-pronouns',
		}

		const expectedNextButtonConfig: PrevAndNextButtonConfig = {
			name: 'Уровень A1',
			description: 'Добро пожаловать на курс',
			href: '/course/level',
		}

		const hookWrapper = () => useGetPrevAndNextButtonsConfig(artArticle, levelArticle)
		const { result } = renderHook(hookWrapper)

		expect(result.current).toEqual({
			prevBtnConfig: expectedPrevButtonConfig,
			nextBtnConfig: expectedNextButtonConfig,
		})
	})
})
