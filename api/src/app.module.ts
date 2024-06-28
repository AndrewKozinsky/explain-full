import { Module } from '@nestjs/common'
import { AiModule } from './features/ai/ai.module'
import { TextsModule } from './features/texts/texts.module'

@Module({
	imports: [AiModule, TextsModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
