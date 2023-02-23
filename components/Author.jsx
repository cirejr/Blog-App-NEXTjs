import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
	<div className='flex flex-col justify-center items-center text-center mt-20 mb-8 p-12 relative bg-white bg-opacity-20 rounded-lg w-full align-middle'>
		<div className="absolute -top-14">
			<Image 
				height="100"
				width="100"
				unoptimized
				src={author.photo.url}
				alt={author.name}
				className="align-middle rounded-full "
			/>
		</div>
		<h3 className="text-white my-4 text-xl font-bold">
			{author.name}
		</h3>
		<p className="text-white text-lg">{author.bio}</p>
	</div>
  )
}

export default Author