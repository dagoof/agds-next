import { forwardRef, ButtonHTMLAttributes } from 'react';
import { focusStyles, linkStyles } from '@ag.ds-next/box';
import { LinkProps, useLinkComponent } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';

export type TextLinkProps = LinkProps;

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
	function TextLink(props, ref) {
		const Link = useLinkComponent();
		return <Link ref={ref} css={[linkStyles, focusStyles]} {...props} />;
	}
);

export type TextButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
	function TextButton(props, ref) {
		return <BaseButton ref={ref} css={[linkStyles, focusStyles]} {...props} />;
	}
);
