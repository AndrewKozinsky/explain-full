import { Module } from '@nestjs/common'
import { AiModule } from './features/ai/ai.module'

@Module({
	imports: [AiModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
