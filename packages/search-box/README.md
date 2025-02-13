---
title: Search Box
description: An input that allows users to enter a keyword to filter content on the website.
group: Forms
storybookPath: /story/forms-searchbox--on-light
---

### Default

Use the `SearchBox` component to help users find content or pages through keywords. This can be particularly useful for a web service with a large amount of pages.

```jsx live
<SearchBox onSubmit={console.log}>
	<SearchBoxInput label="Search this website" />
	<SearchBoxButton>Search</SearchBoxButton>
</SearchBox>
```

### Responsive icon

Use the `iconOnly` prop to configure at which breakpoints the search icon should replace the button label. This allows more space for text to be written in the text input.

```jsx live
<SearchBox onSubmit={console.log}>
	<SearchBoxInput label="Search this website" />
	<SearchBoxButton iconOnly={{ xs: true, md: false }}>Search</SearchBoxButton>
</SearchBox>
```
