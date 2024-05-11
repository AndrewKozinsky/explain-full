import ArticleType from '../../articleType'
import ArticleA from './ArticleA'
import ArticleMany from './ArticleMany'
import ArticleThe from './ArticleThe'
import ArticleMy from './ArticleMy'
import ArticleThis from './ArticleThis'

const indefiniteArticle: ArticleType.ArtArticle = {
	type: ArticleType.ArtType.article,
	meta: {
		number: 5,
		slug: 'indefinite-article',
		caption: 'Глава 3',
		articleName: 'Неопределённый артикль a',
		articleDescription:
			'Кратко рассмотрено для чего перед каждым существительным ставят определитель и разберём неопределённый артикль a/an.',
		isPaid: false,
	},
	content: [
		{
			type: 'grid',
			offset: false,
			cells: [
				{
					children: [
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'wood' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'дерево' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'iron' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'железо' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'coal' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'уголь' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'hair' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'волосы' },
							],
						},
					],
				},
				{
					children: [
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a wood' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'лес' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'an iron' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'утюг' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a coal' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'уголёк' },
							],
						},
						{
							type: 'paragraph',
							offset: false,
							textSize: 'big',
							children: [
								{ type: 'text', color: 'black', weight: 'normal', text: 'a hair' },
								{ type: 'arrow' },
								{ type: 'text', color: 'black', weight: 'normal', text: 'волосок' },
							],
						},
					],
				},
			],
		},
	],
}

export default indefiniteArticle
