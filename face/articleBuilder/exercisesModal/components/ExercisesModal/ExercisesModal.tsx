'use client'

import Modal from '../../../../ui/Modal/Modal'
import { useExercisesModalStore } from '../../store/store'
import ContentWrappers from '../ContentWrappers/ContentWrappers'
import ExerciseContent from '../ExerciseContent/ExerciseContent'
import ExercisesList from '../ExercisesList/ExercisesList'
import { useGetOpenCloseExercisesModal } from './fn/clickOnBlock'
import { useSetUpExercises } from './fn/useSetUpExercises'
import './ExercisesModal.scss'

type ExercisesModalProps = {
	articleSlug: string
}

export function ExercisesModal(props: ExercisesModalProps) {
	const { articleSlug } = props

	const { isModalOpen } = useExercisesModalStore()

	const exercisesLogic = useSetUpExercises(articleSlug)
	const closeModal = useGetOpenCloseExercisesModal(false, null)

	if (!exercisesLogic || !exercisesLogic.store) return null

	return (
		<Modal
			header="Тренировка"
			isOpen={isModalOpen}
			close={closeModal}
			extraClass="exercises-modal"
		>
			<ContentWrappers>
				<ExercisesList />
				<ExerciseContent />
			</ContentWrappers>
		</Modal>
	)
}
