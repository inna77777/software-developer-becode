[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/UHODkL1y)
# 9. String & char

**String in C#:**

- **Class:** String is a reference type and a class in the .NET framework.
- **Immutable:** Once a String object is created, its value cannot be changed. Any modification to a String results in the creation of a new String object.
- **Unicode support:** A String in C# is a sequence of Unicode characters, allowing it to store text in various languages.
- **Operations:** C# provides a rich set of methods for manipulating strings, including concatenation, comparison, searching, and more.
- **Nullability:** Since String is a reference type, it can be null.

**Char in c#:**

- **Structure:** Char (or char) is a value type and a structure in the .NET framework.
- **Mutable:** Unlike String, individual Char values are not immutable by nature, but because they are value types, they do not support methods to change the value of an existing instance.
- **Single character:** A Char represents a single 16-bit Unicode character.
  Operations: The Char structure provides methods for working with individual characters, like checking if a character is a digit, letter, or white space, and converting characters to their upper or lower case forms.
- **No Nullability:** By default, Char cannot be null. However, you can use Nullable<Char> or char? to allow null values.

## 1. Strings: Creating and Manipulating

```csharp
string name = "Peter";  // Creating a simple string
string lastname = new String("Peter");  // Creating a string using a constructor

// Using a constructor to create a string of repeated characters
string stars = new String('*',10); // Generates "**********"
```

## 2. Strings: Static methods

Static methods in the `String` class allow operations without an instance of the class:

```csharp
string[] countries = { "Belgium", "France", "USA" };
string result = string.Join(", ", countries);  // Joining strings
Console.WriteLine(result);

string name = "John ";
string lastname = "Doe";
Console.WriteLine($"Here is the full name: {string.Concat(name, lastname)}");  // Concatenating strings
```

## 3.String: Instance methods
Instance methods operate on individual instances of strings:

```csharp
string name = "I love C# so much";
string[] strings = name.Split(' ');  // Splitting a string into an array
Console.WriteLine(strings[2]); // Outputs "C#"
```

Check the doc for more instance or class methods

## 4. Conversions: String to Int and Back
Handling conversions between strings and numeric types:

```csharp
string x = string.Empty;
string y = string.Empty;
int? sum = null;

x = Console.ReadLine();
y = Console.ReadLine();

sum = int.Parse(x) + int.Parse(y);  // Parsing strings to integers and summing

Console.WriteLine(sum);

```

Converting numeric types to strings:

```csharp
float money = 23.5f;
int age = 34;

Console.WriteLine($"I have {money.ToString()} and I am {age.ToString()} years old.");
```

## 5.String Interpolation and Special Characters

```csharp
// Simple Interpolation
string name = "John";
Console.WriteLine($"{name}");

// Handling special characters
Console.WriteLine("Complete \"path\": C:\\Temp\\readme.md");

// Using Verbatim for easier path representations
Console.WriteLine(@"Complete ""path"": C:\Temp\readme.md");
```

It is right but we have two contraints like:

- Escape special "caracters",
- Escape the double quote

```csharp
Console.WriteLine("Complete \"path\": C:\\Temp\\readme.md");
```

So, we can use **Verbatim** instead of interpolation:

```csharp
Console.WriteLine(@"Complete ""path"": C:\Temp\readme.md");
```

- But we need to double the quotes

We can use both together:

```csharp
string s4 = "Complete \"path\": C:\\Temp\\readme.md";
string name = "John";

string print = $@"{name} : - {s4}";
Console.WriteLine(print);
```

But we have something that can be used:

```csharp
 string text = """
     Dans un literal de chaine brut:
     - pas besoin d'échaper les caractères spéciaux y compris les "guillemets",
     - on peut indenter la chaine comme le reste du code
     """;
 Console.WriteLine(text);
```

## Go deeper with int/float/decimal.ToString() method

```csharp
int age = 23;

string result = age.ToString(); // "23"
string result2 = age.ToString("N3"); // 23,000
string result3 = age.ToString("D3"); // 023

// We need to add this line, to "activate" the unicode in the terminal
Console.OutputEncoding = Encoding.Unicode;

float price = 23.4f;
string priceEuro = price.ToString("c2"); // 23.40€
string priceUSA = price.ToString("c2", CultureInfo.GetCultureInfo("us-US")); // $23.4

// Personnal formats

 long phone = 487324542;
 const string PREFIX_PHONE_BE = "+32";
 string result = phone.ToString($"{PREFIX_PHONE_BE} ### ## ## ##"); // +32 487 32 45 42
```

So, let's resume, we can pass some parameters in the static method **ToString()** like:

- Nn : Add n digits after the string
- Dn: Add (n-number) digits before the string
- Cn : Add the "currency" before / after the string, n-number add digit after the string
- CultureInfo : A provider which Changing the localization `CultureInfo.GetCultureInfo("us-US")`

## Exercices

### 1. Reverse a String
**Objective**: Write a program that takes a string input from the user and prints it in reverse order.
- Example: Input: "hello" Output: "olleh".

```csharp
[Test]
public void Test_ReversedString()
{
    string result = StringChar.Solution.ReversedString("hello");
    Assert.That(result, Is.EqualTo("olleh"));
}

[Test]
public void Test_ReversedString_Exception()
{
    var ex = Assert.Throws<ArgumentException>(() => StringChar.Solution.ReversedString(""));
    Assert.That(ex.Message, Is.EqualTo("Input string must not be empty"));
}
``` 

### 2.Count Vowels
***Objective***: Create a program that counts and prints the number of vowels in a given string.
- Example: Input: "hello world" Output: "Number of vowels: 3"

```csharp
[Test]
public void Test_CountVowels()
{
    string result = StringChar.Solution.CountVowels("You are a nice software developer");
    Assert.That(result, Is.EqualTo($"Number of vowels:{6}"));
}

[Test]
public void Test_CountVowels_Exception()
{
    var ex = Assert.Throws<ArgumentException>(() => StringChar.Solution.CountVowels(""));
    Assert.That(ex.Message, Is.EqualTo("Input string must not be empty"));
}
```

### 3. Palindrome Check
**Objective**: Develop a program that checks whether a given string is a palindrome (a string that reads the same forward and backward, ignoring spaces, punctuation, and capitalization).

- Example: Input: "A man a plan a canal Panama" Output: "The string is a palindrome."

```csharp
[Test]
public void Test_IsPalindrome()
{
    bool result = StringChar.Solution.isPalindrome("Elu par cette crapule");
    Assert.That(result, Is.EqualTo(true));
}
```

### 4.First Non-Repeating Character
**Objective**: Write a C# program that finds and displays the first non-repeating character in a string. If every character repeats, the program should output a message stating that there are no unique characters.

- Example: Input: "stress" Output: "First non-repeating character is 't'".

```csharp
[Test]
public void Test_FirstNonRepeatingCharacter()
{
    char result = StringChar.Solution.Test_FirstNonRepeatingCharacter("Stress");
    Assert.That(result, Is.EqualTo('t'));
}
```

--- 
![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3pwZmY0NmswNXB1bThrZ2pkaXo1Y21yZGppbWFwcmJ4dnplcG9hZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ry4xUcotnl63NSNfU3/giphy.gif)