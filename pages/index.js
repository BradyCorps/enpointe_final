import Layout from '@/components/Layout';
import PostItem from '@/components/PostItem';
import TitleCard from '@/components/TitleCard';
import { API_URL } from '@/config/index';
import Navbar from '@/components/Navbar/Navbar';
import Script from 'next/script';
import ContextWrapper from '@/components/ContextWrapper';

const HomePage = ({ posts }) => {
	return (
		<div>
			<Script
				id='analytics-script'
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script id='analytics-script-public' strategy='lazyOnload'>
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
				page_path: window.location.pathname,
				});
		`}
			</Script>
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

export async function getServerSideProps() {
	const res = await fetch(`${API_URL}/posts?_sort=id:ASC`);
	const posts = await res.json();

	return {
		props: { posts },
	};
}
