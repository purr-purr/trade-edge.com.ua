import { FC, type ReactNode } from 'react';

import s from './SplitBlocks.module.scss';

const SplitBlocks: FC<{
	children: ReactNode;
	title: string;
	anchor?: string;
}> = ({ children, title, anchor }) => {
	return (
		<article className={s.container} id={anchor}>
			<aside className={s.leftSide}>
				<h4 className={s.title}>{title}</h4>
			</aside>

			<div className={s.rightSide}>{children}</div>
		</article>
	);
};

export default SplitBlocks;
