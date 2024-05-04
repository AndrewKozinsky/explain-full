import React from 'react'
import LoadingMessage from '../../../../../ui/LoadingMessage/LoadingMessage'

type LoadingOrErrorAnalysisProps = {
	type: 'loading' | 'error'
}

function LoadingOrErrorAnalysis(props: LoadingOrErrorAnalysisProps) {
	const { type } = props

	return (
		<div className="loading-error-analysis">
			{type === 'error' && <p>error</p>}
			{type === 'loading' && <LoadingMessage text="Проверка перевода" />}
		</div>
	)
}

export default LoadingOrErrorAnalysis
