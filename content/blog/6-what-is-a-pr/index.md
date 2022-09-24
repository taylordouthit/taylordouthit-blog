---
title: "How to Review Code in a Pull Request"
date: "2022-09-24"
description: If you want to cultivate a great engineering culture that encourages collaboration and growth, you must look closely at how you conduct code reviews. The wrong approach can lead to a toxic environment that discourages engineers from contributing. The right approach can fuel growth, innovation, and wonderful outcomes for your organization, clients, and team.
tags: Engineering, Team Culture
---

![Illustration of a pull request](./pull-request.jpg)

## What is a Code Review?

There are many ways to conduct a code review, one of the most common mechanisms being the _**pull request**_.

A pull request is a request by a team member to merge their code into the larger codebase. The team will review the code and provide feedback, and the author will make changes to the code as needed. Once the team is satisfied with the code, it can be merged into the codebase.

It is one of the most challenging aspects of software development. It is a critical part of the development process, but it can also be a source of frustration and conflict. The engineer receives feedback in a very public setting. It is a vulnerable time for an engineer. When reviewed with kindness and humility, it can be a powerful tool for growth and learning. When reviewed with a critical eye and a lack of empathy, it can be a toxic experience that discourages engineers from contributing.

## Who is Reviewing the Code?

Is it the senior engineers, the juniors, or the team leads? Well, the answer is all three. The seniors bring their knowledge and years of experience to the table. They also demonstrate the kind of behavior and discussions appropriate for a code review. The juniors are there to gain exposure to new patterns and ways of solving problems as well as offer their perspectives on the approach. The team lead is there to ensure the code is meeting the standards of the team and the organization.

### Asking questions

All parties should be asking questions, gaining clarity, and partaking in meaningful discussions within the PR. You cannot be an expert in every technology, pattern, and language you come across in a pull request. You can, however, be an expert in asking questions and demonstrating humility.

## Is a PR the Finished Product?

Most definitely not. The PR is a chance to bring other engineers into the conversation and to collaborate; it's about inviting the larger team to the table to share, learn, and sculpt an even better solution.

## How do I Conduct Reviews?

I'll share my three-step process for conducting a code review.

### 1. Perform a High-level Passthrough

I perform a code review by first taking a 30,000-foot view of the code. I ask myself:

- What is the purpose of this code?
- What area of the code is the change in?
- Am I familiar with this area of the code?
- Has the engineer included tests?

I'll usually read the tests first. Ideally, the suites are labeled in a readable format that sounds like natural language.

```js
test("button_is_disabled_when_form_is_blank", () => {
  // some setup...
  expect(button.isDisabled).toBeTruthy()
})
```

### 2. Dig into the Details

Once I have a high-level understanding of the code, I'll dig into the details. I'll look for things like:

- Is the code readable?
- Are any parts [astonishing](https://en.wikipedia.org/wiki/Principle_of_least_astonishment)? (If so, I'll ask questions)
- Are there any obvious bugs?
- Are there any obvious impacts on performance, accessibility, or security?
- Are there any areas that I need clarity on?

### 3. Make Suggestions Where Appropriate

After taking a high-level pass and digging into the details, I will begin making suggestions and asking questions. The keyword is "suggestions," as I'm still looking to understand where another engineer is coming from. I may _think_ I know what they are trying to accomplish, but I'm not 100% sure.

For instance:

> I see that you are using pixels for the size of these elements. I think it could be better for accessibility reasons to use `rem` instead. Have a look at the approach recommended [here](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/) in regards to font scaling, and let me know if you agree!

### Be kind

I always like to draw attention to portions of the changeset that meet our industry's best practices and exceed my expectations.

#### Example:

> This is awesome! I love how you've used the `useMemo` hook to memoize the result of this expensive calculation. This is an excellent example of how to use hooks to improve performance and readability.

### Tone is Important

For places where I believe something _must_ change. I'm sure to direct my feedback to the code, not the engineer.

#### Examples:

> For this use case, I might try `ngOnInit` instead. Here is a link to the documentation that I believe explains why `ngOnChanges` might not be the right option: [https://angular.io/api/core/OnChanges](https://angular.io/api/core/OnChanges)

or

> Using the index for the key of a child element in React can sometimes lead to buggy behavior. Try a unique identifier instead. Here is a link to the documentation that I believe explains why: [https://reactjs.org/docs/lists-and-keys.html#keys](https://reactjs.org/docs/lists-and-keys.html#keys)

### Be humble

Being humble is _the most_ important part of this whole process. As a Solutions Architect, some may believe it's my responsibility to know everything. The truth of the matter is this is not possible. Every day I'm humbled by newer engineers and the unique solutions they find to problems. A code review is a chance for me to learn as well.

## How Does this tie back to the Success of the Organization?

When you cultivate a culture based on humility and kindness, you create an environment where engineers feel safe contributing. When engineers feel safe contributing, they are more likely to share their ideas and solutions. When they share their ideas and solutions, you are more likely to find the best solution for your clients. When you find the best solution for your clients, you are more likely to have a successful business.
