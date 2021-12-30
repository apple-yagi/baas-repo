import '../styles/globals.css';
import type { AppProps } from 'next/app';
import RepositoryProvider from '../contexts/RepositoryContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<RepositoryProvider>
		<Component {...pageProps} />
	</RepositoryProvider>
);

export default MyApp;
