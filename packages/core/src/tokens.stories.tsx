import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { CardList, Card, CardInner } from '@ag.ds-next/card';
import { H2 } from '@ag.ds-next/heading';
import { boxPalette } from './boxPalette';
import { mapSpacing, Spacing } from './tokens';
import { globalPalette } from './globalPalette';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	title: 'core/Tokens',
};

export const Color = () => {
	const palettes = ['light', 'dark'] as const;

	const boxPaletteTokens = Object.keys(
		boxPalette
	) as (keyof typeof boxPalette)[];

	const globalPaletteTokens = Object.keys(globalPalette).filter(
		(x) => !(x.startsWith('light') || x.startsWith('dark'))
	) as (keyof typeof globalPalette)[];

	return (
		<Stack gap={1.5}>
			{palettes.map((palette) => (
				<Stack
					key={palette}
					gap={2}
					padding={1.5}
					palette={palette}
					background="body"
				>
					<H2>{palette}</H2>
					<CardList templateColumns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
						{boxPaletteTokens.map((token) => (
							<Card key={token} as="li" shadow>
								<Box
									width="100%"
									height="6rem"
									background="body"
									css={{ backgroundColor: boxPalette[token] }}
								/>
								<Box borderColor="muted" borderTop>
									<CardInner>
										<Text fontSize="xs">{token}</Text>
									</CardInner>
								</Box>
							</Card>
						))}
					</CardList>
				</Stack>
			))}
			<Stack gap={2} padding={1.5} background="body">
				<H2>system</H2>
				<CardList templateColumns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
					{globalPaletteTokens.map((token) => (
						<Card key={token} as="li" shadow>
							<Box
								width="100%"
								height="6rem"
								background="body"
								css={{ backgroundColor: globalPalette[token] }}
							/>
							<Box borderColor="muted" borderTop>
								<CardInner>
									<Text fontSize="xs">{token}</Text>
								</CardInner>
							</Box>
						</Card>
					))}
				</CardList>
			</Stack>
		</Stack>
	);
};

export const Space = () => {
	const tokens: Spacing[] = [0, 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 5, 6];
	return (
		<Stack as="ul" gap={1} fontSize="xs">
			{tokens.map((token) => (
				<Flex key={token} as="li" gap={1} alignItems="center">
					<Box height="1rem" background="bodyAlt" width={mapSpacing(token)} />
					<Text fontSize="xs">
						{token} ({mapSpacing(token)})
					</Text>
				</Flex>
			))}
		</Stack>
	);
};
