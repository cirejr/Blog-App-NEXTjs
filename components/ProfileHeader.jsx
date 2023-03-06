import React from 'react'
import Image from 'next/image'

const ProfileHeader = ({author}) => {
	return (
		<div className="container mx-auto flex justify-center items-center">
			<div className="relative w-full lg:w-2/3 mx-auto self-center">
				<div className="h-52 bg-black bg-opacity-40 rounded-t-lg border-white border-t-2 border-opacity-20 shadow-xl">

				</div>
				<div className="relative flex gap-3 items-center border-b-2 border-white border-opacity-20 rounded-2xl pb-16 shadow-xl ">
					<Image 
						src={author.photo.url}
						width="150"
						height="150"
						className="rounded-full absolute -top-8 left-8 border-green-300 border-opacity-20 border-4"
					/>
					<div className="flex flex-col gap-2 items-start ml-48 lg:ml-60 mt-5">
						<p className="font-bold text-gray-200 text-2xl">{author.name} </p>
						<p className="text-gray-200 text-sm lg:text-base"> {author.bio}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileHeader