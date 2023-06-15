---
title: "Breaking Things Down, Estimation, and Velocity"
date: "2023-06-15"
description: I discuss the challenges of software estimation and the impact of human biases, as well as strategies to improve estimation accuracy and the role of Goodhart's Law in project delays.
headerImage: https://taylordouthit.com/static/d8272448bf94000de7ac444fe2ea3a70/828fb/stacking-dolls.jpg
tags: Agile, Psychology
---

![Photo of stacking dolls lined up next to each other](./stacking-dolls.jpg)

Estimation is a tough nut to crack. As software engineers, we're not immune to biases. We tend to fall into the trap of thinking we [know more and can do more than we actually can](<(https://en.wikipedia.org/wiki/Illusory_superiority)>). Believe me, I've been guilty of this many times in my eight years of experience.

I can recall a specific example when I was building a select component designed by our UX team. I confidently thought, "That component? Yeah, that shouldn't take more than half a sprint." Little did I consider the complexities of supporting multiple browsers or the fact that the component was [tied to the underlying operating system styles](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling#appearance_controlling_os-level_styling), making it impossible to override. And let's not forget the time-consuming back-and-forth with the UX team, testing, and time to write documentation. My overconfidence got the best of me on that one.

And here's the kicker: when you throw us into a group, things can get even trickier. Social pressures come into play, and any estimation that doesn't scream "fast" can sometimes be seen as a reflection of our skills falling short.

In my experience, the best approach to estimation is breaking down the work into smaller tasks. Take API work, for example. Can we split it into discrete steps like handling the request, adding the business logic, and implementing the data access layer? Absolutely. The same goes for UI components—breaking them down into parent and child components can work wonders.

The beauty of breaking work into smaller chunks is that it uncovers hidden details that can significantly impact the implementation time. It's like peeling back the layers of an onion. With each layer, the team can ask new questions and gain additional insights.

I've learned to also be cautious and pay extra attention to the insights of senior team members and those who have weathered a variety of situations. Listening carefully to those who have been in the trenches can save you from some estimation pitfalls. Back when I was starting out, one of the toughest things about estimation was simply not knowing what I didn't know. Have trust in those who have done this before, but again, they're humans, too, so be cautious.

Even if you nail this process, it doesn't cure all project delays. Chances are that even with perfect estimation, you may still experience project delays. Why is that software is notoriously late? Can anyone estimate properly? Can we not just measure a team's velocity against the backlog? If we set a targeted velocity, can't we deliver on time?

Well, the answer is a bit complicated. Enter Goodhart's Law. It states that ["when a measure becomes a target, it ceases to be a good measure."](https://en.wikipedia.org/wiki/Goodhart%27s_law) In Agile, we rely on velocity—the average amount of work completed during a sprint—to assess our progress against the backlog. But being human, we tend to bend the rules a bit.

Let me explain. Teams make commitments each sprint, and I've noticed that sometimes we intentionally or unintentionally inflate user story estimations to meet those commitments. [Sprint commitments are sometimes wrongly enforced as promises to stakeholders](https://www.agileambition.com/sprint-commitment/) rather than recognizing them as immutable workloads that cannot be changed so as to not disrupt the engineering team mid-sprint. Therefore, numbers go up on user stories to make the workload more manageable, and sprint commitments are met, but the backlog also continues to grow as time goes on. This, in my opinion, is why software is often delivered late.

So, in the grand scheme of breaking down user stories, estimation, and velocity, what am I trying to convey? Simply put, software development is no walk in the park. It's a challenging endeavor, made even more difficult by our imperfect human nature. However, strengthening your Agile processes and being clear about the role of each element of Scrum, as well as improving one's estimation, can certainly help teams get closer to their target release dates.

I hope this has been helpful and enlightening. If you'd like to chat about what I wrote, feel free to connect with me via [LinkedIn](https://www.linkedin.com/in/taylordouthit/)!
