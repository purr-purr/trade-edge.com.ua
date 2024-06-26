import { Head, Html, Main, NextScript } from 'next/document';

import { i18nConfig } from '../../i18n';

export default function Document(props: any) {
	const currentLocale =
		props.__NEXT_DATA__.query.locale ?? i18nConfig.defaultLocale;

	return (
		<Html lang={currentLocale}>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
				<meta name="robots" content="noindex"/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
