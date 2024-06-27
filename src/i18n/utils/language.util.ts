import commonEN from '@root/locales/en/common.json';
import commonUA from '@root/locales/ua/common.json';

import { Locale } from '@/i18n/types/i18n.type';

/**
 * Retrieves the language file based on the specified language.
 *
 * @param lang - The language code.
 * @returns The language file containing common and dynamic translations.
 */
export const getLanguageFile = (lang: Locale) => {
	switch (lang) {
		case 'ua':
			return {
				common: commonUA,
			};
		case 'en':
			return {
				common: commonEN,
			};
		default:
			return {
				common: commonUA,
			};
	}
};
