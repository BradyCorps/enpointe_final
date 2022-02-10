import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import PostItem from '@/components/PostItem';
import Navbar from '@/components/Navbar/Navbar';
import { API_URL } from '@/config/index';

const SearchPage = ({ posts }) => {
	const router = useRouter();
	return (
		<Layout>
			<Navbar posts={posts} />
			<div className='search-wrapper'>
				<h3 className='search-results'>
					Search Results for {router.query.term}
				</h3>

				{posts.length === 0 && <h3>No Posts to show</h3>}
				{posts.map(pst => (
					<PostItem key={pst.id} pst={pst} />
				))}
				<Link href='/'>
					<button className='auth-button'>Back to Home</button>
				</Link>
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ query: { term } }) {
	const query = qs.stringify({
		_where: {
			_or: [{ title_contains: term }, { description_contains: term }],
		},
	});

	const res = await fetch(`${API_URL}/posts?${query}`);
	const posts = await res.json();

	return {
		props: { posts },
	};
}

export default SearchPage;
