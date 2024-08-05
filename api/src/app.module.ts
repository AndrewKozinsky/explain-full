import { Module } from '@nestjs/common'
import { AiModule } from './features/ai/ai.module'
import { StoriesModule } from './features/stories/stories.module'

@Module({
	imports: [AiModule, StoriesModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
