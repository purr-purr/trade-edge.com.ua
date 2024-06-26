import { satisfies } from 'next/dist/lib/semver-noop';
import { I18nConfig } from 'next-translate';

export const i18nConfig = {
	locales: ['ua', 'en'],
	defaultLocale: 'ua',
	loader: false,
	pages: {
		'*': ['common'],
	},
	defaultNS: 'common',
} as const satisfies I18nConfig;
