import ArticleType from '../articleType'
import welcome from './1_welcome/welcome'
import level from './2_level/level'
import media from './3_media/media'
import personalPronouns from './4_personalPronouns/personalPronouns'
import tobe from './5_tobe/tobe'

// Список статей учебника
const rowArticles: ArticleType.Art[] = [welcome, level, media, personalPronouns, tobe]

const articles: ArticleType.Art[] = rowArticles.map((article, i) => {
	const newArticle = { ...article }
	newArticle.meta.number = i + 1

	return newArticle
})

export default articles
