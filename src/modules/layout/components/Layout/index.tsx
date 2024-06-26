import { FC, type ReactNode } from 'react';

import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import Meta from '@modules/common/components/Meta';

import s from './Layout.module.scss';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Meta />
			<main className={s.container}>
				<Header />
				{children}
				<Footer />
			</main>
		</>
	);
};

export default Layout;
