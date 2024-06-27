import BlockTitle from '@modules/common/components/BlockTitle';
import POSTER from '@modules/home/assets/intro.png';
import { useI18n } from '@/i18n/hooks/useI18n';
import s from './RealEstate.module.scss';
import Image from 'next/image';

import ScrollElement from '@modules/common/components/ScrollElement';
import ICON_CALENDAR from '@public/assets/icon-calendar.svg';
import ICON_RULER from '@public/assets/icon-ruler.svg';
import ICON_STAR from '@public/assets/icon-star.svg';
import ICON_MAP from '@public/assets/icon-map.svg';

const RealEstate = () => {
	const { t } = useI18n();

	const benefits = [
		{ icon: ICON_MAP, desc: 'INTRO.KNYAZHYCHI_KYIV_REGION' },
		{ icon: ICON_RULER, desc: 'REAL_ESTATE.COTTAGES_WITH_AN_AREA_OF' },
		{ icon: ICON_STAR, desc: 'REAL_ESTATE.CLASS_COMFORT' },
		{ icon: ICON_CALENDAR, desc: 'REAL_ESTATE.PUTTING_INTO_OPERATION' },
	];

	const engineeringCommunications = ['WATER_SUPPLY', 'VEIN', 'ACCESS_ROADS'];

	return (
		<ScrollElement className={s.container} name="realestate">
			<BlockTitle
				title={t('REAL_ESTATE.TITLE')}
				subTitle={`02 ${t('REAL_ESTATE.SUB_TITLE')}`}
			/>

			<article className={s.inner}>
				<div className={s.info}>
					<h4 className={s.infoTitle}>
						{t('REAL_ESTATE.COUNTRY_COMPLEX_FOR_RECREATION')}
					</h4>
					<ul className={s.benefits}>
						{benefits.map((item) => (
							<li className={s.benefitsItem} key={item.desc}>
								<Image src={item.icon} alt="icon" />
								<p>{t(`${item.desc}`)}</p>
							</li>
						))}
					</ul>
					<h5 className={s.infoSubTitle}>
						{t('REAL_ESTATE.ENGINEERING_COMMUNICATIONS')}
					</h5>
					<ul className={s.communications}>
						{engineeringCommunications.map((item) => (
							<li key={item}>
								<p>{t(`REAL_ESTATE.${item}`)}</p>
							</li>
						))}
					</ul>
				</div>

				<div className={s.poster}>
					<Image className={s.posterImage} src={POSTER} alt="poster" />
				</div>
			</article>
		</ScrollElement>
	);
};

export default RealEstate;
