[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ym0HBCE0)
# 7. Conditions

In this chapter, let us diving into conditions. There are two types of statements.

## if / else if / else

Like many programming languages, if, else if, and else statements are used to control the flow of your program based on certain conditions. These statements allow your program to make decisions and execute different code blocks depending on whether specified conditions are true or false.

### Syntax

Here's the basic syntax of if, else if, and else statements:

```csharp
if (condition1) {
    // Code block to be executed if condition1 is true
} else if (condition2) {
    // Code block to be executed if condition2 is true
} else {
    // Code block to be executed if neither condition1 nor condition2 is true
}
```

### Example

Let's look at an example in C#:

```csharp
int x = 10;

if (x > 0) {
    Console.WriteLine("x is positive");
} else if (x == 0) {
    Console.WriteLine("x is zero");
} else {
    Console.WriteLine("x is negative");
}
```

But if we only have one statement, we can remove the {brackets} like this, which is more cleaner, but it is a personnal choice.

```csharp
int x = 10;

if (x > 0) Console.WriteLine("x is positive");
else if (x == 0) Console.WriteLine("x is zero");
else Console.WriteLine("x is negative");
```

### Nested Conditions

You can also nest if, else if, and else statements within each other to handle more complex decision-making:

```csharp
int x = 10;
int y = 20;

if (x > 0) {
    if (y > 0) {
        Console.WriteLine("Both x and y are positive");
    } else {
        Console.WriteLine("x is positive but y is not");
    }
} else {
    Console.WriteLine("x is not positive");
}
```

The if, else if, and else statements are fundamental constructs in programming that allow you to execute different code blocks based on conditions. They help you build logic into your programs, making them more dynamic and responsive to different inputs and states.

### Jump statements : break and continue

### Break

```csharp
for(int i = 0; i <= 10; i++)
{
    if(i == 5)
    {
        break;
    }

    Console.WriteLine(i)
}
```

- **Loop Initialization:** The `for` loop starts with `i` initialized to 0 and runs until `i` is greater than 10.
- **Condition Check:** For each iteration, the loop checks if `i` is equal to 5.
- **Break Execution:** When `i` reaches 5, the `break` statement is executed, immediately exiting the loop, stopping any further iterations.
- **Output:** The numbers `0` to `4` are printed, but when `i` equals 5, the loop ends and no further numbers are printed.

**The `break` statement exits the loop completely when a specific condition is met.**

### Continue

```csharp
 for (int i = 1; i <= 10; i++)
 {
    if (i == 5)
    {
        Console.WriteLine("I replace the 5");
        continue;
    }

    Console.WriteLine(i);
 }
```

- **Loop Initialization:** The for loop starts with `i` initialized to 1 and runs until `i` is greater than 10.

- **Condition Check:** For each iteration, the loop checks if `i` is equal to 5.

- **Continue Execution:** When `i` equals 5, the message "I replace the 5" is printed, and the `continue` statement is executed. This skips the rest of the loop body for that iteration and moves directly to the next iteration of the loop.

- **Output:** The numbers `1` to `10` are printed, but instead of printing `5`, it prints "I replace the 5".

**The `continue` statement skips the current iteration of the loop when a specific condition is met, but the loop continues running for subsequent iterations.**

## Switch

The switch statement is another way to control the flow of your program based on the value of a variable. It provides a cleaner alternative to multiple if statements when you have a single variable with multiple possible values and want to execute different code blocks for each value.

### Syntax

Here's the basic syntax of the switch statement:

```csharp
switch (variable) {
    case value1:
        // Code block to be executed if variable equals value1
        break;
    case value2:
        // Code block to be executed if variable equals value2
        break;
    // More case statements as needed
    default:
        // Code block to be executed if none of the above cases match
        break;
}
```

### Example

Let's look at an example in C#:

```csharp
int dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        Console.WriteLine("It's Monday");
        break;
    case 2:
        Console.WriteLine("It's Tuesday");
        break;
    case 3:
        Console.WriteLine("It's Wednesday");
        break;
    // More cases for other days of the week
    default:
        Console.WriteLine("Invalid day");
        break;
}
```

The switch statement provides a concise way to execute different code blocks based on the value of a variable. It improves code readability and maintainability, especially when dealing with multiple possible values for a variable.

## Exercices

### 1. Can you go to the Casino?

Create a program that asks the user to enter their age and determines if they have permission to enter the casino. The program should handle potential errors gracefully using try and catch blocks.

Requirements:

1.  Ask the User for Age:
    - Prompt the user to enter their age.
2.  Parse the Age:
    - Convert the user's input into an int using int.Parse.
