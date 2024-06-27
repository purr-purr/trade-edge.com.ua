import type { FC, ReactNode } from 'react';
import { useRef } from 'react';

const ScrollToElement: FC<{
	children?: ReactNode;
	className?: string;
	name?: string;
}> = ({ children, className, ...rest }) => {
	const parentBindings = useRef<{ domNode: HTMLElement | null }>({
		domNode: null,
	});
	const { ...restProps } = rest;
	return (
		<section
			className={className && className}
			{...restProps}
			ref={(el: HTMLElement | null) => {
				parentBindings.current.domNode = el;
			}}
		>
			{children}
		</section>
	);
};

export default ScrollToElement;
