import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Header = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
	  getCategories()
	  	.then( newCategories => setCategories(newCategories))

	}, [])

return (
	<div className='container mx-auto px-8 lg:px-36 mb-4 sticky top-0 z-50 backdrop-filter backdrop-blur-lg'>
		<div className='w-full inline-block py-8'>
			<div className='md:float-left block'>
				<Link href="/">
					<span className='cursor-pointer font-bold text-4xl text-white'>
						Purple Blog
					</span>
				</Link>
			</div>
			<div className='hidden md:float-left md:contents'>
				{categories.map((categorie) => (
						<Link key={categorie.slug} href={`/categories/${categorie.slug}`}>
							<span className='md:float-right mt-2 align-middle text-white font-semibold ml-4 cursor-pointer'>
								{categorie.name}
							</span>
						</Link>
				))}
			</div>
		</div>
	</div>
  )
}

export default Header