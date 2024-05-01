'use client'

import Modal from '../../../../ui/Modal/Modal'
import { useExercisesModalStore } from '../../store/store'
import ExerciseContent from '../ExerciseContent/ExerciseContent'
import ExercisesLists from '../ExercisesList/ExercisesLists'
import { useGetOpenCloseExercisesModal } from './fn/clickOnBlock'
import { useSetUpExercises } from './fn/useSetUpExercises'
import './ExercisesModal.scss'

type ExercisesModalProps = {
	articleSlug: string
}

export function ExercisesModal(props: ExercisesModalProps) {
	const { articleSlug } = props

	const { isModalOpen, exercisesLogic } = useExercisesModalStore()

	useSetUpExercises(articleSlug)
	const closeModal = useGetOpenCloseExercisesModal(false, null)

	if (!exercisesLogic || !exercisesLogic.store) return null

	return (
		<Modal
			header="Тренировка"
			isOpen={isModalOpen}
			close={closeModal}
			extraClass="exercises-modal"
		>
			<div className="exercises-modal__content">
				<ExercisesLists />
				<ExerciseContent />
			</div>
		</Modal>
	)
}
