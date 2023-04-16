import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	ApolloLink,
} from '@apollo/client';

const httpLink = new HttpLink({
	uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL, // NestJS GraphQL エンドポイントを指定
});

const authLink = new ApolloLink((operation, forward) => {
	const token = localStorage.getItem('token');

	if (token) {
		operation.setContext({
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	}

	return forward(operation);
});

const apolloclient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default apolloclient;
