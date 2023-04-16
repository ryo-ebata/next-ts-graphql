import { MouseEventHandler, ReactNode } from 'react';

export type Props = {
	children: ReactNode;
	type: 'submit' | 'button';
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Btn: React.FC<Props> = ({ children, type, onClick }) => {
	return (
		<button type={type} onClick={onClick}>
			{children}
		</button>
	);
};
