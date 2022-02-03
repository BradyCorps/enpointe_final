import Head from 'next/head';
import { useState, useEffect } from 'react';
import Preloader from './Preloader';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ title, keywords, description, children }) => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 8000);
	}, []);

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content='{description}' />
				<meta name='keyword' content='{keywords}' />
			</Head>
			{loading === true ? (
				<>
					<Header />

					<div className='body-spacing'>{children}</div>
					<Footer />
				</>
			) : (
				<>
					<Header />
					<Preloader />
				</>
			)}
		</div>
	);
};

Layout.defaultProps = {
	title: 'EnPointe | Current RWB News and Articles',
	description:
		'Enjoy a reading experience that opens the curtains on all things Royal Winnipeg Ballet',
	keywords: 'Blog, Dance, Ballet, Events, Shows, Royal Winnipeg Ballet',
};

export default Layout;
