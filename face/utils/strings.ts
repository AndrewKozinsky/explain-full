/**
 * Форматирует текст для лучшего вида.
 * Сейчас пока ставит неразрывные пробелы чтобы не было висячих строк.
 * Возможно в будущем добавится что-то ещё.
 * @param text — строка, которую нужно форматировать.
 */
export function typographyText(text: string) {
	let newText = text.replaceAll(' и ', ' и\u00A0')

	newText = newText.replaceAll(/ a$/gi, '\u00A0a')

	return newText
}
