// import React from 'react'
// import { exercisesManager } from '../../../common/exercisesManager'
// import { useExercisesStore } from '../../../zustand/exercisesStore'
// import { SpeakExercises } from '../../../zustand/exercisesStoreTypes'
// import s from './LastExerciseNote.module.scss'

// Сообщение про последнее упражнение
/*function LastExerciseNote() {
	const speakExercises = useExercisesStore((store) => store.speakExercises)
	const exercise = exercisesManager.useGetCurrentExercise() as SpeakExercises.Exercise

	// Не показывать если не отображается последнее упражнение и оно ещё не переведено
	if (speakExercises[speakExercises.length - 1].id !== exercise.id && !exercise.showTranslate) {
		return null
	}

	return <p className={s.note}>Это последнее упражнение.</p>
}*/

// export default LastExerciseNote
