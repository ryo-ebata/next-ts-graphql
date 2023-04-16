import type { NextPage } from 'next';
import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { LOGIN } from '../src/gql/auth/LOGIN';

const Home: NextPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [login, { data, loading, error }] = useMutation(LOGIN);

	useEffect(() => {
		if (data) {
			// ログイン成功時の処理をここに書く
			const accessToken = data.login.access_token;
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
				<label htmlFor="">email</label>
				<input
					type="mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<label htmlFor="">password</label>
				<input
					type="text"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<button type="submit">Login</button>
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

export default Home;
