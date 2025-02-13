---
title: Content
description: A collection of simple layout containers to wrap content.
group: Layout
storybookPath: /storybook/index.html?path=/story/layout-content-content--basic
---

### PageContent

The `PageContent` component should be used to wrap your applications page content. Typically this component will sit in-between your applications header and footer component.

```jsx
<YourApplicationsHeader />
<PageContent as="main">
	<YourApplicationsPageContent />
</PageContent>
<YourApplicationsFooter />
```

### SectionContent

The `SectionContent` component should be used to wrap sections your applications page content.

```jsx
<SectionContent>
	<H2>Section 1</H2>
</SectionContent>
<SectionContent background="shade">
	<H2>Section 2</H2>
</SectionContent>
<SectionContent>
	<H2>Section 3</H2>
</SectionContent>
```

### Content

The `Content` component can be used when you wrap content in a consistent container with a maximum width, but don't want any associated vertical padding.

```jsx
<Content>
	<Box paddingY={2}>
		<H2>Example title</H2>
	</Box>
</Content>
```
