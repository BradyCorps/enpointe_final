import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';

const AddPostPage = () => {
	const [values, setValues] = useState({
		title: '',
		description: '',
		body: '',
	});

	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();
		console.log('submit');
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	return (
		<Layout>
			<h2>Add Post</h2>
			<form className='form-add' onSubmit={handleSubmit}>
				<div className='grid-add'>
					<div>
						<label htmlFor='title'>Post Title</label>
						<input
							type='text'
							id='title'
							name='title'
							value={values.name}
							onChange={handleInputChange}></input>
					</div>
				</div>
			</form>
			<Link href='/'>
				<button>Go Back</button>
			</Link>
		</Layout>
	);
};

export default AddPostPage;
