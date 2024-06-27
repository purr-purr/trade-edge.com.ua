import { FC } from 'react';

import s from './BlockTitle.module.scss';

const BlockTitle: FC<{
	title: string;
	subTitle: string;
}> = ({ title, subTitle }) => {
	return (
		<article className={s.container}>
			<h3 className={s.subTitle}>{subTitle}</h3>
			<h2 className={s.title}>{title}</h2>
		</article>
	);
};

export default BlockTitle;
