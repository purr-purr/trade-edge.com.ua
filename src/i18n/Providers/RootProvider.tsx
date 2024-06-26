import I18nProvider from 'next-translate/I18nProvider';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

import { LanguageWrapper } from '@/i18n/wrappers/LanguageWrapper';
import { getLanguageFile } from '@/i18n/utils/language.util';

import { i18nConfig } from '../../../i18n';

import { Locale } from '@/i18n/types/i18n.type';

interface IRootProvider extends PropsWithChildren {}

/**
 * RootProvider component.
 *
 * This component is responsible for providing the root context for the application.
 * It wraps the children components with the necessary providers and sets the language based on the router query.
 *
 * @component
 * @param props - The component props.
 * @param props.children - The children components to be wrapped.
 * @returns The wrapped children components.
 */
export const RootProvider = ({ children }: IRootProvider) => {
	const router = useRouter();

	const lang = i18nConfig.locales.includes(router.query.locale as Locale)
		? (router.query.locale as Locale)
		: i18nConfig.defaultLocale;

	return (
		<I18nProvider lang={lang} namespaces={getLanguageFile(lang)}>
			<LanguageWrapper>{children}</LanguageWrapper>
		</I18nProvider>
	);
};