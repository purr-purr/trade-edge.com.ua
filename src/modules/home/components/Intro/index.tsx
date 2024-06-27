import { useI18n } from '@/i18n/hooks/useI18n';
import s from './Intro.module.scss';
import Image from 'next/image';

import ScrollElement from '@modules/common/components/ScrollElement';
import LOGO_TEXT from '@public/assets/logo-text.svg';
import ICON_MAP from '@public/assets/icon-map.svg';
import POSTER from '../../assets/intro.png';

const Intro = () => {
	const { t } = useI18n();

	const keyWords = [
		'CONTEMPORARY_DESIGN',
		'COMFORT',
		'INNOVATIVE_SOLUTIONS',
		'INSPIRATION',
	];

	return (
		<ScrollElement className={s.container} name="intro">
			<Image className={s.title} src={LOGO_TEXT} alt="Text logo" />

			<article className={s.inner}>
				<div className={s.info}>
					<ul className={s.keyWords}>
						{keyWords.map((item) => (
							<li key={item}>{t(`INTRO.${item}`)}</li>
						))}
					</ul>
					<p className={s.infoDescription}>{t('INTRO.CREATING_COZY_PLACES')}</p>
				</div>

				<div className={s.poster}>
					<div className={s.posterText}>
						<p>{t('INTRO.COUNTRY_COMPLEX_FOR_RECREATION')}</p>
						<p>
							<Image src={ICON_MAP} alt="icon" />
							{t('INTRO.KNYAZHYCHI_KYIV_REGION')}
						</p>
					</div>

					<Image className={s.posterImage} src={POSTER} alt="poster" />
				</div>
			</article>
		</ScrollElement>
	);
};

export default Intro;
