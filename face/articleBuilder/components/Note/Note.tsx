import cn from 'classnames'
import ArticleType from '../../../articlesData/articleType'
import ArticleBuilder from '../../ArticleBuilder/ArticleBuilder'
import './Note.scss'

type NoteProps = {
	config: ArticleType.Note
}

function Note(props: NoteProps) {
	const { config } = props

	const classes = ['art-note', 'art-note--' + (config.noteStyle || 'gray')]

	return (
		<section className={cn(classes)}>
			<ArticleBuilder articleContent={config.children} />
		</section>
	)
}

export default Note