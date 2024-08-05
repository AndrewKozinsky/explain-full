import { Module } from '@nestjs/common'
import { StoriesController } from './storiesController'

@Module({
	controllers: [StoriesController],
})
export class StoriesModule {}
