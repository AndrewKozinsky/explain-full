// import React from 'react'
// import ExercisesType from '../../../../../articlesData/exercisesType'
// import { exercisesManager } from '../../../common/exercisesManager'
// import { WriteExercises } from '../../../zustand/exercisesStoreTypes'
// import s from './Words.module.scss'

// Слова, которые используются для перевода предложения на английский
/*function Words() {
	const exercise = exercisesManager.useGetCurrentExercise() as WriteExercises.Exercise

	if (!exercise.words || !exercise.words.length) {
		return null
	}

	return (
		<div className={s.container}>
			{exercise.words.map((wordObj, i) => (
				<Word wordObj={wordObj} key={i + 1} />
			))}
		</div>
	)
}*/

// export default Words

/*type WordProp = {
	wordObj: ExercisesType.Word
}*/

/*function Word(props: WordProp) {
	const { wordObj } = props

	return (
		<div className={s.wordContainer}>
			<p className={s.word}>
				<span className={s.wordRus}>{wordObj.rusWord}</span>
				<span className={s.wordEng}>{wordObj.engWord}</span>
				<span className={s.transcription}>{wordObj.transcription}</span>
			</p>
			{wordObj.note && <p className={s.note}>{wordObj.note}</p>}
		</div>
	)
}*/
