import ApiRouteNames from '../../сonsts/apiRouteNames'
import api from '../http'
import { createAdminTokenString } from '../utils'
import TextsApiTypes from './textsApiTypes'

// Запросы к методам работы с искусственным интеллектом
const textsRequests = {
	// Получение текста с переданным идентификатором
	getText(textId: number | string) {
		return api.get<TextsApiTypes.GetText>(ApiRouteNames.TEXTS.TEXT_ID(textId).full, {
			headers: {
				authorization: createAdminTokenString(),
			},
		})
	},
}

export default textsRequests
