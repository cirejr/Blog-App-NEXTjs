import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { getAuthors } from '../../services'

const Authors = () => {
	
	const [authors, setAuthors] = useState([])
	
	useEffect(() => {
		getAuthors()
		.then(newAuthors => setAuthors(newAuthors))
	}, [])
	
	return (
		<div className="container">
			<div className="w-full flex flex-wrap justify-center items-center gap-3">
				{authors.map( author => (					
					<div class="w-full max-w-sm px-4 relative" key={author.name}>
						<Link href={`/authors/${author.name}`}>
							<div class="flex flex-col justify-center items-center text-center mt-20 mb-8 p-12 z-20
										rounded-xl shadow-xl w-full align-middle hover:-translate-y-2
										transition duration-300 ease-in-out relative bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-20"
							>
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
								<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{author.name}</h5>
								<span class="text-sm text-gray-500 dark:text-gray-200">{author.bio}</span>
								<div class="flex mt-4 space-x-3 md:mt-6">
									<Link href={author.name} 
										className="inline-flex items-center px-4 py-2 text-sm font-medium 
											text-center text-white rounded-lg shadow-lg bg-transparent bg-opacity-20 
											hover:bg-purple-800 backdrop-filter backdrop-blur"
									>Show Profile</Link>
								</div>
							</div>
						</Link>
					</div>
				) )}
			</div>
		</div>
	)
}

export default Authors