import React from 'react'
import { BreadCrumbs } from '../../../ui/pageRelated/BreadCrumbs/BreadCrumbs'
import { PageContentWrapper } from '../../../ui/pageRelated/PageContentWrapper/PageContentWrapper'
import { PageHeader } from '../../../ui/pageRelated/PageHeader/PageHeader'

/** Страница истории изменений */
function HistoryPage() {
	return (
		<PageContentWrapper>
			<BreadCrumbs />
			<PageHeader>История обновлений</PageHeader>
			<p>4 мая 2024 — добавлено модальное окно прохождения упражнений.</p>
		</PageContentWrapper>
	)
}

export default HistoryPage
