import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { LOGIN } from '../../../gql/auth/LOGIN';
import { InputSet } from '../../Atoms/InputSet';
import { Btn } from '../../Atoms/Btn';

export type Props = {};

export const LoginForm: React.FC<Props> = ({}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [login, { data, loading, error }] = useMutation(LOGIN);

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		await login({
			variables: {
				email,
				password,
			},
		});
		setEmail('');
		setPassword('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<InputSet
				type="mail"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				text="Email"
			/>
			<InputSet
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				text="Password"
			/>
			<Btn type="submit">Login</Btn>
		</form>
	);
};
