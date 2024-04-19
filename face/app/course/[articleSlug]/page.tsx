// import ArticlePage from '../../_pages/article/articlePage/ArticlePage/ArticlePage'

import articleService from '../../../shared/articlesData/articleService'

type TextBookArticleProps = {
	params: {
		// Название статьи в адресной строке
		articleSlug: string
	}
}

// Универсальная страница учебника
export default async function TextBookArticle(props: TextBookArticleProps) {
	const {
		params: { articleSlug },
	} = props

	const prevArticle = articleService.getArticle(articleSlug, 'prev')
	const article = articleService.getArticle(articleSlug, 'this')
	const nextArticle = articleService.getArticle(articleSlug, 'next')

	if (!article) {
		return <p>Глава не найдена.</p>
	}

	/*return <ArticlePage prevArticle={prevArticle} article={article} nextArticle={nextArticle} />*/
	return <p>HELLO</p>
}
