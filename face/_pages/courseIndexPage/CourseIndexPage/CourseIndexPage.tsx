import React from 'react'
import { BreadCrumbs } from '../../../ui/pageRelated/BreadCrumbs/BreadCrumbs'
import { PageContentWrapper } from '../../../ui/pageRelated/PageContentWrapper/PageContentWrapper'
import { PageHeader } from '../../../ui/pageRelated/PageHeader/PageHeader'
import { CourseArticlesTiles } from '../tiles/CourseArticlesTiles/CourseArticlesTiles'

/** Страница с ссылками-плитками на главы курса */
function CourseIndexPage() {
	return (
		<PageContentWrapper>
			<BreadCrumbs />
			<PageHeader>Курс «Понимая английский»</PageHeader>
			<CourseArticlesTiles />
		</PageContentWrapper>
	)
}

export default CourseIndexPage
