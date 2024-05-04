import cn from 'classnames'
import Paragraph from '../Paragraph/Paragraph'
import ArticleType from '../../../articlesData/articleType'
import './List.scss'

type ListProps = {
	config: ArticleType.List
}

/** Нумерованный и ненумерованный список */
function List(props: ListProps) {
	const { config } = props

	const classes = ['art-list']

	const Component = config.listType === 'dots' ? 'ul' : 'ol'

	return (
		<Component className={cn(classes)}>
			{config.children.map((paragraph, i) => {
				return (
					<li key={i}>
						<Paragraph config={paragraph} />
					</li>
				)
			})}
		</Component>
	)
}

export default List
