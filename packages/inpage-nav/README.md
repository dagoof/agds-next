---
title: Inpage Nav
description: Inpage nav links helps users scan the contents of a page and navigate to different sections of the page.
group: Navigation
storybookPath: /story/navigation-inpagenav--on-light
---

The inpage nav (or page contents) is placed above sections of a page and provides navigation to individual anchor links located in those sections.

```jsx live
<Stack gap={3}>
	<InpageNav
		title="Contents"
		links={[
			{ href: '#section-1', label: 'Section 1' },
			{ href: '#section-2', label: 'Section 2' },
		]}
	/>
	<Body>
		<h2 id="section-1">Section 1</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
			praesentium at voluptas voluptate, minus accusamus doloremque repellat
			molestias id.
		</p>
		<h2 id="section-2">Section 2</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
			praesentium at voluptas voluptate, minus accusamus doloremque repellat
			molestias id.
		</p>
	</Body>
</Stack>
```
