import * as path from 'path'

process.env.NODE_EXTRA_CA_CERTS = path.resolve(__dirname, './certificates')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

/** Класс работы с искусственным интеллектом */
class AI {
	// Client ID
	clientId = 'f16628a2-48db-4116-b49f-621e0b84a658'

	// Client Secret
	clientSecret = 'c3791704-62a5-4820-9509-c35b1b9631b5'

	// Authorization data (значение Client id и Client secret)
	authData =
		'ZjE2NjI4YTItNDhkYi00MTE2LWI0OWYtNjIxZTBiODRhNjU4OmMzNzkxNzA0LTYyYTUtNDgyMC05NTA5LWMzNWIxYjk2MzFiNQ=='

	// Токен доступа действующий 30 минут
	accessToken = ''

	/**
	 * Запрос получающий новый токен доступа и сохраняющий в this.accessToken()
	 */
	async updateAccessToken() {
		return new Promise((resolve, reject) => {
			fetch('https://ngw.devices.sberbank.ru:9443/api/v2/oauth', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					RqUID: this.clientId,
					Authorization: 'Basic ' + this.authData,
				},
				body: new URLSearchParams({
					scope: 'GIGACHAT_API_PERS',
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					this.accessToken = data.access_token

					resolve(null)
				})
		})
	}

	/**
	 * Отправляет ИИ вопрос на который нужно получить ответ с проверкой на протухший токен доступа и разбором результата
	 * @param question — текст вопроса
	 */
	async ask(question: string): Promise<string> {
		const requestResult: any = await this.makeAskRequest(question)

		// Если не авторизован...
		if (requestResult.status === 401) {
			// сделать запрос на обновление токена доступа...
			await this.updateAccessToken()
			// и снова попробовать сделать запрос.
			return this.ask(question)
		}

		return requestResult.choices[0].message.content
	}

	/**
	 * Отправляет ИИ вопрос на который нужно получить ответ.
	 * @param question — текст вопроса
	 */
	async makeAskRequest(question: string) {
		const requestBody = {
			model: 'GigaChat',
			messages: [
				{
					role: 'user',
					content: question,
				},
			],
			temperature: 1,
			top_p: 0.1,
			n: 1,
			stream: false,
			max_tokens: 512,
			repetition_penalty: 1,
		}

		return new Promise((resolve, reject) => {
			fetch('https://gigachat.devices.sberbank.ru/api/v1/chat/completions', {
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + this.accessToken,
				},
				body: JSON.stringify(requestBody),
			})
				.then((res) => res.json())
				.then((data) => {
					resolve(data)
				})
		})
	}
}

const ai = new AI()
export default ai
