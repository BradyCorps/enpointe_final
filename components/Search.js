import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = () => {
	const [term, setTerm] = useState('');
	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();
		router.push(`/stories/search?term=${term}`);
		setTerm('');
	};
	return (
		<div className='search'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={term}
					onChange={e => setTerm(e.target.value)}
					placeholder='Search Posts'
				/>
			</form>
			<button onClick={handleSubmit}>Search</button>
		</div>
	);
};

export default Search;
