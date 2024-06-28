'use client'

import axios from 'axios'
import React, { useEffect } from 'react'
import TextsApiTypes, { TextType } from '../../../../requests/texts/textsApiTypes'
import { createAdminTokenString } from '../../../../requests/utils'
import { BreadCrumbs } from '../../../../ui/pageRelated/BreadCrumbs/BreadCrumbs'
import { PageContentWrapper } from '../../../../ui/pageRelated/PageContentWrapper/PageContentWrapper'
import { PageHeader } from '../../../../ui/pageRelated/PageHeader/PageHeader'
import { PageUrls } from '../../../../сonsts/pageUrls'

type TextArtPageProps = {
	article: TextType
}

/** Страница вводной глав курса */
function TextArtPage(props: TextArtPageProps) {
	const { article } = props

	useEffect(function () {
		console.log(article)
		/*try {
			axios
				.get<TextsApiTypes.GetText>('http://localhost/api/texts/text', {
					headers: {
						authorization: createAdminTokenString(),
					},
				})
				.then((data) => {
					console.log(data)
				})
		} catch (err: any) {
			console.log(err)
		}*/
	}, [])

	return (
		<PageContentWrapper>
			<BreadCrumbs items={[PageUrls.texts]} />
			<PageHeader>Заголовок текста</PageHeader>
			<p>HELLO</p>
		</PageContentWrapper>
	)
}

export default TextArtPage
