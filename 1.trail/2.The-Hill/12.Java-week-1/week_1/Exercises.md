# Challenge 1: The Mission

Create a small application that will assign and print out an example of all the primitive data types in Java.

### Hint:
None of these datatypes have a capital letter.

### Extra:

#### How come you can just print all of these datatypes?
Because Java’s `System.out.println()` method automatically converts all primitive types to their string representation using method overloading. Java internally handles converting the values into strings, so you don’t need to do it manually.

#### Why are those called primitive data types?
They are the basic building blocks of data in Java. They are not objects and are stored directly in memory (on the stack). These types are:

- **Simple**
- **Fixed in size**
- **Not derived from any class**

Java has 8 primitives:

- byte
- short
- int
- long
- float
- double
- char
- boolean

#### Why can't you assign a double to an integer?
A `double` has higher precision and range than `int`, so Java doesn’t allow implicit conversion from `double` to `int` because it could lead to loss of data. You can only do this with explicit casting.
```java
double d = 9.99;
int i = d; // ❌ ERROR
```

#### But why can you assign an integer to a char?
A `char` in Java is really just a 16-bit unsigned integer under the hood, representing Unicode values. So assigning an integer within the `char` range (0 to 65535) is allowed.

```java
char c = 65; // ✅ represents 'A'
```

#### Why can't you assign a long to an int?
You can’t assign a `long` to an `int` directly because `long` is 64-bit and `int` is 32-bit — again, possible data loss. But you can do this with explicit casting, at your own risk.
```java
long l = 10000000000L;
int i = l; // ❌ ERROR
```

But yes, you can do this with explicit casting, at your own risk:

```java
int i = (int) l; // ✅ But will cause truncation if value is too big
```

---

# Challenge 2: The Mission

Create the same application but now with the object version of these data types. What is the difference?

These are objects. Primitive data types are raw values, but objects are not. Objects are actually pointers, they point to memory in the JVM. So a variable of type `Integer` can also be `null`.

#### Key Differences

##### **Primitive Types** (e.g., int, char):

- They represent **raw values**, and their **size is fixed**.
- They **cannot be null**.
- They are stored **directly in memory**.
- They are **not objects**, so you **can't call methods** on them (e.g., `.toString()` or `.equals()`).

##### **Object Types** (e.g., Integer, Character):

- These are **classes**, not primitive types. They **wrap primitive values in objects**.
- They **can be null** because they are **reference types**, meaning they can point to an object in memory or to nothing (`null`).
- They **have methods and properties** since they are instances of classes.

For example, `Integer.toString()` can convert an `Integer` to a `String`.

#### Very Extra: Is there a way to loop over all of the variables automatically and only have 1 print statement? If so, why was this not possible with the primitive datatypes?

##### Why Was This Not Possible with Primitive Data Types?
Primitive types are not objects, so they don’t have the flexibility to be accessed using reflection like objects do.

- Reflection in Java works on **fields, methods, and constructors** that belong to objects — not raw values like primitive types.

Primitive types are fixed in size and are not part of the class hierarchy, meaning they don’t have object methods.
- You can’t call `.toString()`, `.equals()`, or other methods on them.
- You **can’t loop over them dynamically** or access them through reflection.

By using **wrapper classes** like `Integer`, `Double`, `Character`, etc., you:
- Turn primitive values into **objects**.
- Can leverage **reflection**, **collections**, and other **object-oriented features** of Java.

---

# Challenge 4: The Mission

Write a small program that will build up a random array of non-primitive integers, and `0` is a valid entry. Now loop over the array and divide each integer with the previous integer. The first integer can be divided by itself. How will you make sure that the program doesn't crash when dividing by zero?

This challenge can be a way to introduce exceptions, `try-catch` blocks, etc.

---

# Challenge 5: The Mission

Write a program that reads in a text file and then counts the appearance of words line by line. The result should be an overview of how many times each word was in the text.

---

## Challenge 5 bis: Most frequently used word

The same as challenge 5, but now we also want to know which word was used the most.

---

# Challenge 6: The Mission

Write a program that reads in a text file and then counts the appearance of letters line by line. The result should be an overview of how many times each letter (or should we go for character?) appeared.

---

## Challenge 6 bis: Most frequent letter

The same as challenge 6, but also report which is the most commonly used letter.

---

# Challenge 7: The Mission

Write a program that can read in a comma-separated value file (a CSV file). Make a data model (a class) to hold the lines and print out only one particular piece of information. So we are expecting getter and setter methods. Students should also be able to explain what a method signature is. Ideally, the solution for this challenge also consists of multiple classes.

---

# Challenge 8: The Mission

Again write a program that can read a comma-separated value file. Each row of this file contains some information that has its own meaning and value separate, but it can also have value when combined with other fields. For example, each row of a CSV file can represent a day and count of visitors/patients per department in a hospital. For example on 27-07-2021, there are 40 visitors for cardiology, 98 for radiology, 1120 people just visiting somebody in the hospital, etc. The students need to make classes that model the file, but they also add behavior to that class that operates on the data that it contains. In other words, we are setting the first encapsulation steps.

We want to be able to 'report' per day and per month, these reports are written in files. So we will need multiple classes to do this, also making them write to files.

---

# Challenge 9: The Mission

Write a program that will create CSV files. The CSV files will contain the following fields:

- firstname: The firstname is a name which will be chosen randomly from a set of 30 first names.
- lastname: The lastname is a name which will be chosen randomly from a set of 40 last names.
- reason: This value is to be chosen randomly from 2 values: Appointment or visit.
- department: This value is a value chosen from 5 values: Cardiology, Radiology, Pediatrics, Geriatrics, Pulmonology. This is only to be filled in if the reason of the visit is 'Appointment'.
- date of the visit: The date can be something random, but let's keep it in a certain month in the current year.

You can decide how long this file is, don't make it too long though. Ideally, this challenge also consists of multiple classes.

**Note:** This challenge plays with the idea of code reuse. OO is not about code reuse, however, randomly picking a value from a fixed set of values is something that can be abstracted out. The coach should pay attention to this.

**A small word on code reuse:** Code reuse is only viable when change is out of the equation. In 80% of the cases, change originates from stakeholders (users, customers, managers, financiers, etc.) and they mostly want feature changes. If this 'random' CSV factory was to be a real-life feature, it is very unlikely that one of the stakeholders is interested in how these values were randomly picked. Nobody cares how these values are randomly picked. That means that the chances that it will need to change are very limited. And this makes it a perfect candidate for an abstraction/code reuse.

---

# Challenge 10: The Mission

Create a program that has 2 classes: `Car` and `Truck`. Give them both a field `int numberOfWheels` and write a getter method for that. Now in your program, try to create a collection (can be List, a Set, anything) that holds an object of both classes. How would you do that?

---

## Bonus

### Teamwork: Counting appearance of words in a folder filled with text files

Pair up. The goal is to create a report of the amount of times certain words (sequences of characters) appear in all the different files. How are you going to divide the work?



