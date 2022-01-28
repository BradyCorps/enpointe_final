import Link from 'next/link';
import Layout from '@/components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';

const StoryPage = ({ pst }) => {
	const router = useRouter();

	return (
		<div>
			<Layout>
				<h2>{pst.title}</h2>
				<ToastContainer />
				<h3>{pst.description}</h3>

				<Link href='/stories'>
					<button>See All Stories</button>
				</Link>
			</Layout>
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch(`${API_URL}/posts`);
	const posts = await res.json();

	const paths = posts.map(pst => ({
		params: { slug: pst.slug },
	}));
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const res = await fetch(`${API_URL}/posts?slug=${slug}`);

	const stories = await res.json();
	return {
		props: {
			pst: stories[0],
		},
		revalidate: 1,
	};
}

// export async function getServerSideProps({ query: { slug } }) {
// 	const res = await fetch(`${API_URL}/api/posts/${slug}`);

// 	const stories = await res.json();
// 	return {
// 		props: {
// 			pst: stories[0],
// 		},
// 	};
// }
export default StoryPage;
