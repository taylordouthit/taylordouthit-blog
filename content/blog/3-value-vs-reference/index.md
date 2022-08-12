---
title: Reference types vs. Value types in JavaScript
date: "2022-03-02"
description: Understanding this one concept in JavaScript will save you many headaches in the future!
headerImage: https://taylordouthit.com/static/07b8bc55ee98e4eaa99e81f8b3893cef/8c557/javascript.png
tags: JS
---

![JavaScript logo](./javascript.png)

Yesterday, I was writing a test case for a [LeetCode](https://leetcode.com/) problem, when I came across an interesting topic for today's blog post. See if you can spot the issue in my code.

```js
let myTestOutput = myFunction() // returns [3, 4];
console.log(myTestOutput === [3, 4]) // false
```

`[3, 4]` does not equal `[3, 4]`? 🤔

If you immediately spotted the issue, points for you! If you didn't, that's OK, it took me a minute or two to realize my mistake. Let's start with the solution:

```js
let myTestOutput = myFunction() // [3, 4];
console.log(myTestOutput.toString() === [3, 4].toString()) // true
```

So, how come that worked? Why did returning a string literal of `myTestOutput` and `[3, 4]` work, but not for the array comparison?

The answer boils down to the difference between **Value** and **Reference**.

In JavaScript, when you make a comparison between two values, you must consider the `data types` of the variables you are comparing. This holds true for assigning and modifying variables as well. If you don't, expect bugs. 🐛

Let's look at some examples.

## Example 1

For numbers, you will compare the _value_ of their assignments directly. When I modify one, it does not affect the other.

```js
let a = 10
let b = 20
let c = b // 20
console.log(c === b) // true
c = c + 1 // 21
console.log(b) // 20
```

##### Table of Example 1

| var | value |
| :-: | :---: |
|  a  |  10   |
|  b  |  20   |
|  c  |  21   |

## Example 2

For arrays on the other hand, you are comparing their addresses in memory.

```js
let a = ["strawberry", "melon", "kiwi"]
let b = a // ['strawberry', 'melon', 'kiwi']
let c = ["strawberry", "melon", "kiwi"]
console.log(a === b) // true
console.log(b === c) // false
```

##### Tables of Example 2

| var |  value   |
| :-: | :------: |
|  a  | address1 |
|  b  | address1 |
|  c  | address2 |

| address  |              value              |
| :------: | :-----------------------------: |
| address1 | ['strawberry', 'melon', 'kiwi'] |
| address2 | ['strawberry', 'melon', 'kiwi'] |

## Example 3

Let's look at what happens when you modify those values above:

```js
let a = ["strawberry", "melon", "kiwi"]
let b = a // ['strawberry', 'melon', 'kiwi']
let c = ["strawberry", "melon", "kiwi"]

b.push("orange")
console.log(a) // ['strawberry', 'melon', 'kiwi', 'orange']
```

Notice how pushing an item to `b` affected `a`? That's because they share the same place in memory!

##### Table2 of Example 3

| var |  value   |
| :-: | :------: |
|  a  | address1 |
|  b  | address1 |
|  c  | address2 |

| address  |                   value                   |
| :------: | :---------------------------------------: |
| address1 | ['strawberry', 'melon', 'kiwi', 'orange'] |
| address2 |      ['strawberry', 'melon', 'kiwi']      |

## Example 4

Objects behave in the same manner as arrays. If you are not careful, you could modify another variable unintentionally because they share the same place in memory. Here I'll demonstrate how the `spread` operator can save us!

```js
let a = {
  name: "taylor",
  profession: "programmer"
};

let b = {
  name: "tony",
  profession: "data scientist"
};

/*
let c = b;
c.name = "allen"; // don't do this, we'll lose our copy of tony
*/

let c = {
  ...b // spread operator
  name: "allen"
} // do this instead to create a brand new copy of b,
  // this avoids overwriting our record of tony
```

##### Tables of Example 4

| var |  value   |
| :-: | :------: |
|  a  | address1 |
|  b  | address2 |
|  c  | address3 |

| address  |                     value                      |
| :------: | :--------------------------------------------: |
| address1 |  {name: "taylor", profession: "programmer"};   |
| address2 | {name: "tony", profession: "data scientist"};  |
| address3 | {name: "allen", profession: "data scientist"}; |

## Data Types

Try playing around with the following data types: `number`, `string`, `boolean`, `array`, `object`.

You'll find similar behavior between number, string, and boolean. Likewise, arrays and objects will behave similarly.

## Practice

Practice, practice, practice! I encourage you to practice with the data types listed above. For starters, try creating a new array from one already created, while ensuring they don't share the same place in memory. Hint: the spread operator works for arrays as well!
