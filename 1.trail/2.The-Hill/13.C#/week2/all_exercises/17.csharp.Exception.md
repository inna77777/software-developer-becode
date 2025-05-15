# 17. Exception Handling
Exception handling is a critical part of understanding how errors are handled in C#.

It's common for junior developers to rely heavily on conditional logic to handle errors. This method can lead to code that is hard to maintain and can miss many runtime exceptions that are better handled through more structured error handling techniques.

### 1. Example of Junior Approach

```csharp 
public class Number
{
    public List<int> numbers = new List<int>();

    public int TotalItem()
    {
        // Check if the list is empty and attempt to inform the user
        if (numbers.Count <= 0)
        {
            Console.WriteLine("There is an issue");  // Using 'Console.WriteLine' instead of 'echo'
            return 0;
        }

        return numbers.Count();
    }
}
```

### 2. Professional Approach: Proper Exception Handling
A more professional approach would involve proper exception handling mechanisms. Here’s how you could refactor the above code using C#'s exception handling features:

```csharp
public class Number
{
    public List<int> numbers = new List<int>();

    public int TotalItem()
    {
        if (numbers.Count <= 0)
        {
            throw new InvalidOperationException("The numbers list cannot be empty.");
        }
        return numbers.Count;
    }
}
```

### 3. try ... catch()
When you 'throw' an exception, it indicates that the code has encountered an error from which it cannot proceed without intervention. Exceptions are often thrown due to invalid inputs or incorrect method arguments. To manage these exceptions, you use a `try/catch block`. The `try` block wraps the code that might generate an exception, while the `catch` block is where you address the exception—whether by logging it, correcting the issue, or rethrowing the exception for further handling.

It's important to note that not all code that might throw an exception needs to be wrapped in a `try/catch` block. The decision to use `try/catch` depends on whether the potential exception should be handled immediately or allowed to propagate up the call stack.

```csharp 
public class Program
{
    public static void Main()
    {
        try
        {
            Number myNumber = new Number();
            int totalItems = myNumber.TotalItem();
            Console.WriteLine($"Total items: {totalItems}");
        }
        catch (InvalidOperationException ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
        }
    }
}
```

[Complete List of Exception Class in C#](https://www.completecsharptutorial.com/basic/complete-system-exception.php)

### 4. Finally
The `finally` block is used to execute code after the execution of the `try` and `catch` blocks, regardless of the outcome. This means the code inside the `finally` block will run whether or not an exception is thrown and caught.

```csharp
try
{
    // Code that may throw an exception
}
catch (Exception ex)
{
    // Code to handle the exception
}
finally
{
    // Code that always executes
}
```

### 5. Catching Multiple Types of Exceptions
It's possible to specify multiple `catch` blocks to handle different types of exceptions. This allows for more granular control over exception handling, letting you respond appropriately depending on the specific exception type that is thrown.

```csharp
try
{
    // Code that may throw an exception
}
catch (IOException ex)
{
    // Handle IO exceptions
}
catch (ArgumentException ex)
{
    // Handle argument exceptions
}
```

This structured approach to exception handling enhances the robustness and maintainability of your code by ensuring that each exception type can be addressed in a manner tailored to its characteristics.

### 6.Throwing Your Own Exceptions
In C#, you can throw exceptions manually to indicate that something unexpected has happened in your code, typically under conditions that you define. This is done using the `throw` keyword followed by an instance of an exception class. Throwing exceptions manually is useful when you want to enforce certain rules or conditions in your application.

```csharp
public void CheckAge(int age)
{
    if (age < 18)
    {
        throw new ArgumentException("Access denied - You must be at least 18 years old.");
    }
}
```

**Usage**: In this example, if the age parameter is less than 18, an ArgumentException is thrown, indicating that the age requirement is not met. This helps in preventing the rest of the method from executing when the age condition fails.

### 7.Creating Your Own Exception Types
While C# provides a wide range of built-in exception types, you might find yourself needing to define custom exceptions to represent specific error conditions in your application more clearly. Custom exceptions are created by deriving from the `Exception` class or one of its subclasses.

```csharp
public class UserNotFoundException : Exception
{
    public UserNotFoundException()
        : base("User not found.") { }

    public UserNotFoundException(string message)
        : base(message) { }

    public UserNotFoundException(string message, Exception inner)
        : base(message, inner) { }
}
```

**Usage**: This custom exception, `UserNotFoundException`, can be used to signal specific errors related to user retrieval operations. It includes several constructors that mirror those of the base `Exception` class, allowing you to pass messages or other exceptions along with the custom exception.

---

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW5wMWU2eGI0YjI4N2I1Ymp1YzJnczI5NmhsdTNycHBoaWxtNnN4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MeAjdMQIqQ2iX1RDt9/giphy.gif)