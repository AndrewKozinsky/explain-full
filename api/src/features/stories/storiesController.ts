import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'
import RouteNames from '../../settings/routeNames'
import { sampleText2 } from './materials/sample-2/sample-2'
import { StoryConfigT } from './materials/storyTypes'

@Controller(RouteNames.STORIES.value)
export class StoriesController {
	// Получение текста по идентификатору
	// @UseGuards(CheckAdminAuthGuard)
	@HttpCode(HttpStatus.OK)
	@Get(':id')
	getText(): StoryConfigT.Story {
		return sampleText2
	}
}
