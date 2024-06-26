import { RootProvider } from '@/i18n/Providers/RootProvider';

import '@styles/globals.scss';

import type { AppProps } from 'next/app';

import Layout from '@/modules/layout/components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<RootProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RootProvider>
	);
};

export default App;
