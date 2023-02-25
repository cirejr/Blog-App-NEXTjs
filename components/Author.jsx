import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
	<div className='flex flex-col justify-center items-center text-center mt-20 mb-8 p-12 relative bg-black bg-opacity-20 rounded-xl shadow-xl w-full align-middle hover:-translate-y-2 transition duration-300 ease-in-out'>
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
		<p className="text-white text-sm">{author.bio}</p>
	</div>
  )
}

export default Author