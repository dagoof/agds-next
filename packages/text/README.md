---
title: Text
description: A primitive typographic component for constrained text styles
group: Foundations
storybookPath: /story/foundations-text--basic
---

`Text` uses the `fontGrid` function to make the font-size and line-height snap to grid.

## Sizes

There are seven font sizes available, `sm` is the default.

```jsx live
<Stack gap={0}>
	<Text as="p" fontSize="xs">
		This is some text (xs)
	</Text>
	<Text as="p" fontSize="sm">
		This is some text (sm)
	</Text>
	<Text as="p" fontSize="md">
		This is some text (md)
	</Text>
	<Text as="p" fontSize="lg">
		This is some text (lg)
	</Text>
	<Text as="p" fontSize="xl">
		This is some text (xl)
	</Text>
	<Text as="p" fontSize="xxl">
		This is some text (xxl)
	</Text>
	<Text as="p" fontSize="xxxl">
		This is some text (xxxl)
	</Text>
</Stack>
```

### Weights

There are two font weights available, `normal` is the default.

```jsx live
<Stack gap={0}>
	<Text as="p" fontWeight="normal">
		Normal (default)
	</Text>
	<Text as="p" fontWeight="bold">
		Bold
	</Text>
</Stack>
```
