import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import LOGO from '@public/assets/logo.svg';

import s from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<Link href="/" className={s.container}>
			<Image src={LOGO} alt="Logo" />
		</Link>
	);
};

export default Logo;
