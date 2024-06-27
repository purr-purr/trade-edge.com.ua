import {FC, type ReactNode} from 'react';

import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';
import Meta from '@modules/common/components/Meta';
import {Montserrat} from 'next/font/google';

import s from './Layout.module.scss';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	style: ['normal', 'italic'],
});

const Layout: FC<{ children: ReactNode }> = ({children}) => {
	return (
		<>
			<Meta/>
			<main className={`${montserrat.className} ${s.container}`}>
				<Header/>
				{children}
				<Footer/>
			</main>
		</>
	);
};

export default Layout;
