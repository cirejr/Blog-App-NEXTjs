import React, { useState, useEffect, useRef } from 'react'

import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
	const [error, setError] = useState(false);
	const [localStorage, setLocalStorage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const commentEl = useRef();
	const nameEl = useRef();
	const emailEl = useRef();
	const storeDataEl = useRef();

	useEffect(() => {
	  nameEl.current.value = window.localStorage.getItem('name');
	  emailEl.current.value = window.localStorage.getItem('email');
	
	}, [])
	

	const handleCommentSubmission = () => {
		setError(false);

		const { value: comment }= commentEl.current;
		const { value: name }= nameEl.current;
		const {value: email }= emailEl.current;
		const {checked: storeData }= storeDataEl.current;

		if( !comment || !name || !email){
			setError(error)
			return;
		}

		const commentObj = { comment, name, email, slug }

		if(storeData){
			window.localStorage.setItem('name', name);
			window.localStorage.setItem('email', email);
		}else{
			window.localStorage.removeItem('name', name)
			window.localStorage.removeItem('email', email)
		}

		submitComment(commentObj)
			.then(res => {
				setShowSuccessMessage(true);

				setTimeout(() => {
					setShowSuccessMessage(false)
				}, 3000);
			})
	}

  return (
	<div className="bg-white bg-opacity-20 shadow-2xl rounded-lg p-8 pb-12 mb-8">
		<h3 className="text-xl mb-8 font-semibold border-b pb-4"> Laisser un comment</h3>
		<div className="grid grid-cols-1 gap-4 mb-4">
			<textarea 
				className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-purple-400 bg-purple-400 bg-opacity-20 text-gray-700" 
				ref={commentEl} 
				name="comment" 
				placeholder="Comment"
			/>
		</div>
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
			<input 
				type="text" 
				className="py-2 px-4  outline-none w-full rounded-lg focus:ring-2 focus:ring-purple-400 bg-purple-400 bg-opacity-20 text-gray-700" 
				ref={nameEl} 
				name="name" 
				placeholder="Name"
			/>
			<input 
				type="email" 
				className="py-2 px-4  outline-none w-full rounded-lg focus:ring-2 focus:ring-purple-400 bg-purple-400 bg-opacity-20 text-gray-700" 
				ref={emailEl} 
				name="email" 
				placeholder="Email"
			/>
		</div>
		<div className="grid grid-cols-1 gap-4 mb-4">
			<div className="flex gap-2 items-start ">
				<input type="checkbox" name="storeData" id="storeData" value={true} ref={storeDataEl} />
				<label className="text-gray-300 cursor-pointer -mt-1 text-sm" htmlFor="storeData">Save my e-mail & name for next time I comment </label>
			</div>
		</div>
		{error && <p className="text-xs text-red-500">All fields are required.</p>}
		<div className="mt-8">
			<button
				type="button"
				onClick={handleCommentSubmission}
				className="transition duration-500 ease-out hover:bg-indigo-900 bg-purple-900 bg-opacity-50 inline-block rounded-full px-8 py-3 cursor-pointer hover:shadow-xl text-white"
			>
				Post Comment
			</button>
			{showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
		</div>
	</div>
  )
}

export default CommentsForm