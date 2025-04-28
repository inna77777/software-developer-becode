[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/YZxyITqd)
# 6. Loops

Well, you're excited about the idea of telling the whole world how much you love c#. You're so enthusiastic that you repeat it dozens of times.

```csharp
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
Console.WriteLine("I love C#");
```

Okay, that's good, but there's a principle that developers put in place to avoid repetition, called loops. Take a closer look at how a loop works. Well, there are several ways of writing them, and their usefulness is different.

## While Loop

```csharp
int x = 1;

while(x <= 10)
{
    Console.WriteLine("I love C#");
    x++;
}
```

### How it Works

- The loop starts with x equal to 1.
- It prints "I love C#".
- Then, x is incremented to 2.
- This process repeats until x becomes 11.
- When x is 11, the condition x <= 10 is no longer true, so the loop stops.

## For Loop

```csharp
for(int x = 1; i <= 10; i++)
{
    Console.WriteLine("I love C#");
}
```

### How it Works

- The loop starts with x equal to 1.
- It checks if x is less than or equal to 10.
- If true, it prints "I love C#".
- Then, x is incremented by 1 (so, x becomes 2).
- This process repeats until x becomes 11.
- When x is 11, the condition x <= 10 is no longer true, so the loop stops.

## Do ... While

```csharp
bool flag = false;
do{
    Console.WriteLine("Please, enter a number between 1 and 10");

    string? number = Console.ReadLine();

    flag = int.TryParse(number, out int x) && x >= 1 && x <= 10;

} while(!flag);
```

### How it Works

- A boolean variable `flag` is initialized to `false`.
- The `do` block is executed at least once, regardless of the initial value of `flag`, because the condition is checked after the block.
- Inside the do block, the program prompts the user to "Please, enter a number between 1 and 10".
- The user's input is read using `Console.ReadLine()` and stored as a string in the `number` variable.
- The program then tries to parse the input string to an integer using `int.TryParse()`. If parsing is successful, and the number is between 1 and 10 (inclusive), `flag` is set to `true`. Otherwise, flag remains false.
- The `while` loop checks if `flag` is false. If it is, the loop repeats, prompting the user again. If `flag` is `true`, the loop stops, ending the program.

## Exercices

### 1. Sum of Numbers using a `for` Loop.

Write a C# program that calculates the sum of all integers from 1 to 100. Use a for loop to perform the addition.

- Hint: Start with a variable sum initialized to 0 and iterate through numbers 1 to 100, adding each to sum.

```csharp
[Test]
public void Test_SumOfNumbers()
{
    int result = Iteration.Program.SumOfNumbers();
    Assert.That(result, Is.EqualTo(100));
}
```

### 2. Factorial Calculation using a while Loop

Write a C# program that calculates the factorial of a given number n. Use a `while` loop to perform the calculation.

**Example:** `n! = n*(n-1)*...*2*1`

- Be carrefull: if the number is negative, throws an exception.

```csharp
[Test]
public void Test_Factorial()
{
    int sum = Iteration.Solution.Factorial(5);
    Assert.That(sum,Is.EqualTo(120));
}

[Test]
public void Test_Factorial_NegativeInput_ThrowsException()
{
    Assert.Throws<ArgumentException>(() => Iteration.Solution.Factorial(-5));
}
```

```csharp
namespace Iteration
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Console.WriteLine(Solution.Factorial(-5));
            }catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
```

### 3. Print a Multiplication Table using a Nested for Loop

Write a C# program that prints the multiplication table for numbers from 1 to 10 using nested for loops.

```markdown
1 x 1 = 1
1 x 2 = 2
...
10 x 9 = 90
10 x 10 = 100
```

```csharp
"The answer is within the test itself, so it will not be provided."
```

### 4. Validate User Input using a do...while Loop

Write a C# program that asks the user to enter a number between 1 and 10. The program should continue to prompt the user until a valid number is entered. Use a do...while loop for this task.

```csharp
"No need to give you the Unit Test."
```

### 5. Find the Smallest Number using a while Loop

Write a C# program that asks the user to input numbers continuously until they enter 0. The program should then display the smallest number entered. Use a while loop for this task. Do not use `if/else` statement.

```csharp
"No need to give you the Unit Test."
```

---

![](https://media.tenor.com/Xk5vnzCZBjUAAAAM/loop.gif)
