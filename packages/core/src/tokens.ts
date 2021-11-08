// Tokens

const breakpoints = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
} as const;
const rem = '16px';

/** "unit" used for all type and grid calculations */
const unit = 4;
const font = {
	body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
	monospace:
		"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};
export type Font = 'body' | 'mono';

/** Predetermined pixel sizes from a 1.25 type-scale rounded to the nearest "unit" (vertical grid) */
const fontsize = {
	xs: '14px',
	sm: '16px',
	md: '20px',
	lg: '24px',
	xl: '32px',
	xxl: '40px',
	xxxl: '48px',
};
export type FontSize = keyof typeof fontsize;

const fontWeight = {
	normal: 'normal',
	bold: 'bold',
} as const;

/** lineHeight-map - Predetermined line-height mapped to keyword */
const lineHeight = {
	nospace: 1,
	heading: 1.25,
	default: 1.5,
};

export type LintHeight = keyof typeof lineHeight;

const spacing = {
	[0]: '0',
	[0.25]: '1px',
	[0.5]: '2px',
	[0.75]: '3px',
	[1]: '4px',
	[1.5]: '6px',
	[2]: '8px',
	[3]: '12px',
	[4]: '16px',
	[5]: '20px',
	[6]: '24px',
};

export type Spacing = keyof typeof spacing;

/* awe-maxwidth for line lengths (the ‘measure’) */
const maxwidth = '42em';

/** Colors light theme */

export type ColorTheme = {
	foreground: {
		text: string;
		action: string;
		focus: string;
		hint: string;
		hintAlt: string;
		muted: string;
	};
	background: {
		page: string;
		shade: string;
		pageAlt: string;
		shadeAlt: string;
	};
	border: {
		default: string;
	};
};

const light: ColorTheme = {
	foreground: {
		text: '#313131',
		action: '#00698f',
		focus: '#9263de',
		hint: '#6f777b',
		hintAlt: '#61696b',
		muted: '#626262',
	},
	background: {
		page: '#FFFFFF',
		shade: '#f5f5f5',
		pageAlt: '#ebebeb',
		shadeAlt: '#e0e0e0',
	},
	border: {
		default: '#808080',
	},
};

const dark: ColorTheme = {
	foreground: {
		text: '#FFFFFF',
		action: '#61daff',
		focus: '#c390f9',
		hint: '#6f777b',
		hintAlt: '#61696b',
		muted: '#bdd2d7',
	},
	background: {
		page: '#135e70',
		shade: '#104f5f',
		pageAlt: '#0d414d',
		shadeAlt: '#0a323c',
	},
	border: {
		default: '#95b7bf',
	},
};

const intentColor = {
	error: '#d60000',
	success: '#0b996c',
	warning: '#f69900',
	info: '#00bfe9',
};
export type Intent = keyof typeof intentColor;

const borderRadius = unit;

export const tokens = {
	breakpoints,
	rem,
	unit,
	font,
	fontsize,
	fontWeight,
	lineHeight,
	spacing,
	maxwidth,
	light,
	dark,
	intentColor,
	borderRadius,
};
