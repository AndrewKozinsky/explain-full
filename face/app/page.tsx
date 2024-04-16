import { BreadCrumbs } from '../shared/components/BreadCrumbs/BreadCrumbs'
import { PageHeader } from '../shared/components/PageHeader/PageHeader'
import { PageUrls } from '../shared/сonsts/pageUrls'

export default function RootPage() {
	return (
		<main>
			<BreadCrumbs items={[PageUrls.contacts, PageUrls.course]} />
			<PageHeader>Курс «Понимая английский»</PageHeader>
		</main>
	)
}
