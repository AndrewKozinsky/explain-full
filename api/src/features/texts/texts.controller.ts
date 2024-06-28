import { Controller, Get, HttpCode, HttpStatus, UseGuards } from '@nestjs/common'
import { CheckAdminAuthGuard } from '../../infrastructure/guards/checkAdminAuth.guard'
import RouteNames from '../../settings/routeNames'
import { sampleText2 } from './materials/sample-2/sample-2'
import { TextType } from './materials/types'

@Controller(RouteNames.TEXTS.value)
export class TextsController {
	// Получение текста по идентификатору
	// @UseGuards(CheckAdminAuthGuard)
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	getText(): TextType {
		return sampleText2
	}
}
