import StoryArtPage from '../../../_pages/storiesArtPage/general/StoryArtPage/StoryArtPage'
import storiesRequests from '../../../requests/texts/textsRequest'

type TextPageProps = {
	params: {
		// Название статьи в адресной строке
		storySlug: string
	}
}

// Универсальная страница учебника
export default async function Page(props: TextPageProps) {
	const { params } = props

	const storyResponse = await storiesRequests.getStory(params.storySlug)

	return <StoryArtPage text={storyResponse.data} />
}
