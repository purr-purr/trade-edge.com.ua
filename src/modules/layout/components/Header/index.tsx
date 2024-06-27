import {HeaderContextWrapper} from '@modules/layout/context/HeaderContext';
import NavigationButton from '@modules/layout/components/NavigationButton';
import Navigation from '@modules/layout/components/Navigation';
import Logo from '@modules/common/components/Logo';
import {LAPTOP_BREAKPOINT, MOBILE_BREAKPOINT} from '@utils/const';
import s from './Header.module.scss';

import {useMediaQuery} from '@modules/common/hooks';
import {useEffect, useState} from "react";
import cn from "classnames";
import LanguageSwitcher from "@/i18n/components/LanguageSwitcher";

const Header = () => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	const [scrollTop, setScrollTop] = useState<number>(0);
	const scrollTopGap = isMobile ? 20 : 100;

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={cn(s.container, scrollTop > scrollTopGap && s.active)}>
			<Logo/>

			<HeaderContextWrapper>
				<LanguageSwitcher/>
				<Navigation/>
				{isLaptop && <NavigationButton/>}
			</HeaderContextWrapper>
		</header>
	);
};

export default Header;
