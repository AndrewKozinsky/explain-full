import ArticleType from '../../../articlesData/articleType'
import { ExercisesManagerTypes } from './exercisesManagerTypes'

export class ExerciseChecker {
	async check(exercise: ExercisesManagerTypes.Exercise) {
		const correctTranslations = this.getCorrectTranslations(exercise)

		let firstCorrectTranslationAnalysis: ArticleType.Content = []
		if (correctTranslations.length && correctTranslations[0].analysis) {
			firstCorrectTranslationAnalysis = correctTranslations[0].analysis
		}

		if (exercise.type === ExercisesManagerTypes.ExerciseType.write) {
			// Если никакой перевод не написали, то помечать такое упражнение проваленным.
			if (!exercise.userTranslate) {
				const analysis: ExercisesManagerTypes.VisibleAnalysis = {
					status: ExercisesManagerTypes.AnalysisStatus.visible,
					isTranslateCorrect: false,
					correctTranslations,
					translateAnalysis: firstCorrectTranslationAnalysis,
				}

				return analysis
			}
		}

		// В остальных случаях упражнение является голосовым и нужно просто вернуть правильный ответ
		// потому что ученик ничего не вводит.
		const analysis: ExercisesManagerTypes.VisibleAnalysis = {
			status: ExercisesManagerTypes.AnalysisStatus.visible,
			isTranslateCorrect: true, // Значение не важно
			correctTranslations,
			translateAnalysis: firstCorrectTranslationAnalysis,
		}

		return analysis
	}

	getCorrectTranslations(exercise: ExercisesManagerTypes.Exercise) {
		return exercise.engSentences.filter((engSentence) => {
			return engSentence.isCorrect
		})
	}
}
