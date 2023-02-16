import React, { useContext }from 'react'
import Link from 'next/link'

const Header = () => {
	const categories = [ {name:'React', slug:'react'}, { name: 'Web Development', slug: 'web-dev'}]
  return (
	<div className='container mx-auto px-10 mb-8'>
		<div className='border-b w-full inline-block border-blue-400 py-8'>
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