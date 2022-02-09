import Layout from '@/components/Layout';
import PostItem from '@/components/PostItem';
import TitleCard from '@/components/TitleCard';
import { API_URL } from '@/config/index';
import Navbar from '@/components/Navbar/Navbar';

const HomePage = ({ posts }) => {
	return (
		<div>
			<Navbar posts={posts} />
			<Layout posts={posts}>
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
	const res = await fetch(`${API_URL}/posts`);
	const posts = await res.json();

	return {
		props: { posts },
		revalidate: 1,
	};
}
