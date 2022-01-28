import Layout from '@/components/Layout';
import { useState } from 'react';
import DashboardPost from '@/components/DashboardPost';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/config/index';

const DashboardPage = ({ posts, token }) => {
	const [psts, setPsts] = useState(posts);

	const deletePost = async id => {
		if (confirm('Are you Sure?')) {
			const res = await fetch(`${API_URL}/posts/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const data = await res.json();

			if (!res.ok) {
				toast.error(data.message);
			} else {
				const newPsts = psts.filter(pst => pst.id !== id);
				setPsts(newPsts);
			}
		}
	};
	return (
		<Layout>
			<div className='dash'>
				<h2>Dashboard</h2>
				<h3>My Posts</h3>

				{posts.map(pst => (
					<DashboardPost key={pst.id} pst={pst} handleDelete={deletePost} />
				))}
			</div>
		</Layout>
	);
};

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req);

	const res = await fetch(`${API_URL}/posts/me`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const posts = await res.json();

	return {
		props: {
			posts,
			token,
		},
	};
}

export default DashboardPage;
