import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const ProfilPosts = ({ author }) => {
  return (
	<div className="container mx-auto mt-16 shadow-xl rounded-lg">
		<div className="flex gap-3 md:gap-12 flex-wrap items-center justify-center">
			{ author.posts.map(post => (
				<Link href={`/posts/${post.slug}`}>
					<div 
						key={post.slug}
						className="relative rounded-lg shadow-lg w-64 h-80 md:w-80 lg:h-96 mb-4"
						style={{ backgroundImage : `url(${post.featuredImage.url})`, 
								zIndex: -1,
								backgroundPosition: '50% 50%',
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover'}}
					>
						<div className="rounded-lg p-4 flex flex-col items-center justify-center backdrop-blur-sm backdrop-filter z-10 w-full h-full">
							<h4 className="text-2xl text-white font-bold mb-5"> {post.title} </h4>
							<p className="text-white font-semibold"> {moment(post.createdAt).format('MMM DD, YYYY')} </p>
							<div className="absolute self-start bottom-2 flex gap-3 items-center">
								<Image 
									width="50"
									height="50"
									src={author.photo.url}
									className="rounded-full shadow-lg"
								/>
								<p className="text-white font-bold text-xl"> {author.name} </p>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	</div>
  )
}

export default ProfilPosts