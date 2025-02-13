import { ReactNode } from 'react';
import {
	boxPalette,
	fontGrid,
	mapResponsiveProp,
	mapSpacing,
	mq,
	packs,
	tokens,
} from '@ag.ds-next/core';

const componentTokens = {
	shadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
};

export type CalendarContainerProps = {
	children: ReactNode;
	range: boolean;
};

export const CalendarContainer = ({
	children,
	range,
}: CalendarContainerProps) => (
	<div
		css={mq({
			'& .DayPicker': {
				display: `inline-block`,
				fontSize: `1rem`,
				backgroundColor: boxPalette.backgroundBody,
				color: boxPalette.foregroundText,
				boxShadow: componentTokens.shadow,
				borderWidth: tokens.borderWidth.sm,
				borderStyle: 'solid',
				borderColor: boxPalette.borderMuted,
				borderRadius: tokens.borderRadius,
			},

			'& .DayPicker-wrapper': {
				position: `relative`,
				flexDirection: `row`,
				padding: mapResponsiveProp([0.25 as const, 1 as const], mapSpacing),
				'&:focus': packs.outline,
			},

			'& .DayPicker-Months': {
				display: `flex`,
				flexWrap: `wrap`,
				justifyContent: `center`,
				gap: mapSpacing(2),
			},

			'& .DayPicker-Month': {
				display: `table`,
				borderSpacing: 0,
				borderCollapse: `collapse`,
				userSelect: `none`,
			},

			'& .DayPicker-Caption': {
				display: `table-caption`,
				marginBottom: mapResponsiveProp(
					[0.75 as const, 1.5 as const],
					mapSpacing
				),
				textAlign: `center`,
			},

			'& .DayPicker-Caption > div': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '2.875rem',
				...fontGrid('lg', 'nospace'),
				fontWeight: tokens.fontWeight.bold,
			},

			'& .DayPicker-Weekdays': {
				display: `table-header-group`,
			},

			'& .DayPicker-WeekdaysRow': {
				display: `table-row`,
			},

			'& .DayPicker-Weekday': {
				display: `table-cell`,
				textAlign: `center`,
				...fontGrid('sm', 'heading'),
				color: boxPalette.foregroundMuted,
				paddingBottom: mapSpacing(0.75),
			},

			'& .DayPicker-Weekday abbr[title]': {
				borderBottom: `none`,
				textDecoration: `none`,
			},

			'& .DayPicker-Body': {
				display: `table-row-group`,
			},

			'& .DayPicker-Week': {
				display: `table-row`,
			},

			'& .DayPicker-Day': {
				display: `table-cell`,
				verticalAlign: `middle`,
				borderRadius: tokens.borderRadius,
				width: '2.875rem',
				height: '2.875rem',
				textAlign: `center`,
				cursor: `pointer`,
				color: boxPalette.foregroundAction,
				'&:focus': packs.outline,
			},

			'& .DayPicker-Day--disabled': {
				opacity: `0.3`,
				cursor: `not-allowed`,
			},

			'& .DayPicker-Day--selected:not(.DayPicker-Day--outside)': {
				position: `relative`,
				backgroundColor: boxPalette.foregroundAction,
				color: boxPalette.backgroundBody,
			},

			'& .DayPicker-Day:not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover':
				{
					backgroundColor: boxPalette.backgroundShade,
				},

			...(range && {
				'.DayPicker-Day--selected.DayPicker-Day--start:not(.DayPicker-Day--outside)':
					{
						borderTopLeftRadius: '50%',
						borderBottomLeftRadius: '50%',
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
					},
				'.DayPicker-Day--selected.DayPicker-Day--end:not(.DayPicker-Day--outside)':
					{
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
						borderTopRightRadius: '50%',
						borderBottomRightRadius: '50%',
					},
				'.DayPicker-Day--selected.DayPicker-Day--start:not(.DayPicker-Day--outside).DayPicker-Day--end:not(.DayPicker-Day--outside)':
					{
						borderRadius: '50%',
					},

				'.DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside)':
					{
						backgroundColor: boxPalette.backgroundShade,
						color: boxPalette.foregroundText,
						borderRadius: 0,
					},
			}),
		})}
	>
		{children}
	</div>
);
