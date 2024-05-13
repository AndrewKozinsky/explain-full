import ArticleType from '../articleType'
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
]

const articles: ArticleType.Art[] = rowArticles.map((article, i) => {
	const newArticle = { ...article }
	newArticle.meta.number = i + 1

	return newArticle
})

export default articles
