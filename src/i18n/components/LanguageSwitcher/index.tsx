import { LanguageSwitcherButton } from '@/i18n/components/LanguageSwitcherButton';
import s from './LanguageSwitcher.module.scss';
import { i18nConfig } from '@root/i18n';
import { Fragment } from 'react';

const LanguageSwitcher = () => {
	return (
		<nav className={s.container}>
			{i18nConfig.locales.map((locale: 'ua' | 'en', index: number) => (
				<Fragment key={locale}>
					<LanguageSwitcherButton key={locale} locale={locale} />
					{index === 0 && '/'}
				</Fragment>
			))}
		</nav>
	);
};

export default LanguageSwitcher;
