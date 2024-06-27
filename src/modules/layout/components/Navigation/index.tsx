import {useContext, useEffect} from 'react';

import {HeaderContext} from '@modules/layout/context/HeaderContext';
import {Link} from 'react-scroll';
import cn from 'classnames';

import {useMediaQuery} from '@modules/common/hooks';

import type {INavigationList} from '@utils/types';
import {LAPTOP_BREAKPOINT} from '@utils/const';
import {navigationList} from '@utils/data';

import {useI18n} from '@/i18n/hooks/useI18n';
import s from './Navigation.module.scss';
import {useRouter} from 'next/router';

const Navigation = () => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const {isMobileNavMode, handleMobileNavMode} = useContext(HeaderContext);
	const {t} = useI18n();

	useEffect(() => {
		const element = document.querySelector('html');
		if (!isLaptop) {
			handleMobileNavMode(false);
		}
		if (element) {
			element.setAttribute(
				'style',
				`${isMobileNavMode ? `overflow:hidden;` : ``}`,
			);
		}
	}, [isMobileNavMode, isLaptop]);

	const router = useRouter();

	const handleClick = () => {
		handleMobileNavMode(false);
	};

	return (
		<ul className={cn(s.container, isMobileNavMode && s.active)}>
			{navigationList.map(
				(item: INavigationList) =>
					item.isActive && (
						<li key={item.title} className={s.box}>
							<Link
								to={item.path}
								spy={true}
								smooth={false}
								offset={-100}
								key={item.title}
								className={s.link}
								onClick={handleClick}
							>
								{t(item.title)}
							</Link>
						</li>
					),
			)}
		</ul>
	);
};

export default Navigation;
