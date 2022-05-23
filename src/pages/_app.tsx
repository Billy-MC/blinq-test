import '../styles/globals.css';
import type { AppProps } from 'next/app';

import 'normalize.css/normalize.css';
import Layout from '@/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
