import { ApolloProvider } from '@apollo/client';
import React from 'react';
import apolloClient from '../src/libs/apolloClient';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CommonTemplate } from '../src/components/Templates/common';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<React.StrictMode>
				<CommonTemplate>
					<Component {...pageProps} />
				</CommonTemplate>
			</React.StrictMode>
		</ApolloProvider>
	);
}

export default MyApp;
