---
title: Loading
description: Loading indicators inform users that their action is being processed.
group: Content
storybookPath: /story/content-loading-loadingblanket--on-light
---

## Loading Blanket

The `LoadingBlanket` component can be used indicate the loading state of a component or page.

By default this component is positioned absolutely, so you will need to make sure your component container is positioned relatively.

```jsx live
<Box height="300px" width="100%" border style={{ position: 'relative' }}>
	<LoadingBlanket label="Component loading state" />
</Box>
```

### Full-screen

Adding the `fullScreen` prop will position the component over the whole screen.

We recommend limiting the use of this pattern to certain use cases such as before or after a redirection.

```jsx
<LoadingBlanket fullScreen label="Page loading state" />
```

## Loading Dots

The `LoadingDots` component can be used on it's own, for example when fetching data from a remote source.

```jsx live
<Stack gap={2} alignItems="center">
	<LoadingDots size="sm" aria-label="Loading" role="status" />
	<LoadingDots size="md" aria-label="Loading" role="status" />
	<LoadingDots size="lg" aria-label="Loading" role="status" />
</Stack>
```
