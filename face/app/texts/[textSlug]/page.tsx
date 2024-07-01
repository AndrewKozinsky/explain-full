import TextArtPage from '../../../_pages/textsArtPage/textArtPage/TextArtPage/TextArtPage'

type TextPageProps = {
	params: {
		// Название статьи в адресной строке
		textSlug: string
	}
}

// Универсальная страница учебника
export default async function Page(props: TextPageProps) {
	const { params } = props

	/*const data = await fetch('https://cat-fact.herokuapp.com/facts/random', {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data)
			return data
		})*/

	try {
		const data = await fetch('http://localhost/api/texts/1', {
			method: 'GET',
		})
	} catch (err: any) {
		console.log(err)
	}

	return <TextArtPage article={'' as any} />
}
