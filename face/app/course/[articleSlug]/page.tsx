// import ArticlePage from '../../_pages/article/articlePage/ArticlePage/ArticlePage'
import articleService from '../../../shared/articlesData/articleService'
import ArticleType from '../../../shared/articlesData/articleType'
import { BreadCrumbs } from '../../../shared/components/pageDetails/BreadCrumbs/BreadCrumbs'
import { PageContentWrapper } from '../../../shared/components/pageDetails/PageContentWrapper/PageContentWrapper'
import { PageHeader } from '../../../shared/components/pageDetails/PageHeader/PageHeader'
import { PageUrls } from '../../../shared/сonsts/pageUrls'
import WelcomeArticleContent from '../../../widgets/courseArticle/WelcomeArticleContent/WelcomeArticleContent'

type TextBookArticleProps = {
	params: {
		// Название статьи в адресной строке
		articleSlug: string
	}
}

// Универсальная страница учебника
export default async function CourseArticlePage(props: TextBookArticleProps) {
	const {
		params: { articleSlug },
	} = props

	const prevArticle = articleService.getArticle(articleSlug, 'prev')
	const article = articleService.getArticle(articleSlug, 'this')
	const nextArticle = articleService.getArticle(articleSlug, 'next')

	if (!article) {
		return <p>Глава не найдена.</p>
	}

	return (
		<PageContentWrapper>
			<BreadCrumbs items={[PageUrls.course]} />
			<PageHeader>{article.meta.articleName}</PageHeader>
			<ContentSwitcher
				prevArticle={prevArticle}
				article={article}
				nextArticle={nextArticle}
			/>
		</PageContentWrapper>
	)
}

type ContentSwitcherProps = {
	prevArticle: ArticleType.Art | null
	article: ArticleType.Art
	nextArticle: ArticleType.Art | null
}

function ContentSwitcher(props: ContentSwitcherProps) {
	const { prevArticle, article, nextArticle } = props

	if (article.type === ArticleType.ArtType.welcome) {
		return (
			<WelcomeArticleContent
				prevArticle={prevArticle}
				article={article}
				nextArticle={nextArticle}
			/>
		)
	} else if (article.type === ArticleType.ArtType.level) {
		return <p>Level</p>
	} else if (article.type === ArticleType.ArtType.media) {
		return <p>Media</p>
	}

	return <p>Article</p>
	/*return <ArticlePage prevArticle={prevArticle} article={article} nextArticle={nextArticle} />*/
}
