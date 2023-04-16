import { ChangeEventHandler } from 'react';

export type Props = {
	text: string;
	type: 'text' | 'mail' | 'password';
	value: string | number;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

export const InputSet: React.FC<Props> = ({ text, type, value, onChange }) => {
	return (
		<>
			<label htmlFor={text}>{text}</label>
			<input
				id={text}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={text}
			/>
		</>
	);
};
