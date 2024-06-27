import BlockTitle from '@modules/common/components/BlockTitle';
import {useI18n} from '@/i18n/hooks/useI18n';
import s from './AboutUs.module.scss';

const AboutUs = () => {
	const {t} = useI18n();

	const whyWeAre = [
		{title: 'A_TEAM_OF_PROFESSIONALS', desc: 'OUR_TEAM'},
		{
			title: 'MODERN_MATERIALS_AND_TECHNOLOGIES',
			desc: 'WE_USE_MODERN_MATERIALS'
		},
		{title: 'INDIVIDUAL_APPROACH', desc: 'WE_ADAPT_PROJECTS_TO_YOUR_NEEDS'}
	]

	return (
		<section className={s.container} id="about">
			<BlockTitle
				title={t('ABOUT_US.TITLE')}
				subTitle={`01 ${t('ABOUT_US.SUB_TITLE')}`}
			/>

			<article className={s.inner}>
				<ul className={s.list}>
					{whyWeAre.map((item, index) => (
						<li key={item.title} className={s.listItem}>
							<span className={s.listCounter}>0{index + 1}</span>
							<h5>{t(`ABOUT_US.${item.title}`)}</h5>
							<p>{t(`ABOUT_US.${item.desc}`)}</p>
						</li>
					))}
				</ul>

				<div className={s.poster}>

				</div>
			</article>
		</section>
	);
};

export default AboutUs;
