// ПРИ ИЗМЕНЕНИИ ОБНОВИ ТИПЫ НА КЛИЕНТЕ В requests/stories/grammarTypes.ts

// Типы грамматических правил
export namespace GrammarConfigT {
	// Объект текста
	export type Grammar = DemonstrativePronouns | Noun | PluralOfNouns | AbbreviatedForm

	// Указательные местоимения
	export type DemonstrativePronouns = {
		topic: GrammarAliases.DemonstrativePronouns
	}

	// Существительное
	export type Noun = {
		topic: GrammarAliases.Noun
	}

	// Множественное число существительных
	export type PluralOfNouns = {
		topic: GrammarAliases.PluralOfNouns
	}

	// Сокращённая форма слова или слов.
	// Например полная форма Mrs будет Mistress,
	// а D.O.B. будет date of birth (дата рождения);
	// Или для we're будет we are.
	// Для неоднозначных случаев типа he's нужно ещё передать тип где будет или 'have' или 'be'
	// чтобы однозначно сказать he has или he is.
	export type AbbreviatedForm = {
		topic: GrammarAliases.AbbreviatedForm
		type?: 'have' | 'be'
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
