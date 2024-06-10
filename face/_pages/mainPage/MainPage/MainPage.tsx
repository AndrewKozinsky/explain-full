import React from 'react'
import CourseFace from '../CourseFace/CourseFace'
import FeaturesGridOne from '../FeaturesGridOne/FeaturesGridOne'
import MainPageHeader from '../MainPageHeader/MainPageHeader'

function MainPage() {
	return (
		<main>
			<MainPageHeader />
			<CourseFace />
			<FeaturesGridOne />
		</main>
	)
}

export default MainPage
