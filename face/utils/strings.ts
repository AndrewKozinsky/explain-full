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

export function createAdminTokenString() {
	let token = 'dGhuYWR6NDUkJTprd2NHVDA5JSQj'

	if (process.env.AUTH_LOGIN && process.env.AUTH_PASSWORD) {
		token = Buffer.from(process.env.AUTH_LOGIN + ':' + process.env.AUTH_PASSWORD).toString(
			'base64',
		)
	}

	return 'Basic ' + token
}
