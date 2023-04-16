import { useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Btn } from '../../src/components/Atoms/Btn';
import { InputSet } from '../../src/components/Molecules/InputSet';
import { LOGIN } from '../../src/gql/auth/LOGIN';
import { NextPage } from 'next';

const Login: NextPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [login, { data, loading, error }] = useMutation(LOGIN);

	useEffect(() => {
		if (data) {
			console.log(data);
			// ログイン成功時の処理をここに書く
			const accessToken = data.login.refresh_token;
			localStorage.setItem('token', accessToken);
			console.log('Login successful!');
		}
	}, [data]);

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

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: </p>;

	return (
		<div>
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
			{data && (
				<>
					<p>User: {data.login.user.name}</p>
					<p>Email: {data.login.user.email}</p>
					<p>Access Token: {data.login.access_token}</p>
				</>
			)}
		</div>
	);
};

export default Login;
