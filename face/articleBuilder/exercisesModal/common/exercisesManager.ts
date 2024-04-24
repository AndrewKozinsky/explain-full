// import { useCallback, useMemo } from 'react'
// import { UpdateStore } from '../../../../parts/store'
// import ExercisesType from '../../../articlesData/exercisesType'
// import { useExercisesStore } from '../zustand/exercisesStore'
// import { ExercisesStoreType } from '../zustand/exercisesStoreTypes'
// import {
// 	convertRawExercisesToSpeakFormat,
// 	convertRawExercisesToWriteFormat
// } from './convertRawExercisesToStoreData'

/*export const exercisesManager = {
	/!** Получает сырые упражнения, переводит их под формат упражнений для Хранилища и ставит в него. *!/
	createClearedStore(
		rowExercises: ExercisesType.Exercise[] | null,
		updateExercisesStore: UpdateStore<ExercisesStoreType.State>
	) {
		if (!rowExercises || !rowExercises.length) {
			updateExercisesStore({ exerciseId: null, currentExercisesType: 'write' })
			return
		}

		const writeExercises = convertRawExercisesToWriteFormat(rowExercises)
		const speakExercises = convertRawExercisesToSpeakFormat(rowExercises)

		updateExercisesStore({
			exerciseId: writeExercises[0].id,
			writeExercises,
			speakExercises,
		})
	},
	/!** Возвращает функцию, закрывающую модальное окно с упражнениями *!/
	useGetCloseExercisesModal() {
		const updateExercisesStore = useExercisesStore((store) => store.updateStore)

		return useCallback(function () {
			updateExercisesStore({ isModalOpen: false })
		}, [])
	},
	/!** Возвращает упражнения в зависимости от выбранного типа *!/
	useGetExercisesByType(): ExercisesStoreType.Exercise[] {
		const writeExercises = useExercisesStore((store) => store.writeExercises)
		const oralExercises = useExercisesStore((store) => store.speakExercises)
		const exercisesType = useExercisesStore((store) => store.currentExercisesType)

		const exercisesMapper: Record<
			ExercisesStoreType.ExercisesType,
			ExercisesStoreType.Exercise[]
		> = {
			write: writeExercises,
			speak: oralExercises,
		}

		return exercisesMapper[exercisesType]
	},
	/!** Возвращает данные текущего упражнения или null *!/
	useGetCurrentExercise() {
		const exercises = this.useGetExercisesByType()
		const exerciseId = useExercisesStore((store) => store.exerciseId)

		return useMemo(
			function () {
				if (!exerciseId) return null

				return exercises.find((exercise: ExercisesStoreType.Exercise) => {
					return exercise.id === exerciseId
				})
			},
			[exercises, exerciseId]
		)
	},
	/!** Возвращает данные следующего упражнений *!/
	useGetNextSentence() {
		const exercises = this.useGetExercisesByType()
		const exerciseId = useExercisesStore((store) => store.exerciseId)

		const currentExerciseIdx = exercises.findIndex((exercise) => {
			return exercise.id === exerciseId
		})

		return exercises[currentExerciseIdx + 1]
	},
	/!** Возвращает данные по следующему типу упражнения после переданного *!/
	getNextExercisesTypeDependOnCurrent(currentExercisesType: ExercisesStoreType.ExercisesType) {
		type NextTypeMapType = Record<
			ExercisesStoreType.ExercisesType,
			{
				type: ExercisesStoreType.ExercisesType
				name: string
			}
		>

		const nextTypeMap: NextTypeMapType = {
			write: {
				type: 'speak',
				name: 'Голосовая тренировка',
			},
			speak: {
				type: 'write',
				name: 'Письменная тренировка',
			},
		}

		return nextTypeMap[currentExercisesType]
	},
	/!** Ставит текущим типом упражнений следующий тип после текущего *!/
	useGetGoToNextExercisesType() {
		const exercisesType = useExercisesStore((store) => store.currentExercisesType)
		const updateExercisesStore = useExercisesStore((store) => store.updateStore)

		return () => {
			const nextType = this.getNextExercisesTypeDependOnCurrent(exercisesType)
			updateExercisesStore({ currentExercisesType: nextType.type })
		}
	},
	/!** Обновляет данные текущего упражнения *!/
	useGetUpdateCurrentExercise() {
		const exercises = this.useGetExercisesByType()
		const updateStore = useExercisesStore((store) => store.updateStore)
		const currentExercisesType = useExercisesStore((store) => store.currentExercisesType)
		const exerciseId = useExercisesStore((store) => store.exerciseId)

		return function <T extends ExercisesStoreType.Exercise>(objWithNewProps: Partial<T>) {
			const newExercises = exercises.map((exercise) => {
				if (exercise.id !== exerciseId) return { ...exercise }

				return { ...exercise, ...objWithNewProps }
			})

			updateStore({ [currentExercisesType + 'Exercises']: newExercises })
		}
	},
}*/
