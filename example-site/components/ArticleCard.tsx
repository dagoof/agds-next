import { Card, CardLink, CardInner } from '@ag.ds-next/card';
import { Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export const ArticleCard = () => (
	<Card clickable shadow>
		<img
			src="/agds-next/example-site/placeholder/hero-banner.jpeg"
			alt=""
			css={{ width: '100%' }}
			role="presentation"
		/>
		<CardInner>
			<Stack gap={1}>
				<Heading type="h3">
					<CardLink href="/category/subcategory/content">
						Title of article (H3)
					</CardLink>
				</Heading>
				<Text as="p">
					Short descriptive paragraph designed to fit in this space
				</Text>
			</Stack>
		</CardInner>
	</Card>
);
