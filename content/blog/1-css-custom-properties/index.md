---
title: What are CSS Custom Properties?
date: "2022-02-25"
description: CSS has gotten support for custom properties (variables) in all modern browsers. Here is how to use them.
tags: CSS
---

CSS Custom Properties, sometimes called variables, allow you to create and assign a value that can be used throughout your stylesheet.

To create a custom property, you simply prefix your property name with two dashes followed by the name of your variable, i.e. `--my-variable:`. To use the value somewhere else in the stylesheet, use the `var()` CSS function to insert the value of your custom property.

```css
h1 {
  /* We first declare some variables and assign them values. */
  --dark-blue: #004369;
  /* We then them into the var() function to use them */
  color: var(--dark-blue);
}
```

Perhaps you're familiar with a pre-processor like [Sass](https://sass-lang.com/)? This same code would look like:

```css
h1 {
  $dark-blue: #004369;
  color: $dark-blue;
}
```

Not so different right?

And in this case, there is no longer a need to use a pre-processor to compile your code down to CSS because the feature is now supported natively in all major browsers.

# Why use them?

- You no longer need to use a pre-processor if you want to structure your styles using variables
- You can re-assign new values to existing properties, which can lead to some pretty interesting implementations. Checkout this [dark-mode](https://codyhouse.co/blog/post/css-custom-properties-vs-sass-variables) example.

For a deep-dive into CSS Custom properties, have a look at [CSS-Tricks](https://css-tricks.com/making-custom-properties-css-variables-dynamic/).
