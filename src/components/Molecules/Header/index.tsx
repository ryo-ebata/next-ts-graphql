import { LogoutButton } from '../LogoutButton';
import styles from './style.module.css';

export const Header = () => {
	return (
		<nav className={styles.navbar}>
			<div>
				<LogoutButton />
			</div>
		</nav>
	);
};
