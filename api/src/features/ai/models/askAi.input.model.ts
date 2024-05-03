import { IsString, MaxLength, MinLength } from 'class-validator'

export class AskAIInputModel {
	@IsString({ message: 'LoginOrEmail must be a string' })
	@MinLength(3, { message: 'LoginOrEmail is too short' })
	@MaxLength(100, { message: 'LoginOrEmail is too long' })
	question: string
}
