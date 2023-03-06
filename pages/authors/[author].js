import React from 'react'

import {ProfileHeader, ProfilPosts} from '../../components'
import { getAuthorDetails, getAuthors } from '../../services'

const AuthorDetails = ({ author }) => {

	return (
		<div className="container x-auto px-10">
			<ProfileHeader author={author} />
			<ProfilPosts author={author} />
		</div>
	)
}

export default AuthorDetails

export async function getStaticProps({ params }){
	const author = await getAuthorDetails(params.author)

	return {
		props: {
			author
		}
	}
}

export const getStaticPaths = async () => {
  
  const authors = await getAuthors();

  const paths = authors.map(author => ({ params: { author: author.username } }))
  
  return { paths, fallback: false }
}