import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';

const editPostPage = ({ pst }) => {
	const [values, setValues] = useState({
		title: pst.title,
		description: pst.description,
		body: pst.body,
	});
	const [imagePreview, setImagePreview] = useState(
		pst.mainImage ? pst.mainImage.formats.thumbnail.url : null
	);

	const router = useRouter();

	const handleSubmit = async e => {
		e.preventDefault();
		// Validation loops thorugh and checks if the value is empty using a high order method(some)
		const hasEmptyFields = Object.values(values).some(
			element => element === ''
		);

		if (hasEmptyFields) {
			toast.error('Please Fill in Fields');
		}

		const res = await fetch(`${API_URL}/posts/${pst.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});

		if (!res.ok) {
			toast.error('Something Went Wrong');
		} else {
			const pst = await res.json();
			router.push(`/stories/${pst.slug}`);
		}
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	return (
		<Layout title='Add New Post'>
			<h2>Edit Post</h2>
			<ToastContainer />
			<Link href='/'>
				<button>Go Back</button>
			</Link>
			<form className='form-add' onSubmit={handleSubmit}>
				<div className='grid-add'>
					<div>
						<label htmlFor='title'>Post Title</label>
						<input
							type='text'
							id='title'
							name='title'
							value={values.title}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='description'>Add Description</label>
						<input
							type='text'
							name='description'
							id='description'
							value={values.description}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div>
					<label htmlFor='body'>Add Body</label>
					<textarea
						type='text'
						name='body'
						id='body'
						value={values.body}
						onChange={handleInputChange}
					/>
				</div>
				<input type='submit' value='Submit Edited Post' className='btn'></input>
			</form>
			<h2>Story Image</h2>
			{imagePreview ? (
				<img src={imagePreview} alt='Preview' />
			) : (
				<div>
					<h2>No Image Uploaded</h2>
				</div>
			)}
			<button>Set Image</button>
		</Layout>
	);
};

export async function getServerSideProps({ params: { id } }) {
	const res = await fetch(`${API_URL}/posts/${id}`);
	const pst = await res.json();

	return {
		props: {
			pst,
		},
	};
}

export default editPostPage;
