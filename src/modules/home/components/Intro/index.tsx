import s from './Intro.module.scss';
import {useI18n} from "@/i18n/hooks/useI18n";

const Intro = () => {
	const { t } = useI18n();
	return (
		<section className={s.container}>
			<h1><p>{t('title')}</p></h1>
		</section>
	);
};

export default Intro;
