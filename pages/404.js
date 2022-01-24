import Link from 'next/link';
import Layout from '@/components/Layout';

const NotFoundPage = () => {
	return (
		<Layout title='Page Not Found'>
			<div className='error'>
				<h1>404</h1>
				<h4>Sorry, there is nothing here</h4>
				<Link href='/'>
					<a>Go Back Home</a>
				</Link>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
