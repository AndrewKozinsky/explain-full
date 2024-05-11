import ArticleBuilder from '../../ArticleBuilder/ArticleBuilder'
import { getStyleTagCss, useGetGridId } from './fn/getGridStyle'
import ArticleType from '../../../articlesData/articleType'
import './Grid.scss'

type GridProps = {
	config: ArticleType.Grid
}

function Grid(props: GridProps) {
	const { config } = props

	const gridId = useGetGridId()

	return (
		<section className="art-grid" id={gridId}>
			<style type="text/css">{getStyleTagCss(config, gridId)}</style>
			{config.cells.map((cell, i) => {
				return (
					<div className="art-grid__cell" key={i}>
						<ArticleBuilder articleContent={cell.children} />
					</div>
				)
			})}
		</section>
	)
}

export default Grid
