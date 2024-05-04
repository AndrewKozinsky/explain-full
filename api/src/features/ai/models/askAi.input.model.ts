import { IsString, MaxLength, MinLength } from 'class-validator'

export class AskAIInputModel {
	@IsString({ message: 'Question must be a string' })
	@MinLength(3, { message: 'Question is too short' })
	@MaxLength(600, { message: 'Question is too long' })
	question: string
}
