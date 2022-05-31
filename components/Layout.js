import Head from 'next/head';
import { useState, useEffect } from 'react';
import Preloader from './Preloader';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ title, keywords, description, children, posts }) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 8000);
	}, []);

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keyword' content={keywords} />
			</Head>

			{loading === true ? (
				<>
					<div className='body-spacing'>{children}</div>
					<Footer />
				</>
			) : (
				<>
					<Preloader />
				</>
			)}
		</div>
	);
};

Layout.defaultProps = {
	title: 'RWB EnPointe | Current RWB News and Articles',
	description:
		'Enpointe is a reading experience that opens the curtains on all things Royal Winnipeg Ballet',
	keywords:
		'Blog, Dance, Ballet, Events, Shows, Royal Winnipeg Ballet, RWB, Enpointe',
};

export default Layout;
