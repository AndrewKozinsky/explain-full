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
			<div>
				<p>4 мая 2024 — добавлено модальное окно прохождения упражнений.</p>
				<p>13 мая 2024 — добавлена 3 статья «Прилагательные».</p>
				<p>14 мая 2024 — добавлена 4 статья «Неопределённый артикль a».</p>
				<p>14 мая 2024 — добавлена 5 статья «Множественное число существительных».</p>
				<p>14 мая 2024 — добавлена 6 статья «Вопрос и отрицание в предложениях с be».</p>
				<p>14 мая 2024 — добавлена 7 статья «Указательные местоимения».</p>
				<p>14 мая 2024 — добавлена 8 статья «Притяжательные местоимения».</p>
				<p>16 мая 2024 — добавлена 9 глава «Притяжательный падеж».</p>
				<p>16 мая 2024 — добавлена 10 глава «Определённый артикль the».</p>
				<p>17 мая 2024 — добавлена 11 глава «Степени сравнения прилагательных».</p>
				<p>18 мая 2024 — добавлена 12 глава «Сокращённая запись be и will».</p>
				<p>18 мая 2024 — добавлена 13 глава «Утвердительные предложения в Simple».</p>
				<p>23 мая 2024 — добавлена 14 глава «Отличие be от Simple».</p>
				<p>23 мая 2024 — добавлена 15 глава «Вопрос и отрицание в Simple».</p>
			</div>
		</PageContentWrapper>
	)
}

export default HistoryPage
