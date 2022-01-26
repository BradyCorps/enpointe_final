import { useState } from 'react';
import { API_URL } from '../config';

const ImageUpload = ({ pstId, imageUploaded }) => {
	const [image, setImage] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('files', image);
		formData.append('ref', 'posts');
		formData.append('refId', pstId);
		formData.append('field', 'mainImage');

		const res = await fetch(`${API_URL}/upload`, {
			method: 'POST',
			body: formData,
		});

		if (res.ok) {
			imageUploaded();
		}
	};

	const handleFileChange = e => {
		setImage(e.target.files[0]);
	};

	return (
		<div className='form'>
			<h2>Upload Story Image</h2>
			<form onSubmit={handleSubmit}>
				<div className='file'>
					<input type='file' onChange={handleFileChange} />
				</div>
				<input type='submit' value='Upload' className='btn' />
			</form>
		</div>
	);
};

export default ImageUpload;
