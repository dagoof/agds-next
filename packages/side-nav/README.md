---
title: Side Nav
description: A vertical list of links for site navigation typically placed next to the body content.
group: Navigation
storybookPath: /story/navigation-sidenav--light-variant
---

The side navigation allows users to find other pages which share a similar topic or section. By default it supports three levels of nesting along with an accompanying heading.

On mobile and smaller viewports, the side navigation uses functionality from the accordion component to collapse down to an expandable element. (Coming soon)

```jsx live
<SideNav
	variant="light"
	activePath="#welcome"
	title="SideNav"
	titleLink="#"
	items={[
		{
			href: '#welcome',
			label: 'Welcome',
		},
		{
			href: '#one',
			label: 'Item',
			items: [
				{
					href: '#two',
					label: 'Sub-item',
				},
			],
		},
		{
			href: '#three',
			label: 'Item',
		},
		{
			href: '#four',
			label: 'Item',
			items: [
				{
					href: '#five',
					label: 'Sub-item',
					items: [
						{
							href: '#six',
							label: 'Sub-sub-item',
						},
						{
							href: '#seven',
							label: 'Sub-sub-item',
						},
					],
				},
				{
					href: '#eight',
					label: 'Sub-item',
				},
			],
		},
	]}
/>
```
