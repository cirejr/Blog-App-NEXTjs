import React, { useState, useEffect} from 'react'
import Carousel from 'react-multi-carousel';
import { FeaturedPostCard } from '../../components';

import { getFeaturedPosts } from '../../services'

const FeaturedPosts = () => {
	const [featuredPosts, setFeaturedPosts] = useState([])
	const [dataLoaded, setDataLoaded] = useState(false)

	useEffect(() => {
	  getFeaturedPosts()
	  	.then(result => {
			setFeaturedPosts(result)
			setDataLoaded(true)
		})
	
	}, [])
	
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 8
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<div className="container mb-8">
			<Carousel responsive={responsive} infinite={true} >
				<div className="flex gap-3">
					{dataLoaded && featuredPosts.map((post, index) => (
						<FeaturedPostCard key={index} post={post} />
					))}
				</div>
			</Carousel>
		</div>
	)
}

export default FeaturedPosts