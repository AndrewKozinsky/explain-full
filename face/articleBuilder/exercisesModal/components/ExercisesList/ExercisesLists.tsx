import React from 'react'
import cn from 'classnames'
import { ExercisesManagerTypes } from '../../logic/exercisesManagerTypes'
import { exercisesLogic, useExercisesModalStore } from '../../store/store'
import s from './ExercisesLists.module.scss'

function ExercisesLists() {
	const { store } = useExercisesModalStore()

	const { exercisesWriting, exercisesOral } = store

	return (
		<div className={s.generalWrapper}>
			<ExercisesList header="Письменная" exercises={exercisesWriting} />
			<ExercisesList header="Голосовая" exercises={exercisesOral} />
		</div>
	)
}

export default ExercisesLists

type ExercisesListProps = {
	header: string
	exercises: ExercisesManagerTypes.Exercise[]
}

function ExercisesList(props: ExercisesListProps) {
	const { header, exercises } = props

	return (
		<div className={s.partWrapper}>
			<h2 className={s.partHeader}>{header}</h2>
			<div className={s.buttons}>
				{exercises.map((exercise, i) => (
					<button
						className={cn(s.button, exercise.isCurrent && s['button--current'])}
						onClick={() => exercisesLogic.pickExercise(exercise.id)}
						key={i}
					>
						{exercise.rusSentence}
					</button>
				))}
			</div>
		</div>
	)
}
