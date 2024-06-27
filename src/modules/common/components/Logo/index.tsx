import Image from 'next/image';
import { FC } from 'react';

import LOGO from '@public/assets/logo.svg';

import s from './Logo.module.scss';
import { Link } from 'react-scroll';

const Logo: FC = () => {
	return (
		<Link
			to="intro"
			spy={true}
			smooth={false}
			className={s.container}
			offset={-300}
		>
			<Image src={LOGO} alt="Logo" />
		</Link>
	);
};

export default Logo;
