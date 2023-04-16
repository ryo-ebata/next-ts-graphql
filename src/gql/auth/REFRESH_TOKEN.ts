import { gql } from '@apollo/client';

export const REFRESH_TOKEN = gql`
	mutation RefreshToken {
		refreshToken {
			user {
				name
				email
			}
			access_token
			refresh_token
		}
	}
`;
