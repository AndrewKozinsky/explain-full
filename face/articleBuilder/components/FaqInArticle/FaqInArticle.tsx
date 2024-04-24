import Faq from '../../../ui/FAQ/FAQ'
import FaqTypes from '../../../ui/FAQ/fn/faqTypes'
import ArticleType from '../../../articlesData/articleType'
import ArticleBuilder from '../../ArticleBuilder/ArticleBuilder'
import './FaqInArticle.scss'

type FaqInArticleProps = {
	config: ArticleType.Faq
}

function FaqInArticle(props: FaqInArticleProps) {
	const { config } = props

	const faqConfig: FaqTypes.Config = config.items.map((faqItem) => {
		const question: FaqTypes.Question =
			faqItem.question.type === 'plain'
				? {
						type: 'plain',
						value: faqItem.question.value,
					}
				: {
						type: 'ReactNode',
						value: <ArticleBuilder articleContent={faqItem.question.value} />,
					}

		const answer: FaqTypes.Answer =
			faqItem.answer.type === 'plain'
				? {
						type: 'plain',
						value: faqItem.answer.value,
					}
				: {
						type: 'ReactNode',
						value: <ArticleBuilder articleContent={faqItem.answer.value} />,
					}

		return {
			question,
			answer,
		}
	})

	return <Faq config={faqConfig} extraClass="art-faq" />
}

export default FaqInArticle
