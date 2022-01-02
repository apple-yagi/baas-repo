import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import RepositoryProvider from '../contexts/RepositoryContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<RepositoryProvider>
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	</RepositoryProvider>
);

export default MyApp;
