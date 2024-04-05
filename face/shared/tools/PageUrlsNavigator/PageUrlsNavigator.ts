import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

// СКОРЕЕ ВСЕГО ЭТОТ ФАЙЛ НУЖНО УДАЛИТЬ. НЕ ПОЛУЧИЛОСЬ СДЕЛАТЬ НОРМАЛЬНЫЙ МЕХАНИЗМ РАБОТЫ С АДРЕСАМИ

namespace PageUrlsNavigatorTypes {
	export type PlainUrl = {
		// Сегмент пути до страницы
		path: string
		// Короткое название страницы. Можно использовать в меню
		shortName: string
		// Расширенное название страницы.
		// Можно использовать в названии страницы.
		// Если не указано, то будет аналогично короткому названию
		fullName?: string
		// Вложенные страницы
		children?: PlainUrl[]
	}

	export type PlainUrls = PlainUrl[]

	export type FullUrl = {
		path: string
		shortName: string
		fullName: string
		// Является ли текущей страницей
		current: boolean
		children?: FullUrl[]
	}

	export type FullUrls = FullUrl[]
}

/**
 * Класс принимает структуру адресов в простом формате
 * и имеет методы для преобразования адресов в полный формат где указан является ли адрес текущим,
 */
export class PageUrlsNavigator {
	// Конструктор принимает простую структуру адресов. Затем эти данные будут наполняться.
	constructor(private plainUrls: PageUrlsNavigatorTypes.PlainUrls) {}

	/** Возвращает массив со структурой страниц приложения */
	useGetUrls(): PageUrlsNavigatorTypes.FullUrls {
		const currentPath = usePathname()
		const _self = this

		return useMemo(
			function () {
				const activeUrlSegments = _self.convertPathToUrlSegments(currentPath)
				return _self.convertPlainUrlsToFull(_self.plainUrls, activeUrlSegments)
			},
			[currentPath],
		)
	}

	/**
	 * Переводит простую структуру адресов в полную
	 * @param plainUrls — массив с простой структурой адресов
	 * @param activeUrlSegments — адрес текущей страницы вида ['course', 'welcome']
	 */
	private convertPlainUrlsToFull(
		plainUrls: PageUrlsNavigatorTypes.PlainUrls,
		activeUrlSegments: string[],
	): PageUrlsNavigatorTypes.FullUrls {
		return plainUrls.map((plainItem) => {
			const activePageUrlSegment = activeUrlSegments[0] // 'course'

			const fullItem: PageUrlsNavigatorTypes.FullUrl = {
				path: plainItem.path,
				shortName: plainItem.shortName,
				fullName: plainItem.fullName ?? plainItem.shortName,
				current: activePageUrlSegment === plainItem.shortName,
			}

			if (plainItem.children) {
				fullItem.children = this.convertPlainUrlsToFull(
					plainItem.children,
					activeUrlSegments.splice(1) || [],
				)
			}

			return fullItem
		})
	}

	/**
	 * Принимает строку вида '/course/new' в ['course', 'new']
	 * @param path — строка пути
	 */
	convertPathToUrlSegments(path: string) {
		return path.split('/')
	}
}