3.  Check Eligibility:

    - If the user is 18 years old or older, print a message indicating they can enter the casino.
    - If the user is younger than 18, print a message indicating they cannot enter.

4.  Handle Errors:

    - Use a try-catch block to handle any potential exceptions that might occur during the input parsing.

    - Specifically, catch FormatException to handle cases where the user enters something that is not a number.

5.  Graceful Error Handling:

- If an exception occurs, print a user-friendly message explaining the error.

```csharp
try
{
    Console.WriteLine("Hello, what is your age?");
    Console.WriteLine(CanEnterInTheCasino());
}
 catch (FormatException e)
{
    Console.WriteLine($"Exception: {e.Message}");
}
 catch (Exception e)
{
    Console.WriteLine($"Something went wrong: {e}");
}
```

```csharp
[Test]
public void Test_Can_Enter_In_TheCasino()
{
    var input = new StringReader("23");

    Console.SetIn(input);

    var result = Selection.Solution.CanEnterInTheCasino();

    Assert.AreEqual("You can enter! Be welcome!", result);
}

[Test]
public void Test_Can_not_Enter_In_The_Casino()
{
    var input = new StringReader("13");

    Console.SetIn(input);

    var result = Selection.Solution.CanEnterInTheCasino();

    Assert.AreEqual("Sorry, you can't enter! Be patient!", result);
}

[Test]
public void Test_Get_Validated_Age()
{
    int age = Selection.Solution.GetValidatedAge("23");

    Assert.That(age, Is.EqualTo(23));
}

[Test]
public void Test_Get_Unvalidated_Age_string()
{
    Assert.Throws<FormatException>(() => Selection.Solution.GetValidatedAge("Bonjour"));
}
```

### 2. Checking the sign of a number

Write a program that asks the user to enter a number and checks whether the number is positive, negative or zero.

```csharp
[Test]
public void Test_SignOfNumber_Positive()
{
    Assert.That(Selection.Solution.SignOfNumber(20), Is.EqualTo("The number is positive."));
}

[Test]
public void Test_SignOfNumber_Negative()
{
    Assert.That(Selection.Solution.SignOfNumber(-2), Is.EqualTo("The number is negative."));
}

[Test]
public void Test_SignOfNumber_Zero()
{
    Assert.That(Selection.Solution.SignOfNumber(0), Is.EqualTo("The number is zero."));
}
```

### 3.Discount price calculator

Write a program that calculates the final price after applying multiple discounts. The program must ask the user to enter the initial price and choose from several possible discounts.

- 10% discount for students.
- 5% discount for members.
- 20% discount for sale products.

```csharp
[Test]
public void Test_DiscountPriceCalculatorOption1()
{
    Assert.That(Selection.Solution.DiscountPriceCalculator(1,25), Is.EqualTo(22.5));
}

[Test]
public void Test_DiscountPriceCalculatorOption2()
{
    Assert.That(Selection.Solution.DiscountPriceCalculator(2,25), Is.EqualTo(23.75));
}

[Test]
public void Test_DiscountPriceCalculatorOption3()
{
    Assert.That(Selection.Solution.DiscountPriceCalculator(3,25), Is.EqualTo(20));
}

[Test]
public void Test_DiscountPriceCalculatorError()
{
    // Arrange
    int invalidChoice = 4;
    double price = 25;

    // Act & Assert
    var ex = Assert.Throws<ArgumentException>(() => Selection.Solution.DiscountPriceCalculator(invalidChoice, price));

    Assert.That(ex.Message, Is.EqualTo("Invalid choice. Please enter a number between 1 and 3."));
}
```

### 4. Triangle classification

Write a program that reads the length of the three sides of a triangle and determines whether the triangle is equilateral, isosceles or scalene.

![](https://apprendre-reviser-memoriser.fr/wp-content/uploads/2017/12/Géométrie-les-types-de-triangles-e1512219765906.jpg)

```csharp
[Test]
public Test_void TriangleClassificationEquilateral()
{
    Assert.That(Selection.Solution.TriangleClassification(10,10,10), Is.EqualTo("The triangle is equilateral."));
}

[Test]
public Test_void TriangleClassificationIsosceles()
{
    Assert.That(Selection.Solution.TriangleClassification(10,5,10), Is.EqualTo("The triangle is isosceles."));
}

[Test]
public Test_void TriangleClassificationScalene()
{
    Assert.That(Selection.Solution.TriangleClassification(10,5,8), Is.EqualTo("The triangle is scalene."));
}
```

![](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDU3bzdnNjJqY3BmMjY0dHF3eWZ2bjZ1eGdyc3gxczF0dDUxOHd3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dspoErphyYzLO/giphy.webp)
