import { AuthProvider } from '@/context/AuthContext'
import '@/styles/index.scss'

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp
