import { Module } from '@nestjs/common'
import { TextsController } from './texts.controller'

@Module({
	controllers: [TextsController],
})
export class TextsModule {}
