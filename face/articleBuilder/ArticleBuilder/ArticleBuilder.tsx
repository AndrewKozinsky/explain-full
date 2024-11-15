import React, { ReactNode } from 'react'
import ArticleType from '../../articlesData/articleType'
import ExercisesButton from '../components/Exercises/ExercisesButton'
import FaqInArticle from '../components/FaqInArticle/FaqInArticle'
import Grid from '../components/Grid/Grid'
import Header from '../components/Header/Header'
import List from '../components/List/List'
import Note from '../components/Note/Note'
import Paragraph from '../components/Paragraph/Paragraph'
import './collocations.scss'

type ArticleBuilderProps = {
	articleContent: ArticleType.Content
}

// Компонент получающий данные статьи и по ним формирующий разметку
function ArticleBuilder(props: ArticleBuilderProps): ReactNode {
	const content = props.articleContent

	return (
		<>
			{content.map((compConf, i) => {
				if (compConf.type === 'header') {
					return <Header config={compConf} key={i} />
				} else if (compConf.type === 'paragraph') {
					return <Paragraph config={compConf} key={i} />
				} else if (compConf.type === 'list') {
					return <List config={compConf} key={i} />
				} else if (compConf.type === 'note') {
					return <Note config={compConf} key={i} />
				} else if (compConf.type === 'exercises') {
					return <ExercisesButton exercises={compConf} key={i} />
				} else if (compConf.type === 'customComponent') {
					return compConf.component
				} else if (compConf.type === 'faq') {
					return <FaqInArticle config={compConf} key={i} />
				} else if (compConf.type === 'grid') {
					return <Grid config={compConf} key={i} />
				}
			})}
		</>
	)
}

export default ArticleBuilder
