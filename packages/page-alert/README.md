---
title: Page Alert
description: Page alerts are used to notify users of important information or changes on a page, in a way that attracts the user's attention without interrupting the current task.
group: Content
storybookPath: /story/content-page-alert--on-light
---

Typically page alerts appear at the top of a page following a submit action.

## Tones

Choosing a tone for a PageAlert allows the user to understand the importance and severity of the message at a glance.

The four supported tones are `info`, `success`, `error` and `warning`.

### Info

Page alerts are intended for important time-sensitive information only and should be used sparingly.

```jsx live
<PageAlert tone="info" title="Notice">
	<Text as="p">
		All vacancies close on the advertised closing date unless otherwise
		specified.
	</Text>
</PageAlert>
```

### Success

The success page alert is used for notifying the user that a task is fully completed.

```jsx live
<PageAlert tone="success" title="Submission successful">
	<Text as="p">Your application has been successfully submitted.</Text>
</PageAlert>
```

### Error

The error page alert should be used with form validation errors or other errors which will block the user from completing their task.

```jsx live
<PageAlert tone="error" title="There is a problem">
	<Text as="p">
		<a href="#">Full name must not be empty</a>
	</Text>
</PageAlert>
```

### Warning

Use warning page alerts to tell the user something urgent. Only use an alert if the information will help the user avoid a problem.

```jsx live
<PageAlert tone="warning" title="Browser out of date">
	<Text as="p">Your web browser is out of date.</Text>
</PageAlert>
```

## Composition

You can take advantage of our `Body` component to ensure consistant spacing between HTML elements.

```jsx live
<PageAlert tone="error" title="There is a problem">
	<Body>
		<p>Please correct the following fields and try again</p>
		<ul>
			<li>
				<a href="#">Full name must not be empty</a>
			</li>
			<li>
				<a href="#">Email must not be empty</a>
			</li>
			<li>
				<a href="#">Description must not be empty</a>
			</li>
		</ul>
	</Body>
</PageAlert>
```

## Accessibility

To improve accessibility, you may consider using the ARIA alert role ( role="alert" ) in certain situations.

Using role="alert" will immediately interrupt assistive technology to inform users of the alert and for this reason should be used sparingly.

We recommend only using the role="alert" when there is important time-sensitive information that would be detrimental for a user to miss.

More information on [ARIA alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role)

```jsx live
<PageAlert tone="success" title="Submission successful" role="alert">
	<Text as="p">Your application has been successfully submitted.</Text>
</PageAlert>
```
