export const RouteNames = {
	AI: {
		value: 'ai',
	},
	TEXTS: {
		value: 'texts',
		TEXT_ID(textId: string) {
			return {
				value: textId,
				full: 'texts/' + textId,
			}
		},
	},
}

export default RouteNames
