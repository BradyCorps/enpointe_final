import Layout from '@/components/Layout';
import TitleCard from '@/components/TitleCard';
import Head from 'next/head';

export default function HomePage() {
	return (
		<div>
			<Layout>
				<TitleCard />
			</Layout>
		</div>
	);
}
