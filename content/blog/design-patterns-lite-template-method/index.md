---
published: true
title: "Design Patterns Lite: Template Method"
date: 2020-11-18T20:52:31.029Z
description: We all do the same same but different.
---
There are a lot of things we do in life that follow a set schedule of events. For example, if you work a salaried position, waking up on a weekday may look something like this:

1. Wake up
2. Get out of bed
3. Get breakfast
4. Brush your teeth
5. Do work
6. Finish work
7. Eat dinner
8. Evening activities
9. Go to bed

These steps could be even more granular or coarse depending on your level of organization. The important point here is that there's a certain rhythm, or _template_, to a person's day.

1. Wake up
2. Do some morning stuff
3. Do work
4. Do some evening stuff
5. Sleep

Templates empower us to be predictable and more efficient because if we subscribe to some belief on the order of how something ought to be done, all we need to do is figure out _how_ we need things to be done. This cuts down on the number of things we need to think about and the little gumball in our head appreciates this.

The powerful part of templates in our lives is that although everyone follows a similar template, how each and every person does the individual steps may be different.

`SoftwareDeveloper`s, `InvestmentBanker`s, `UXDesigner`s, etc who are all `SalaryWorker`s follow this similar template, but they all have different "`Do work`" steps. If you were writing a program that simulated a bunch of different people going about their days (e.g. by calling some `live` method on people objects per day), you might think that this template of how `SalaryWorker`s live is worth capturing as code.

Let's assume that everyone wakes up and goes to sleep the same way, but what's different is that they work differently. One way of coding `SoftwareDeveloper`s and `UXDesigner`s might go like this:

```python
class SoftwareDeveloper:
  # This method is called to tell the SoftwareDeveloper to live 1 day
  def live(self):
    self.wake_up()
    self.do_work()
    self.go_to_sleep()

  def wake_up(self):
    print("I am waking up")
  
  def do_work(self):
    print("I am WRITING CODE")

  def go_to_sleep(self):
    print("I am going to sleep")

class UXDesigner:
  # This method is called to tell the UXDesigner to live 1 day
  def live(self):
    self.wake_up()
    self.do_work()
    self.go_to_sleep()

  def wake_up(self):
    print("I am waking up")
  
  def do_work(self):
    print("I am DOING PHOTOSHOP")

  def go_to_sleep(self):
    print("I am going to sleep")
```

You know how I wrote that code? `Ctrl + C` -> `Ctrl + V`! In this case we're clearly seeing a pattern... a _template_ that we can follow if we wanted to reduce the amount of code that's copied.

A way that Python supports sharing common code between classes is by _inheriting_ code. The stuff that is shared between classes goes into a _parent_ class and we _inherit_ this shared code, just like how you might have "your mother's eyes" or "your father's nose". We mentioned earlier that this kind of schedule applies (for now) to `SalaryWorker`s. We can use this as our _parent_ class where it defines the template for how `SoftwareDeveloper`s and `UXDesigner`s (referred to as _child_ classes) might live their lives.

```python
class SalaryWorker:
  def live(self):
    self.wake_up()
    self.do_work()
    self.go_to_sleep()

  def wake_up(self):
    print("I am waking up")
  
  def do_work(self):
    raise NotImplementedError

  def go_to_sleep(self):
    print("I am going to sleep")

class SoftwareDeveloper(SalaryWorker):
  def do_work(self):
    print("I am WRITING CODE")

class UXDesigner(SalaryWorker):
  def do_work(self):
    print("I am DOING PHOTOSHOP")
```

This may not look any simpler. It's not even shorter! We've had to write `def do_work(self):` three times. This may be the case, but keep in mind that we only have two classes here. There are a plethora of `SalaryWorker` types out there, and if we had 50 we would have to duplicate and maintain _a lot_ of different `live`, `wake_up`, `do_work`, and `go_to_sleep` functions.

Another benefit is if our `live` algorithm ever changes we only have to change it in one spot. Maybe we start taking siestas in Canada and you might sleep, wake up, and do work multiple times a day! We'd only have to change one part of code in that parent class* as opposed to 50 classes.

One thing that might've caught your eye was the `do_work` method in the `SalaryWorker` class.

```python
class SalaryWorker:
  ...

  def do_work(self):
    raise NotImplementedError

  ...
```

We _could_ give a default action here, maybe `print("I am DOING STUFF")`, but by raising this error, we can be clear to people who want to use our code and tell them, "No, don't be lazy. If you have a job, you should know exactly what you're doing. You're a professional!" It becomes the responsibility of the child classes to implement some kind of working behaviour if you don't want your child to explode when it's time to go do work.

This example could be expanded to include more of a daily routine described earlier. We've cut out the "Do some morning stuff" and "Do some evening stuff". Adding those sections in might look like this:

```python
class SalaryWorker:
  def live(self):
    self.wake_up()
    self.do_morning_stuff()
    self.do_work()
    self.do_evening_stuff()
    self.go_to_sleep()

  # Assume the same implementation for the previous methods
  ...

  def do_morning_stuff(self):
    pass

  def do_evening_stuff(self):
    pass
```

The reason the method bodies are empty is that maybe some people don't have morning or evening things to do. When we have a template of a routine, there might be some steps that are optional. In fancy terms, these optional steps of a template are called _hooks_ and they allow you to inject some functionality at explicit times in the template (e.g. morning and evening) if your class needs it. I typically start work after having a cup of coffee and feeding my cat, so my `do_morning_stuff` method might look like:

```python
def do_morning_stuff(self):
  print("I am getting a cup of coffee")
  print("I am feeding my cat")
```

The point is, `do_work` is mandatory, `do_morning_stuff` is optional.

# Conclusion
This was a brief introduction to the Template Method pattern. These are the key takeaways:

- You have several classes that do things in a similar way. Those operations can be turned into an algorithm and put into a parent class for inheritence
- Operations that are the same between classes can be written once in the parent class
- Operations that are different between classes should be the responsibility of the child class
- Some operations are important and __must__ be implemented in the child, these should be marked as unimplemented/uncallable in the parent class, forcing the child class to define some logic
- Some operations are optional, these are typically written as empty methods in the parent and left to the child to override if it's necessary for them


___
**Note**

*It's easier to enforce which methods __need__ to be implemented in Java. I used Python as an example to gain hands on exploration with how these patterns might be written in Python. In Python, you can override methods whenever you want so child classes may override `live` and you might have to change those instances too.