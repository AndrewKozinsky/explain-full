import axios from 'axios'
import TextArtPage from '../../../_pages/textsArtPage/textArtPage/TextArtPage/TextArtPage'
import api from '../../../requests/http'
import TextsApiTypes from '../../../requests/texts/textsApiTypes'
import textsRequests from '../../../requests/texts/textsRequest'
import { createAdminTokenString } from '../../../requests/utils'
import ApiRouteNames from '../../../сonsts/apiRouteNames'

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
		const data = await fetch('/api/texts/h', {
			method: 'GET',
		}).then((res) => {
			console.log(res)
			res.json()
		})
		/*.then((data) => {
				console.log(data)
				return data
			})*/
	} catch (err: any) {
		console.log(err)
	}

	return <TextArtPage article={'' as any} />
}
