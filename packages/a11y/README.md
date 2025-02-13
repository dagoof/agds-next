---
title: A11y
description: Utilities for improving accessibility.
group: Foundations
storybookPath: /story/foundations-a11y-visuallyhidden--basic
---

## Visually Hidden

Use the `VisuallyHidden` component to hide an element visually without hiding it from screen readers.

```jsx live
<TextLink href="#">
	Read more<VisuallyHidden> about how to visually hide content</VisuallyHidden>
</TextLink>
```

Alternatively you can use the `visuallyHiddenStyles` style object directly.

```jsx
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';

function Example() {
	return (
		<span css={visuallyHiddenStyles}>This element is visually hidden</span>
	);
}
```

## ExternalLinkCallout

Use the `ExternalLinkCallout` component to announce to a screenreader user that a link will open in a new tab.

```jsx live
<TextLink href="#" target="_blank">
	Visit the Design System
	<ExternalLinkCallout />
</TextLink>
```

> link, "Visit the Design System (Opens in a new Tab)"

For links in Body text, we recommend reaching for the `TextLinkExternal` component in the [Text package](text#TextLinkExternal) instead.
