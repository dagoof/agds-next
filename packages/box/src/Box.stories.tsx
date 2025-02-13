import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from './Box';

export default {
	title: 'foundations/Box',
	component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

/**
 * The Box with a Light palette applied
 */
export const LightBox = Template.bind({});
LightBox.args = {
	children: 'A light box',
	background: 'body',
	color: 'text',
	padding: 2,
	border: true,
	rounded: true,
	// palette: 'light',
	light: true,
};

/**
 * The Box with a Dark palette applied
 */
export const DarkBox = Template.bind({});
DarkBox.args = {
	children: 'Dark box',
	background: 'body',
	color: 'text',
	padding: 2,
	border: true,
	rounded: true,
	// palette: 'dark',
	dark: true,
};

/** Responsive props */
export const ResponsivePadding = Template.bind({});
ResponsivePadding.args = {
	children: (
		<div>
			<div>Responsive padding</div>
			<div>Change the size of the browser window to see the padding change</div>
			<ResponsiveSizeIndicator />
		</div>
	),
	border: true,
	rounded: true,
	padding: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
};

function ResponsiveSizeIndicator() {
	return (
		<Box
			palette="dark"
			color="text"
			display="flex"
			flexDirection="row"
			gap={2}
			paddingTop={1}
		>
			{['xs', 'sm', 'md', 'lg', 'xl'].map((s, index, arr) => (
				// TODO: replace with a pill / tag when it exists
				<Box
					key={s}
					background="body"
					padding={0.5}
					rounded
					display={Object.fromEntries(
						[
							['xs', 'none'],
							[arr[index - 1], 'none'],
							[arr[index], 'block'],
							[arr[index + 1], 'none'],
						].filter(([a]) => !!a)
					)}
				>
					{s}
				</Box>
			))}
		</Box>
	);
}
