import Head from 'next/head'

import { PostCard, PostWidget, Categories} from '../components'
import { getPosts, graphqlAPI } from '../services'
import { FeaturedPosts } from './sections'


const Home = ({ posts }) => {
	return (
		<div className="container mx-auto px-10 mb-8">
		<Head>
			<title>Tell Us</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<FeaturedPosts />
		<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-10'>
			{posts.map((post, index) => <PostCard className='col-span-1' key={post.node.title} post={post.node} />)}
		</div>
		</div>

	)
}

export async function getStaticProps(){
	const posts = await (getPosts()) || []

	return {
		props: {
			posts
		}
	}
}

export default Home
