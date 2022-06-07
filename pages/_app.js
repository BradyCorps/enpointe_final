import { AuthProvider } from '@/context/AuthContext';
import SimpleReactLightbox from 'simple-react-lightbox';
import '@/styles/index.scss';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	return (
		<>
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
			<SimpleReactLightbox>
				<AuthProvider>
					{/* Wrap component in AppContext */}

					<Component {...pageProps} />
				</AuthProvider>
			</SimpleReactLightbox>
		</>
	);
}

export default MyApp;
