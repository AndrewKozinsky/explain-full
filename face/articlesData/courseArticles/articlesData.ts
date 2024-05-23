import ArticleType from '../articleType'
import the from './10_the/the'
import adjectivesDegreesOfComparison from './11_adjectivesDegreesOfComparison/adjectivesDegreesOfComparison'
import beShort from './12_beShort/beShort'
import presentSimple from './13_presentSimple/presentSimple'
import compareBeAndSimple from './14_compareBeAndSimple/compareBeAndSimple'
import simpleQuestionAndNegative from './15_simpleQuestionAndNegative/simpleQuestionAndNegative'
import pluralOfNouns from './5_pluralOfNouns/pluralOfNouns'
import beNegativeAndQuestion from './6_beNegativeAndQuestion/beNegativeAndQuestion'
import demonstrativePronouns from './7_demonstrativePronouns/demonstrativePronouns'
import possessivePronouns from './8_possessivePronouns/possessivePronouns'
import possessive from './9_possessive/possessive'
import welcome from './welcome/welcome'
import levelA1 from './levelA1/levelA1'
import personalPronouns from './1_personalPronouns/personalPronouns'
import toBePositive from './2_toBePositive/toBePositive'
import adjectives from './3_adjectives/adjectives'
import indefiniteArticle from './4_indefiniteArticle/indefiniteArticle'

// Список статей учебника
const rowArticles: ArticleType.Art[] = [
	welcome,
	levelA1,
	personalPronouns,
	toBePositive,
	adjectives,
	indefiniteArticle,
	pluralOfNouns,
	beNegativeAndQuestion,
	demonstrativePronouns,
	possessivePronouns,
	possessive,
	the,
	adjectivesDegreesOfComparison,
	beShort,
	presentSimple,
	compareBeAndSimple,
	simpleQuestionAndNegative,
]

const articles: ArticleType.Art[] = rowArticles.map((article, i) => {
	const newArticle = { ...article }
	newArticle.meta.number = i + 1

	return newArticle
})

export default articles
