'use client'

import Modal from '../../../../ui/Modal/Modal'
import { useExercisesModalStore } from '../../store/store'
import ExerciseContent from '../ExerciseContent/ExerciseContent'
import ExercisesLists from '../ExercisesList/ExercisesLists'
import { useGetOpenCloseExercisesModal } from './fn/clickOnBlock'
import { useSetUpStore } from './fn/useSetUpStore'
import './ExercisesModal.scss'

type ExercisesModalProps = {
	articleSlug: string
}

export function ExercisesModal(props: ExercisesModalProps) {
	const { articleSlug } = props

	const { isModalOpen, store } = useExercisesModalStore()

	useSetUpStore(articleSlug)
	const closeModal = useGetOpenCloseExercisesModal(false, null)

	if (!store) return null

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
