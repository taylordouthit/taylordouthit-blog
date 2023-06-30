---
title: "On Over-engineering"
date: "2023-06-20"
description: A short reflection on over-engineering, prompted from reading an old case study on Netflix and their landing page optimizations.
headerImage: https://taylordouthit.com/static/a0613a2d7e8d60011c7acfb7993b3af6/828fb/staircase.jpg
tags: Engineering, Products
---

![Photo of spiral staircase with black round hold](./staircase.jpg)

What is over-engineering? Over-engineering is when you build something that far surpasses the needs and requirements of the project. It's when you roll out an infinitely scalable serverless computing platform with only four users. It's when you build out a fully-customizable SaaS solution when all your users needed was a form to submit requests. Or it's more subtle, like using a framework or library when some simple JavaScript would do.

Why does over-engineering occur? It often happens when you build in isolation from your end users.

Why do we build in isolation from our end users? We think we know what they want. We predict the features they'll need, use and the degree to which they will use them. We believe if we follow what the rest of our industry is doing, leveraging the best frameworks and technologies, things will be alright for our users because we've utilized the greatest technology.

There's an older [post](https://medium.com/dev-channel/a-netflix-web-performance-case-study-c0bcde26a9d9) from [Addy Osmani](https://medium.com/@addyosmani) about performance optimization that speaks to this topic. The team at Netflix noticed that their users were signing up on mobile devices with slow 3G connections. Their landing page, crucial to getting new users to sign up for a membership, was serving up 300KB of JavaScript, which for a slower connection, was a hefty payload to send over the wire. They questioned if using React for their landing page was truly needed considering the amount of interactivity was low. Long story short, they were able to offer a better user experience to mobile and desktop users by switching to vanilla JavaScript and reducing their Time-to-Interactive by 30%.

I love this story. It speaks to two points: building with your customer's needs in mind will lead to more significant results, and sometimes, even the biggest companies like Netflix can roll out the simplest of solutions if it's what is best for their customers.

Making appropriate technology or engineering choices is difficult when you're disconnected from your users. If you don't know their pain points, how can you say if X or Y will be better for them? You can't. If you don't know what devices they use and how they interact with your application, you're making guesses. Ultimately, your engineering time and resources will be wasted on potential over-engineering where they could have been simplified.

If it's not the users driving the product, then likely it's some false god like the latest framework or technology pattern. How often have you made a choice for your product based on what the industry is doing rather than what your users wanted?

Ultimately, it is the users who should drive product development, not the latest trends or technologies. Prioritizing user feedback and understanding their desires and expectations allows for the creation of streamlined and effective solutions that deliver the best possible experience. By focusing on the customer, rather than succumbing to external pressures, companies can avoid over-engineering and provide products that truly cater to their users' needs.
