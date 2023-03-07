import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

const FeaturedPostCard = ({post}) => {
  return (
	<div className="container mx-auto rounded-lg">
		<div className="flex gap-3 md:gap-12 flex-wrap items-center justify-center">
				<Link href={`/posts/${post.slug}`} key={post.slug}>
					<div 
						key={post.slug}
						className="relative rounded-lg shadow-lg w-64 h-80 md:w-64 lg:h-80 mb-4"
						style={{ backgroundImage : `url(${post.featuredImage.url})`, 
								zIndex: -1,
								backgroundPosition: '50% 50%',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover'}}
					>
						<div className="bg-black bg-opacity-30 rounded-lg p-4 flex flex-col items-center justify-center backdrop-blur-sm backdrop-filter z-10 w-full h-full">
							<h4 className="md:text-xl text-white font-bold mb-5"> {post.title} </h4>
							<p className="text-white font-semibold"> {moment(post.createdAt).format('MMM DD, YYYY')} </p>
							<div className="absolute self-start bottom-2 flex gap-3 items-center">
								<Image 
									width="40"
									height="40"
									src={post.author.photo.url}
									className="rounded-full shadow-lg"
									alt={post.author.username}
								/>
								<p className="text-white font-bold"> {post.author.name} </p>
							</div>
						</div>
					</div>
				</Link>
		</div>
	</div>
  )
}

export default FeaturedPostCard