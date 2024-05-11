import ArticleType from '../articleType'
import welcome from './1_welcome/welcome'
import level from './2_level/level'
import personalPronouns from './3_personalPronouns/personalPronouns'
import toBePositive from './4_toBePositive/toBePositive'
import indefiniteArticle from './5_indefiniteArticle/indefiniteArticle'

// Список статей учебника
const rowArticles: ArticleType.Art[] = [
	welcome,
	level,
	personalPronouns,
	toBePositive,
	indefiniteArticle,
]

const articles: ArticleType.Art[] = rowArticles.map((article, i) => {
	const newArticle = { ...article }
	newArticle.meta.number = i + 1

	return newArticle
})

export default articles
