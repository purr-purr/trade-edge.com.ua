import Link from 'next/link';
import { FC } from 'react';

import { COMPANY_NAME } from '@utils/const';

import s from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<Link href="/" className={s.container}>
			{COMPANY_NAME[0]}
			<span>{COMPANY_NAME[1]}</span>
		</Link>
	);
};

export default Logo;
