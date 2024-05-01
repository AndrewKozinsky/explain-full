import React from 'react'
import s from './ContentWrappers.module.scss'

type ContentWrappersProps = {
	children: [React.ReactNode, React.ReactNode]
}
function ContentWrappers(props: ContentWrappersProps) {
	const [ExercisesList, CurrentExercise] = props.children

	return (
		<div className={s.wrapper}>
			<nav className={s.wrapperNav}>{ExercisesList}</nav>
			<section className={s.wrapperContent}>{CurrentExercise}</section>
		</div>
	)
}

export default ContentWrappers
