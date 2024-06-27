import Link from 'next/link';

import BlockTitle from '@modules/common/components/BlockTitle';

import { COMPANY_EMAIL, COMPANY_MAP_LINK, COMPANY_PHONE } from '@utils/const';

import ScrollElement from '@modules/common/components/ScrollElement';
import { useI18n } from '@/i18n/hooks/useI18n';
import s from './Contacts.module.scss';

interface IContactItem {
	title: string;
	desc: string;
	link?: string;
}

const Contacts = () => {
	const { t } = useI18n();

	const contactsList: IContactItem[] = [
		{
			title: 'LEGAL_PERSON',
			desc: 'LIMITED_LIABILITY_COMPANY',
		},
		{
			title: 'PHONE',
			desc: COMPANY_PHONE,
			link: `tel:${COMPANY_PHONE}`,
		},
		{
			title: 'ADDRESS',
			desc: 'REAL_ADDRESS',
		},
		{
			title: 'EMAIL',
			desc: COMPANY_EMAIL,
			link: `mailto:${COMPANY_EMAIL}`,
		},
	];

	return (
		<ScrollElement className={s.container} name="contacts">
			<BlockTitle
				title={t('CONTACTS.TITLE')}
				subTitle={`03 ${t('CONTACTS.SUB_TITLE')}`}
			/>
			<ul className={s.contacts}>
				{contactsList.map((item) => (
					<li key={item.title} className={s.contactsInner}>
						<dl>
							<dt>{t(`CONTACTS.${item.title}`)}</dt>
							<dd>
								{item.link ? (
									<Link href={item.link} target="_blank">
										{item.desc}
									</Link>
								) : (
									t(`CONTACTS.${item.desc}`)
								)}
							</dd>
						</dl>
					</li>
				))}
			</ul>

			<div className={s.map}>
				<iframe
					className={s.mapFrame}
					src={COMPANY_MAP_LINK}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</ScrollElement>
	);
};

export default Contacts;
