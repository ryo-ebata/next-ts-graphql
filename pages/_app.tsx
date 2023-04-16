import { ApolloProvider } from '@apollo/client';
import React from 'react';
import apolloClient from '../src/libs/apolloClient';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<React.StrictMode>
				<Component {...pageProps} />
			</React.StrictMode>
		</ApolloProvider>
	);
}

export default MyApp;
