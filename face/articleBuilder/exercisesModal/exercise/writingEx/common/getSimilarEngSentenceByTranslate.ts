// import { useMemo } from 'react'
// import { exercisesManager } from '../../../common/exercisesManager'
// import { WriteExercises } from '../../../zustand/exercisesStoreTypes'

/**
 * Ищет и возвращает английский вариант перевода наиболее близкий подходящий переводу написанный пользователем в поле ввода.
 * Если ничего близкого нет, то возвращает null.
 */
/*export function useGetSimilarEngSentenceByUserTranslate() {
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise

	return useMemo(
		function () {
			const { userTranslate, engSentences } = exercise

			return engSentences.find((engSentence) => {
				return drySentence(engSentence.engSentence) === drySentence(userTranslate)
			})
		},
		[exercise]
	)
}*/

/**
 * Получает предложение и приводит его к «высушенному» виду чтобы можно было сравнивать с похожими предложениями.
 * Например буквы приводятся к нижнему регистру, убираются знаки препинания, сокращения заменяются на полные варианты.
 * @param sentence — предложение, которое нужно высушить
 */
/*function drySentence(sentence: string) {
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
	dryText = dryText.replace(/aren't/g, 'are not')
	dryText = dryText.replace(/can't/g, 'cannot')
	dryText = dryText.replace(/couldn't/g, 'could not')
	dryText = dryText.replace(/hadn't/g, 'had not')
	dryText = dryText.replace(/hasn't/g, 'has not')
	dryText = dryText.replace(/haven't/g, 'have not')
	dryText = dryText.replace(/i'm/g, 'i am')
	dryText = dryText.replace(/i've/g, 'i have')
	dryText = dryText.replace(/isn't/g, 'is not')
	dryText = dryText.replace(/let's/g, 'let us')
	dryText = dryText.replace(/mightn't/g, 'might not')
	dryText = dryText.replace(/mustn't/g, 'must not')
	dryText = dryText.replace(/shan't/g, 'shall not')
	dryText = dryText.replace(/shouldn't/g, 'should not')
	dryText = dryText.replace(/they're/g, 'they are')
	dryText = dryText.replace(/they've/g, 'they have')
	dryText = dryText.replace(/we're/g, 'we are')
	dryText = dryText.replace(/we've/g, 'we have')
	dryText = dryText.replace(/weren't/g, 'were not')
	dryText = dryText.replace(/what're/g, 'what are')
	dryText = dryText.replace(/what've/g, 'what have')
	dryText = dryText.replace(/who're/g, 'who are')
	dryText = dryText.replace(/who've/g, 'who have')
	dryText = dryText.replace(/won't/g, 'will not')
	dryText = dryText.replace(/wouldn't/g, 'would not')
	dryText = dryText.replace(/you're/g, 'you are')
	dryText = dryText.replace(/you've/g, 'you have')

	return dryText
}*/
