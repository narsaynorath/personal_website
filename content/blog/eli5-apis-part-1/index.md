---
published: true
title: "ELI5: APIs Part 1"
date: 2020-10-30T04:10:59.465Z
description: A gentle introduction to APIs and communication on the web.
---
As a software developer, I interact with APIs every day. They come in all sorts of forms such as ways to use someone else's code in ours or to transfer data between different services. This article is going to be part 1 of 2 that briefly introduce the concept of APIs and then discuss one of the most commonly used forms of APIs in the web, called REST APIs.

# What is an API?

An API, *Application Programming Interface*, is just a fancy term for all of the buttons and levers you can **interact with** to make *something* do *something*. An example of an interface (although, not an *application programming* interface) you may be familiar with is a doorknob. There are only a handful of well defined actions that you can accomplish with a doorknob--

![Man eating doorknob made of chocolate](dude-eats-a-doorknob-because-its-made-of-chocolate.gif)

Okay, the sky is the limit when it comes to doorknobs, but YMMV.

For most of us, our doorknobs aren't made of chocolate and the most exciting things we use them for are to lock/unlock doors, and open them. We can consider the doorknob the interface and it allows us to do some actions. Some of these actions are a little more interesting because they require us to *give* something to the doorknob; i.e. if we want to lock/unlock the door, we need to provide a key.

APIs work in a very similar way. A bunch of code somewhere out there is waiting for you to use it and all you need to do is understand what it wants.

# My Little Piggy Bank

Let's pretend we're making a program for a virtual piggy bank because we're trying to keep track of our R I C H E S. These are the coins we have in our piggy bank:

#### **piggy_bank.py**

```python
coins = [10, 10, 25, 25, 5, 10]
```

But, alas! It's useless to me in this form. I need to know the total so I know how much I need to save for my Bugatti. Well, after some intense Google searching we found code that someone wrote to take a list of numbers and add them all up. Perfect!

#### **genius_sum.py**

```python
def sum(numbers):
    """Use this to add up a list of numbers

    Takes a list of numbers in the form [1, 2, 3, etc] as input
    and returns a number representing the total of every number
    in the list.
    """

    total = 0
    for number in numbers:
        total = total + number
    return total
```

Looking at the comment under the function name, I see that it wants me to *give* it a list of numbers in the form `[1, 2, 3, etc]` and it'll tell me the total of the numbers in the list. Looking at my list of coins, we have the right format so we can use this code!

#### **piggy_bank.py**

```python
# We need to tell our application where to find the code to use
import sum from genius_sum

coins = [10, 10, 25, 25, 5, 10]

total = sum(coins)

print("I have this many cents: " + coins)
# prints out "I have this many cents: 85"
```

![A piggy driving a car](piggybugatti.jpg)

I woke up in a new Bugatti.

We used the API of a function in someone else's code to add up our coins. We didn't care about *how* it did it, all we knew is that it *could* do what we wanted (because we read the comment which we can trust 100% always) and what it needed to accomplish that. It could have called granny while it was counting up our coins, but in the end we only cared about our $$$ so mission accomplished.

When working with APIs, it's usually a good idea to reach for some kind of documentation. The people who write software and its API usually want other people to use it, so in the documentation you'll find information on expected input/output and maybe any limitations of the software to keep in mind. This way, we can interact with the software in a predictable way by conforming to its interface. They get internet popularity, we get our Bugatti. The world's a happy place.

One thing you might have noticed is that we had to download the code that gave us the power to `sum` our list of coins. Well, we do complex things on the web every day and do you see your computer downloading code every time you want to do something? I hope not!

In the next article we'll discuss how we use APIs over the web so your computer doesn't need to work hard to deliver you those good good cat memes.