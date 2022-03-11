import {
	packs,
	boxPalette,
	tokens,
	mapSpacing,
	Spacing,
} from '@ag.ds-next/core';

const variants = {
	primary: {
		background: boxPalette.foregroundAction,
		borderColor: boxPalette.foregroundAction,
		color: boxPalette.backgroundBody,
		textDecoration: 'none',

		'&:not(:disabled):hover': {
			background: boxPalette.foregroundText,
			borderColor: boxPalette.foregroundText,
			color: boxPalette.backgroundBody,
			...packs.underline,
		},
	},
	secondary: {
		background: 'transparent',
		borderColor: boxPalette.foregroundAction,
		color: boxPalette.foregroundAction,
		textDecoration: 'none',

		'&:not(:disabled):hover': {
			background: 'transparent',
			borderColor: boxPalette.foregroundText,
			color: boxPalette.foregroundText,
			...packs.underline,
		},
	},
	tertiary: {
		background: 'transparent',
		borderColor: 'transparent',
		color: boxPalette.foregroundAction,
		...packs.underline,

		'&:not(:disabled):hover': {
			background: 'transparent',
			borderColor: 'transparent',
			color: boxPalette.foregroundText,
			textDecoration: 'none',
		},
	},
} as const;

export type ButtonVariant = keyof typeof variants;

const sizes = {
	sm: {
		...packs.input.sm,
		gap: mapSpacing(0.25),
		paddingLeft: mapSpacing(0.75),
		paddingRight: mapSpacing(0.75),
	},
	md: {
		...packs.input.md,
		gap: mapSpacing(0.5),
		paddingLeft: mapSpacing(1.5),
		paddingRight: mapSpacing(1.5),
	},
};

export type ButtonSize = keyof typeof sizes;

export const iconSize: Record<ButtonSize, Spacing> = {
	sm: 1,
	md: 1.5,
};

export function buttonStyles({
	block,
	variant,
	size,
}: {
	block: boolean;
	variant: ButtonVariant;
	size: ButtonSize;
}) {
	return {
		...variants[variant],
		...sizes[size],

		appearance: 'none',
		display: block ? 'flex' : 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'solid',
		borderRadius: tokens.borderRadius,
		cursor: 'pointer',
		fontFamily: tokens.font.body,
		boxSizing: 'border-box',
		margin: 0,
		textAlign: 'center',

		...(block && {
			width: '100%',
		}),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': packs.outline,
	} as const;
}
