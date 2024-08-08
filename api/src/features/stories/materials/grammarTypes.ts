// ПРИ ИЗМЕНЕНИИ ОБНОВИ ТИПЫ НА КЛИЕНТЕ В requests/stories/grammarTypes.ts

// Типы грамматических правил
export namespace GrammarConfigT {
	// Объект текста
	export type Grammar = DemonstrativePronouns | Noun | PluralOfNouns | AbbreviatedForm

	// Указательные местоимения
	export type DemonstrativePronouns = {
		type: GrammarAliases.DemonstrativePronouns
	}

	// Существительное
	export type Noun = {
		type: GrammarAliases.Noun
	}

	// Множественное число существительных
	export type PluralOfNouns = {
		type: GrammarAliases.PluralOfNouns
	}

	// Сокращённая форма
	export type AbbreviatedForm = {
		type: GrammarAliases.AbbreviatedForm
	}
}

export enum GrammarAliases {
	DemonstrativePronouns = 'demonstrative-pronouns',
	Noun = 'noun',
	PluralOfNouns = 'plural-of-nouns',
	AbbreviatedForm = 'abbreviated-form',
}

export const grammarMeta: Record<GrammarAliases, { name: string; href: string }> = {
	[GrammarAliases.DemonstrativePronouns]: {
		name: 'Указательные местоимения',
		href: 'https://eng.skillbox.ru/blog/that-this-those-these-pravila-i-primery',
	},
	[GrammarAliases.Noun]: {
		name: 'Существительные',
		href: 'https://skyeng.ru/articles/suschestvitelnye-v-anglijskom/',
	},
	[GrammarAliases.PluralOfNouns]: {
		name: 'Множественное число существительных',
		href: 'https://tetrika-school.ru/blog/mnozhestvenoe-chislo-sushestvitelnyh-v-anglijskom/',
	},
	[GrammarAliases.AbbreviatedForm]: {
		name: 'Сокращённая форма',
		href: 'https://tetrika-school.ru/blog/mnozhestvenoe-chislo-sushestvitelnyh-v-anglijskom/',
	},
}
