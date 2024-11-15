'use client'

import React from 'react'
import ArticleType from '../../../../articlesData/articleType'
import { BreadCrumbs } from '../../../../ui/pageRelated/BreadCrumbs/BreadCrumbs'
import { PageContentWrapper } from '../../../../ui/pageRelated/PageContentWrapper/PageContentWrapper'
import { PageHeader } from '../../../../ui/pageRelated/PageHeader/PageHeader'
import { extractNumFromStr } from '../../../../utils/number'
import ArticleArticleContent from '../ArticleArticleContent/ArticleArticleContent'
import { PageUrls } from '../../../../сonsts/pageUrls'
import s from './CourseArticlePage.module.scss'

type CourseLevelPageProps = {
	// Предыдущая статья относительно текущей
	prevArticle: ArticleType.Art | null
	// Текущая статья
	article: ArticleType.ArtArticle
	// Следующая статья относительно текущей
	nextArticle: ArticleType.Art | null
}

/** Страница главы в курса */
function CourseArticlePage(props: CourseLevelPageProps) {
	const { prevArticle, article, nextArticle } = props

	return (
		<PageContentWrapper>
			<BreadCrumbs items={[PageUrls.course]} />
			<Header article={article} />
			<ArticleArticleContent
				prevArticle={prevArticle}
				article={article}
				nextArticle={nextArticle}
			/>
		</PageContentWrapper>
	)
}

export default CourseArticlePage

type ChapterNumberProps = {
	article: ArticleType.ArtArticle
}

function Header(props: ChapterNumberProps) {
	const { caption, articleName } = props.article.meta
	const chapterNum = extractNumFromStr(caption)

	return (
		<PageHeader extraClass={s.generalWrapper}>
			{articleName}
			<span className={s.circle}>
				<span className={s.circleNum}>{chapterNum}</span>
			</span>
		</PageHeader>
	)
}
