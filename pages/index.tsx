import type { NextPage } from 'next';
import router, { useRouter } from 'next/router';

const Home: NextPage = () => {
	const router = useRouter();

	return <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>;
};

export default Home;
