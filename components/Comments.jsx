import React, { useState, useEffect} from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
	  getComments(slug)
	  	.then((result) => setComments(result))
	
	}, [])
	
	return (
		<>
			{comments.length > 0 && (
				<div className="bg-black bg-opacity-20 rounded-lg shadow-lg p-8 pb-12 mb-8">
					<h3 className="text-xl text-white mb-8 font-semibold border-b pb-4">
						{comments.length} {' '} {comments.length>1 ? 'Comments':'Comment'} 
					</h3>
					{comments.map(comment => (
						<div 
							key={comment.createdAt}
							className="border-b border-gray-100 mb-4 pb-4"
						>
							<p className="mb-4 text-gray-300">
								<span className="font-semibold">{comment.name}</span>
								{' '} on {' '} {moment(comment.createdAt).format('MMM DD, yyyy ')}
							</p>
							<p className="whitespace-pre-line text-gray-300 w-full">
								{parse(comment.comment)}
							</p>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default Comments