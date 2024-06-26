import { HeaderContextWrapper } from '@modules/layout/context/HeaderContext';
import NavigationButton from '@modules/layout/components/NavigationButton';
import Navigation from '@modules/layout/components/Navigation';
import Logo from '@modules/common/components/Logo';
import { LAPTOP_BREAKPOINT } from '@utils/const';
import s from './Header.module.scss';

import { useMediaQuery } from '@modules/common/hooks';
import {i18nConfig} from "@root/i18n";
import {LanguageSwitcher} from "@/i18n/components/LanguageSwitcher";

const Header = () => {
	const isLaptop = useMediaQuery(LAPTOP_BREAKPOINT);

	return (
		<header className={s.container}>
			<Logo />

			<HeaderContextWrapper>
				<div>
					{i18nConfig.locales.map((locale) => (
						<LanguageSwitcher key={locale} locale={locale} />
					))}
				</div>
				<Navigation />
				{isLaptop && <NavigationButton />}
			</HeaderContextWrapper>
		</header>
	);
};

export default Header;
