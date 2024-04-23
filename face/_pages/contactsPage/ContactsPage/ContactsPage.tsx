import React from 'react'
import { BreadCrumbs } from '../../../ui/pageRelated/BreadCrumbs/BreadCrumbs'
import { PageContentWrapper } from '../../../ui/pageRelated/PageContentWrapper/PageContentWrapper'
import { PageHeader } from '../../../ui/pageRelated/PageHeader/PageHeader'
import { CourseArticlesTiles } from '../tiles/CourseArticlesTiles/CourseArticlesTiles'

/** Страница контактов */
function ContactsPage() {
	return (
		<PageContentWrapper>
			<BreadCrumbs />
			<PageHeader>Контакты</PageHeader>
			<p>По всем вопросам обращайтесь в Телеграм @AndrewKozinsky</p>
		</PageContentWrapper>
	)
}

export default ContactsPage
