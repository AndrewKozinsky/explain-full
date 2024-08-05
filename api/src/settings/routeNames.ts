export const RouteNames = {
	AI: {
		value: 'ai',
	},
	STORIES: {
		value: 'stories',
		TEXT_ID(textId: string) {
			return {
				value: textId,
				full: 'stories/' + textId,
			}
		},
	},
}

export default RouteNames
