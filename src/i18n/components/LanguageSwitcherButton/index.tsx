import { useRouter } from 'next/router';
import Link from 'next/link';

import { languageDetector } from '@/i18n/lib/languageDetector';
import s from './LanguageSwitcherButton.module.scss';
import cn from 'classnames';

interface LanguageSwitcherProps {
	locale: string;
	href?: string;
	asPath?: string;
}

/**
 * Renders a language switcher button that allows the user to switch between different locales.
 *
 * @param props - The props object containing the locale, href, and asPath.
 * @returns The language switcher button.
 */

export const LanguageSwitcherButton = ({
	locale,
	...rest
}: LanguageSwitcherProps) => {
	const router = useRouter();

	let href = rest.href || router.asPath;
	let pName = router.pathname;
	Object.keys(router.query).forEach((k) => {
		if (k === 'locale') {
			pName = pName.replace(`[${k}]`, locale);
			return;
		}
		pName = pName.replace(`[${k}]`, String(router.query[k]));
	});
	if (locale) {
		href = rest.href ? `/${locale}${rest.href}` : pName;
	}

	const languageTranslation = {
		ua: 'укр',
		en: 'en',
	};

	const isActive = router.query.locale === locale;

	return (
		<Link
			className={cn(s.container, isActive && s.active)}
			href={href}
			onClick={() => languageDetector.cache && languageDetector.cache(locale)}
			locale={locale}
		>
			{languageTranslation[locale as 'ua' | 'en']}
		</Link>
	);
};
