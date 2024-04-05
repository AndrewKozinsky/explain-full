import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

/**
 * Принимает ссылку на элемент меню и возвращает булево значение
 * является ли это текущей страницей или содержит дочернюю текущую страницу.
 * @param menuLinkUrl — url ссылки верхнего меню
 */
export function useIsCurrentPage(menuLinkUrl: string) {
	const pathname = usePathname()

	return useMemo(
		function () {
			return menuLinkUrl === pathname || pathname.startsWith(menuLinkUrl + '/')
		},
		[pathname],
	)
}
