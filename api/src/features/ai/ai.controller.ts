import { Body, Controller, Post } from '@nestjs/common'
import RouteNames from '../../settings/routeNames'
// import ai from '../../infrastructure/ai'
import { AskAIInputModel } from './models/askAi.input.model'

@Controller(RouteNames.AI.value)
export class AiController {
	// Отправка вопроса ИИ и получение ответа.
	@Post()
	async askAI(@Body() body: AskAIInputModel) {
		console.log(body.question)
		// const answer = await ai.ask(body.question)
		// return answer
		return body.question
	}
}
