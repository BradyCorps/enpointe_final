import { AuthProvider } from '@/context/AuthContext';
import SimpleReactLightbox from 'simple-react-lightbox';
import '@/styles/index.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
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
