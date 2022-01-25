import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

// import Showcase from './Showcase';

const Layout = ({ title, keywords, description, children }) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content='{description}' />
				<meta name='keyword' content='{keywords}' />
			</Head>
			<Header />
			<div className='body-spacing'>{children}</div>
			<Footer />
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
