import Layout from '@/components/Layout';
import PostItem from '@/components/PostItem';
import TitleCard from '@/components/TitleCard';
import { API_URL } from '@/config/index';
import Head from 'next/head';

const HomePage = ({ posts }) => {
	return (
		<div>
			<Layout>
				<TitleCard />
				{posts.length === 0 && <h3>No Posts to show</h3>}
				{posts.map(pst => (
					<PostItem key={pst.id} pst={pst} />
				))}
			</Layout>
		</div>
	);
};

export default HomePage;

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/posts`);
	const posts = await res.json();

	return {
		props: { posts },
		revalidate: 1,
	};
}
