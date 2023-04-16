export type Props = {
	children: string;
};

export const Text: React.FC<Props> = ({ children }) => {
	return <p>{children}</p>;
};
