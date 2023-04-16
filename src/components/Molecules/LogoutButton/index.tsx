import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../../gql/auth/LOGOUT';
import { Btn } from '../../Atoms/Btn';
import { useRouter } from 'next/router';

export const LogoutButton = () => {
	const [logoutMutation] = useMutation(LOGOUT);

	const router = useRouter();

	const handleLogoutClick = () => {
		logoutMutation()
			.then(() => {
				// ログアウト成功時の処理
				router.push('/');
			})
			.catch((error) => {
				// エラー発生時の処理
				window.alert(`Error: ${error}`);
			});
	};

	return (
		<Btn type="button" onClick={handleLogoutClick}>
			ログアウト
		</Btn>
	);
};
