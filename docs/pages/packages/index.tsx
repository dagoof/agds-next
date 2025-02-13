import { normalize } from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { Stack } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';
import { H2 } from '@ag.ds-next/heading';
import { TextLink } from '@ag.ds-next/text-link';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import {
	getPkgGroupList,
	getPkgList,
	getPkgNavLinks,
} from '../../lib/mdx/packages';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';
import { PkgCardList } from '../../components/PkgCardList';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function PackagesHome({
	navLinks,
	groupList,
	pkgList,
	source,
}: StaticProps) {
	return (
		<>
			<DocumentTitle title="Packages" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Packages',
						titleLink: '/packages',
						items: navLinks,
					}}
					editPath="/packages/README.md"
				>
					<Body>
						<MDXRemote {...source} components={mdxComponents} />
					</Body>
					<Stack gap={2}>
						{groupList.map((group) => (
							<Stack gap={1} key={group.slug}>
								<TextLink href={`/packages/${group.slug}`}>
									<H2 color="inherit">{group.title}</H2>
								</TextLink>
								<PkgCardList
									items={pkgList.filter((p) => p.group === group.slug)}
								/>
							</Stack>
						))}
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../packages/README.md`)
	);
	const source = await serializeMarkdown(content);
	const navLinks = await getPkgNavLinks();
	const groupList = await getPkgGroupList();

	const pkgList = await getPkgList();

	return {
		props: {
			source,
			navLinks,
			groupList,
			pkgList,
		},
	};
}
