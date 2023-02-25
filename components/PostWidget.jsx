import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug}) => {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
	  if(slug){
		getSimilarPosts(categories, slug)
			.then(result => setRelatedPosts(result))
	  }else{
		getRecentPosts()
			.then(result => setRelatedPosts(result))
	  }
	  console.log(relatedPosts)
	}, [slug])
	

  return (
	<div className='bg-black bg-opacity-20 rounded-xl shadow-xl p-8 mb-8 '>
		<h3 className='text-white text-xl mb-8 font-semibold border-b pb-4'>
			{slug? 'Related Posts' : 'Recents Posts'}
		</h3>
		{relatedPosts.map(post => (
			<div key={post.title} className="text-gray-300 flex items-center w-full mb-4">
				<div className='w-16 flex-none'>
					<img 
						src={post.featuredImage.url} 
						alt={post.title} 
						height="60px"
						width="60px"
						className='align-middle rounded-full'
					/>
				</div>
				<div className="flex-grow ml-4">
					<p className="text-gray-500 font-xs">
						{moment(post.createdAt).format('MMM DD, YYYY')}
					</p>
					<Link href={`/posts/${post.slug}`} key={post.title} className="text-md">
						{post.title}
					</Link>
				</div>
			</div>
		))}
	</div>
  )
}

export default PostWidget