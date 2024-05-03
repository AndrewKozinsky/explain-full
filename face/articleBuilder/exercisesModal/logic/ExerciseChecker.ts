import ArticleType from '../../../articlesData/articleType'
import ExercisesType from '../../../articlesData/exercisesType'
import { createAdminTokenString } from '../../../utils/strings'
import { ExercisesManagerTypes } from './exercisesManagerTypes'

export class ExerciseChecker {
	async checkInLocalData(
		exercise: ExercisesManagerTypes.Exercise,
	): Promise<undefined | ExercisesManagerTypes.Analysis> {
		// Массив правильных ответов на это упражнение
		const correctTranslations = this.getCorrectTranslations(exercise)

		// Анализ первого правильного упражнения
		let firstCorrectTranslationAnalysis: ArticleType.Content = []
		if (correctTranslations.length && correctTranslations[0].analysis) {
			firstCorrectTranslationAnalysis = correctTranslations[0].analysis
		}

		// Если упражнение голосовое нужно просто вернуть правильный ответ потому что ученик ничего не вводит.
		if (exercise.type === ExercisesManagerTypes.ExerciseType.oral) {
			return {
				status: ExercisesManagerTypes.AnalysisStatus.visible,
				isTranslateCorrect: true, // Значение не важно
				correctTranslations,
				translateAnalysis: firstCorrectTranslationAnalysis,
			}
		}

		// Если никакой перевод не написали, то помечать такое упражнение проваленным.
		if (!exercise.userTranslate) {
			return {
				status: ExercisesManagerTypes.AnalysisStatus.visible,
				isTranslateCorrect: false,
				correctTranslations,
				translateAnalysis: firstCorrectTranslationAnalysis,
			}
		}

		// Найти в данных перевод похожий на тот, что написал ученик...
		const similarTranslation = this.findSimilarTranslation(
			exercise.engSentences,
			exercise.userTranslate,
		)

		if (similarTranslation) {
			return {
				status: ExercisesManagerTypes.AnalysisStatus.visible,
				isTranslateCorrect: similarTranslation.isCorrect,
				correctTranslations,
				translateAnalysis: similarTranslation.analysis!,
			}
		}
	}

	async checkByAI(
		exercise: ExercisesManagerTypes.Exercise,
	): Promise<ExercisesManagerTypes.Analysis> {
		// Массив правильных ответов на это упражнение
		const correctTranslations = this.getCorrectTranslations(exercise)

		// Разбора похожего варианта перевода нет, поэтому сделать запрос к ИИ на разбор
		const aiAnalysis = await this.makeRequestToAI(exercise)

		return {
			status: ExercisesManagerTypes.AnalysisStatus.visible,
			isTranslateCorrect: aiAnalysis.correct,
			correctTranslations,
			translateAnalysis: [
				{ type: 'paragraph', children: [{ type: 'text', text: aiAnalysis.text }] },
			],
		}
	}

	/**
	 * Получает упражнение и вычленяет правильные варианты переводов
	 * @param exercise — объект упражнения
	 */
	private getCorrectTranslations(exercise: ExercisesManagerTypes.Exercise) {
		return exercise.engSentences.filter((engSentence) => {
			return engSentence.isCorrect
		})
	}

	private findSimilarTranslation(
		translations: ExercisesType.EngSentence[],
		userTranslation: string,
	) {
		const userDryTranslation = this.drySentence(userTranslation)

		return translations.find((translation) => {
			const foundSentences = translation.engSentences.find((engSentence) => {
				return this.drySentence(engSentence) === userDryTranslation
			})

			return !!foundSentences
		})
	}

	/**
	 * Получает предложение и приводит его к «высушенному» виду чтобы можно было сравнивать с похожими предложениями.
	 * Например буквы приводятся к нижнему регистру, убираются знаки препинания, сокращения заменяются на полные варианты.
	 * @param sentence — предложение, которое нужно высушить
	 */
	drySentence(sentence: string) {
		// Обрезать пробелы с двух сторон
		let dryText = sentence.trim()

		// Удалить знаки препинания
		dryText = dryText.replace(/[\.,!?¯_一ー−‐‑]/g, '')

		// Привести апострофы к единому виду
		dryText = dryText.replace(/[`′᾿'ˈꞌ]/g, "'")

		// Привести буквы к нижнему регистру
		dryText = dryText.toLowerCase()

		// Привести сокращения к единому виду
		dryText = dryText.replace(/don't/g, 'do not')
		dryText = dryText.replace(/doesn't/g, 'does not')
		dryText = dryText.replace(/didn't/g, 'did not')
		// dryText = dryText.replace(/aren't/g, 'are not')
		dryText = dryText.replace(/can't/g, 'cannot')
		dryText = dryText.replace(/couldn't/g, 'could not')
		dryText = dryText.replace(/hadn't/g, 'had not')
		dryText = dryText.replace(/hasn't/g, 'has not')
		dryText = dryText.replace(/haven't/g, 'have not')
		// dryText = dryText.replace(/i'm/g, 'i am')
		dryText = dryText.replace(/i've/g, 'i have')
		// dryText = dryText.replace(/isn't/g, 'is not')
		// dryText = dryText.replace(/let's/g, 'let us')
		// dryText = dryText.replace(/mightn't/g, 'might not')
		dryText = dryText.replace(/mustn't/g, 'must not')
		// dryText = dryText.replace(/shan't/g, 'shall not')
		dryText = dryText.replace(/shouldn't/g, 'should not')
		// dryText = dryText.replace(/they're/g, 'they are')
		// dryText = dryText.replace(/they've/g, 'they have')
		// dryText = dryText.replace(/we're/g, 'we are')
		// dryText = dryText.replace(/we've/g, 'we have')
		dryText = dryText.replace(/weren't/g, 'were not')
		// dryText = dryText.replace(/what're/g, 'what are')
		// dryText = dryText.replace(/what've/g, 'what have')
		// dryText = dryText.replace(/who're/g, 'who are')
		// dryText = dryText.replace(/who've/g, 'who have')
		dryText = dryText.replace(/won't/g, 'will not')
		// dryText = dryText.replace(/wouldn't/g, 'would not')
		dryText = dryText.replace(/you're/g, 'you are')
		dryText = dryText.replace(/you've/g, 'you have')

		return dryText
	}

	private async makeRequestToAI(
		exercise: ExercisesManagerTypes.Exercise,
	): Promise<{ correct: boolean; text: string }> {
		const question = `Предложение "${exercise.rusSentence}" переведено "${exercise.userTranslate}". Проверь грамматическую правильность. Ответ дай в формате JSON вида:
{
	"correct": true,
	"analysis": 'Your analysis'
}
В свойстве isCorrect должно быть значение true если английское предложение переведено правильно на русский или false если не правильно. В свойстве analysis напиши что сделано неправильно и как исправить если были сделаны ошибки. Или похвали если замечаний нет.
`

		return new Promise((resolve, reject) => {
			fetch('/api/ai', {
				method: 'POST',
				headers: {
					authorization: createAdminTokenString(),
				},
				body: JSON.stringify({
					question,
				}),
			})
				.then((res) => res.json())
				.then((data: string) => {
					console.log(data)

					resolve(data as any)
				})
		})
	}
}
