import { API_URL } from '@/config/index';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar/Navbar';
import PostItem from '@/components/PostItem';
import TitleCard from '@/components/TitleCard';

const PostPage = ({ posts }) => {
	return (
		<div>
			{/* <Navbar posts={posts} /> */}
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

export default PostPage;

export async function getServerSideProps() {
	const res = await fetch(`${API_URL}/posts?_sort=id:ASC`);
	const posts = await res.json();

	return {
		props: { posts },
	};
}
