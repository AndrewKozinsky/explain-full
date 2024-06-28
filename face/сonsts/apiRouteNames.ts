export const ApiRouteNames = {
	AI: {
		value: 'ai',
	},
	TEXTS: {
		value: 'texts',
		TEXT_ID(textId: number | string) {
			return {
				value: textId,
				full: 'texts/' + textId,
			}
		},
	},
}

export default ApiRouteNames
