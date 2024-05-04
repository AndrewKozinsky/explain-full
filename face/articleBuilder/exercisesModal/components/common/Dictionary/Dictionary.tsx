import React from 'react'
import DictionaryWord from '../../../../../_pages/courseArtPage/courseArticlePage/common/DictionaryWord/DictionaryWord'
import { useExercisesModalStore } from '../../../store/store'
import s from './Dictionary.module.scss'

/** Список русских слов с переводом на английский для правильного перевода предложения. */
function Dictionary() {
	const { words } = useExercisesModalStore().store.currentExercise
	if (!words) return null

	return (
		<div className={s.wrapper}>
			{words.map((word) => {
				return <DictionaryWord wordObj={word} key={word.engWord} />
			})}
		</div>
	)
}

export default Dictionary
