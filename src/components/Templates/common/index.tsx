import { ReactNode } from 'react';
import { Header } from '../../Molecules/Header';
import styles from './style.module.css';

export type Props = {
	children: ReactNode;
};

export const CommonTemplate: React.FC<Props> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className={styles.wrap}>{children}</div>
		</div>
	);
};
