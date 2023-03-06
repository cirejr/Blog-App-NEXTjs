import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {
  return (
	<div className='bg-white bg-opacity-20 shadow-lg rounded-lg p-0 lg:p-8 w-11/12 pb-12 mb-8'>
		<div className='relative overflow-hidden shadow-md mb-6'>
			<img src={post.featuredImage.url} 
				alt={post.title}
				className="w-full h-80 rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg "
			/>
		</div>
		<h1 className='transition duration-700 text-center mb-8
			cursor-pointer hover:text-pink-600 text-3xl font-semibold
		'>
			<Link href={`/posts/${post.slug}`}> {post.title} </Link>
		</h1>
		<div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
			<Link href={`/authors/${post.author.username}`}>
				<div className='flex gap-2 items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
					<img 
						src={post.author.photo.url}
						alt={post.author.name}
						height="30px"
						width="30px"
						className="rounded-full align-middle"
					/>
					<p className='align-middle inline text-gray-700 text-lg'>{post.author.name}</p>
				</div>
			</Link>
			<div className='font-medium text-gray-700'>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              	</svg>
				<span>
					{moment(post.createdAt).format('MMM DD, YYYY')}
				</span>
			</div>	
		</div>
		<div className='text-center'>
			<Link href={`/posts/${post.slug}`}>
				<span className='px-8 py-3 bg-purple-500 hover:bg-purple-700 rounded-3xl text-white text-lg font-medium transition duration-700 transform hover:-translate-y-1 inline-block cursor-pointer'>Read Article</span>
			</Link>
		</div>
	</div>
  )
}

export default PostCard