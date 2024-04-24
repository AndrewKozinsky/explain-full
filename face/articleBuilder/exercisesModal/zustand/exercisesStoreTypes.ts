// import ArticleType from '../../../articlesData/articleType'
// import ExercisesType from '../../../articlesData/exercisesType'

/*export namespace ExercisesStoreType {
	export type State = {
		// Открыто ли модальное окно прохождения упражнений
		isModalOpen: boolean
		// Упражнения из данных статьи. После получения будут наполнены данными,
		// с которыми непосредственно будет работать модальное окно прохождения упражнений.
		// Если есть, то открыть модальное окно. Если нет, то окно закрыто
		rowExercises: null | ExercisesType.Exercise[]
		writeExercises: WriteExercises.Exercise[]
		speakExercises: SpeakExercises.Exercise[]
		// Текущее предложение
		exerciseId: null | number
		// Тип упражнений:
		currentExercisesType: ExercisesType
	}

	// Тип упражнений:
	// choose — выбор варианта
	// writing — письменное
	// speaking — говорение
	export type ExercisesType = 'write' | 'speak'

	// Тип из всех типов упражнения
	export type Exercise = WriteExercises.Exercise | SpeakExercises.Exercise
}*/

/*export namespace WriteExercises {
	export type Exercise = {
		type: 'writing'
		id: number
		// Какое-то примечание выше предложения
		note?: string
		// Предложение на русском языке
		rusSentence: string
		// Перевод предложения на английский написанный пользователем
		userTranslate: string
		// Показать ли разбор перевода написанного пользователем?
		showAnalysis: boolean
		// Какую вкладку показывать в окне анализа предложения
		analysisTab: 'analysis' | 'rightVariants'
		// Правилен ли перевод данный пользователем?
		isTranslateCorrect: IsTranslateCorrect
		// Правильные и неправильные варианты переводов
		engSentences: EngSentence[]
		// Слова этого предложения
		words?: ExercisesType.Word[]
	}

	// Правилен ли перевод данный пользователем?
	// Если unknown, то перевод данный пользователем не соответствует ни одному неправильному или правильному варианту
	export type IsTranslateCorrect = 'unknown' | boolean

	export type EngSentence = {
		// Идентификатор английского перевода,
		// чтобы определять какое английское предложение выбрано и для связывания подписи и переключателя.
		id: number
		// Текст предложения на английском
		engSentence: string
		// Правильное?
		isCorrect: boolean
		// Разбор предложения
		analysis?: ArticleType.Content
	}
}*/

/*export namespace SpeakExercises {
	export type Exercise = {
		type: 'speak'
		id: number
		// Какое-то примечание выше предложения
		note?: string
		// Предложение на русском языке
		rusSentence: string
		// Правильные и неправильные варианты переводов
		engSentences: EngSentence[]
		// Показать ли перевод русского предложения
		showTranslate: boolean
	}

	export type EngSentence = {
		// Идентификатор английского перевода,
		// чтобы определять какое английское предложение выбрано и для связывания подписи и переключателя.
		id: number
		// Текст предложения на английском
		engSentence: string
		// Правильное?
		isCorrect: boolean
	}
}*/
