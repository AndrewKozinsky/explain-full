import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { CheckAdminAuthGuard } from '../../infrastructure/guards/checkAdminAuth.guard'
import RouteNames from '../../settings/routeNames'
import gigaChat from '../../infrastructure/gigaChat'
import { AskAIInputModel } from './models/askAi.input.model'

@Controller(RouteNames.AI.value)
export class AiController {
	// Отправка вопроса ИИ и получение ответа.
	@UseGuards(CheckAdminAuthGuard)
	@Post()
	async askAI(@Body() body: AskAIInputModel) {
		return gigaChat.ask(body.question)
	}
}
