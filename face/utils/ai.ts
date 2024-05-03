import path from 'path'

process.env.NODE_EXTRA_CA_CERTS = path.resolve(__dirname, '../public/certificates')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

type GetAccessTokenRes = {
	access_token: string
	expires_at: number
}

// УДАЛИ ФАЙЛ !!!!

/** Класс работы с искусственным интеллектом */
export class AI {
	// Client ID
	clientId = 'f16628a2-48db-4116-b49f-621e0b84a658'

	// Версия API. Значение GIGACHAT_API_PERS для физических лиц.
	scope = 'GIGACHAT_API_PERS'

	// Client Secret
	clientSecret = 'c3791704-62a5-4820-9509-c35b1b9631b5'

	// Authorization data (значение Client id и Client secret)
	authData =
		'ZjE2NjI4YTItNDhkYi00MTE2LWI0OWYtNjIxZTBiODRhNjU4OmMzNzkxNzA0LTYyYTUtNDgyMC05NTA5LWMzNWIxYjk2MzFiNQ=='

	// Токен доступа действующий 30 минут
	accessToken = ''

	async getAccessToken() {
		return new Promise((resolve, reject) => {
			fetch('https://ngw.devices.sberbank.ru:9443/api/v2/oauth', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					RqUID: this.clientId,
					Authorization: 'Basic ' + this.authData,
				},
				body: new URLSearchParams({
					scope: this.scope,
				}),
			})
				.then((res) => res.json())
				.then((data: GetAccessTokenRes) => {
					resolve(data.access_token)
				})
		})
	}

	async ack(question: string) {
		console.log(question)
	}
}

export const ai = new AI()
