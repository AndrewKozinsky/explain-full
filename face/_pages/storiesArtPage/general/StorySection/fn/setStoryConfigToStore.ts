import { useEffect } from 'react'
import { StoryConfigT } from '../../../../../requests/texts/textsApiTypes'
import { useStoryStore } from '../../../store/store'

export function setStoryConfigToStore(storyConfig: StoryConfigT.Story) {
	useEffect(function () {
		useStoryStore.setState({ storyConfig })
	}, [])
}
