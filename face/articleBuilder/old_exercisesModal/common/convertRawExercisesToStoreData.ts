// import { shuffleArray } from '../../../../parts/utils/array'
// import ExercisesType from '../../../articlesData/exercisesType'
// import { SpeakExercises, WriteExercises } from '../zustand/exercisesStoreTypes'

/**
 * Подготавливает сырые данные упражнения для упражнения на написание
 * @param exercises — массив сырых данных упражнений
 */
/*export function convertRawExercisesToWriteFormat(
	exercises: ExercisesType.Exercise[]
): WriteExercises.Exercise[] {
	return exercises.map((exercise, i) => {
		let engSentences: WriteExercises.EngSentence[] = exercise.engSentences.map(
			(engSentence, j) => {
				return {
					id: j + 1,
					engSentence: engSentence.engSentence,
					isCorrect: engSentence.isCorrect,
					checked: false,
					analysis: engSentence.analysis,
				}
			}
		)

		// Перемешать ответы
		engSentences = shuffleArray(engSentences)

		return {
			type: 'writing',
			id: i + 1,
			note: exercise.note,
			rusSentence: exercise.rusSentence,
			userTranslate: '',
			showAnalysis: false,
			analysisTab: 'analysis',
			isTranslateCorrect: 'unknown',
			engSentences,
			words: exercise.words,
		}
	})
}*/

/**
 * Подготавливает сырые данные упражнения для упражнения на говорение
 * @param exercises — массив сырых данных упражнений
 */
/*export function convertRawExercisesToSpeakFormat(
	exercises: ExercisesType.Exercise[]
): SpeakExercises.Exercise[] {
	return exercises.map((exercise, i) => {
		return {
			type: 'speak',
			id: i + 1,
			note: exercise.note,
			rusSentence: exercise.rusSentence,
			engSentences: exercise.engSentences.map((engSentence, j) => {
				return {
					id: j + 1,
					engSentence: engSentence.engSentence,
					isCorrect: engSentence.isCorrect,
				}
			}),
			showTranslate: false,
		}
	})
}*/
