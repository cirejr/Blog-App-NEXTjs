import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_PURPLEBLOG_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection {
				edges {
				node {
					author {
					bio
					name
					username
					excerpt
					id
					photo {
						url
					}
					}
					createdAt
					slug
					title
					excerpt
					featuredImage {
					url
					}
					categories {
					name
					slug
					}
				}
				}
			}
			}
	`
	const result = await request(graphqlAPI, query);

	return result.postsConnection.edges;
}

export const getPostDetails = async (slug) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post( where: { slug : $slug }) {
				author {
					bio
					name
					username
					excerpt
					id
					photo {
						url
					}
				}
				createdAt
				slug
				title
				excerpt
				featuredImage {
					url
				}
				categories {
					name
					slug
				}
				content {
					raw
				}
			}
		}
	`
	const result = await request(graphqlAPI, query, { slug });

	return result.post;
}

export const getRecentPosts = async () => {
	const query = gql`
		query getPostDetails(){
			posts(
				orderBy: createdAt_ASC
				last: 3
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`
	const result = await request(graphqlAPI, query);

	return result.posts;
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`
	const result = await request(graphqlAPI, query)

	return result.categories
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  })
  return result.json();
}

export const getComments = async (slug) => {
	const query = gql`
		query GetComments($slug: String!) {
			comments( where : { post : { slug : $slug }}){
				name
				createdAt
				comment 
			}
		}
	`
	const result = await request(graphqlAPI, query, {slug})

	return result.comments
}

export const getFeaturedPosts = async () => {
	const query = gql`
		query GetFeaturedPosts() {
			posts ( where : { featuredPost : true}){
				title
				author {
					name
					photo {
						url
					}
				}
				slug
				featuredImage {
					url
				}
			}
		}
	`
	const result = await request(graphqlAPI, query)

	return result.posts
}

export const getAuthors = async () => {
	const query = gql `
		query GetAuthors {
			authors {
				name
				username
				excerpt
				bio
				photo {
					url
				}
			}
		}
	`
	const result = await request(graphqlAPI, query)
	
	return result.authors
}

export const getAuthorDetails = async (username) => {
	const query = gql `
			query GetAuthor( $username : String!) {
				author ( where : { username : $username }) {
					name 
					bio
					username
					excerpt
					photo {
						url
					}
					posts {
						title
						featuredImage {
							url
						}
						excerpt
						createdAt
						slug
					}
				}
			}
		`
	const result = await request(graphqlAPI, query, { username })
	console.log('author : ', result.author)
	return result.author
}

