import {APP_AUTHOR_SIGNATURE, APP_AUTHOR_WEBSITE} from '@utils/const';

import s from './Footer.module.scss';
import {useI18n} from "@/i18n/hooks/useI18n";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const {t} = useI18n();

	return (
		<footer className={s.container}>
			<p>{currentYear}/ {t('COMMON.ALL_RIGHTS_RESERVED')}</p>
			<p>
				{t('COMMON.WEBSITE_DEVELOPMENT')}{' '}
				<a target="_blank" rel="noreferrer" href={APP_AUTHOR_WEBSITE}>
					{APP_AUTHOR_SIGNATURE}
				</a>
			</p>
		</footer>
	);
};

export default Footer;
