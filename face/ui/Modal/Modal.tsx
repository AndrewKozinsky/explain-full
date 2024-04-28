'use client'
import React, { ReactNode } from 'react'
import CloseButton from '../buttons/CloseButton/CloseButton'
import { useFixBodyScrolling } from './fn/fixBodyScrolling'
import './Modal.scss'

type ModalProps = {
	header: string
	children: ReactNode
	isOpen: boolean
	close: () => void
}

function Modal(props: ModalProps) {
	const { header, children, isOpen, close } = props

	useFixBodyScrolling(isOpen)

	if (!isOpen) return null

	return (
		<div className="modal" onClick={close}>
			<div
				className="modal__body"
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<div className="modal__close-button-wrapper">
					<CloseButton onClick={close} extraClass="modal__close-button" />
				</div>
				<div className="modal__content-wrapper">
					<h2 className="modal__header">{header}</h2>
					<div className="modal__content">{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
