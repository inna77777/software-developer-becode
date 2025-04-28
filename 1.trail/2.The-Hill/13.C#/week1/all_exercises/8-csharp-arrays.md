[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/qp2bybzk)
# 8 Arrays 

Previously, we saw that a single variable can only store one element. For example, if we want to store the `age` of a user, we can simply declare a variable `age` and assign it the value `23`.

```csharp
int age = 23;
string name = "John"; // The same goes for strings.
```

But what if we want to store multiple names? Imagine if we could store a collections of names. This is where arrays comes in place.

## Generate a new array

As a best practice, remember to first declare the type, followed by square brackes `[]`. These brackets indicates that we are working with an aray. Let's take our early `name` variable and transform it into an array.

```csharp
string[] names = new string[2];
int[] numbers
```

## Affectation

```csharp
string[] names = new string[2]{"John","Hector"};
int[] numbers = {2,4,5};
```

## Iterate the arrays

To display an element of an array, simply call the array and place the index of the element between `[index]`. Remember that array indices always start at `0`.

```csharp
string[] names = {"John","Hector"};
Console.WriteLine($"{names[0]}"); // John
```

But what if we want to display all the names?

```csharp
string[] names = {"John","Hector"};
Console.WriteLine($"{names[0]}"); // John
Console.WriteLine($"{names[1]}"); // Hector
```

Now, if there are 100 entries, how do we handle that? In such case, we iterate over each element using a loop.

```csharp
float[] numbers = {1.4f,2.3f,7.5f,4.2f};

// For
for(int i = 0; i <= numbers.length; i++)
{
    Console.WriteLine(numbers[i]);
}

// Foreach
foreach(int item in numbers)
{
    Console.WriteLine(item);
}
```

In conlusion, it is important to note you cannot change the size of an array (i.e., add or remove elements), but you can modify the value of existing elements.

```csharp
int[] age = {25,54,36,41};
age[1] = 5; // {25,5,36,41}
```

## Exercises

### 1. Initialize and Loop Through an Array

Create an array of 10 integers, initialize it with random numbers from 1 to 10, and then display each element of the array.

### 2. Calculate the Sum and Average

Write a program that calculates the sum and the average of the elements in an integer array.

```csharp
[Test]
public void Test_Sum()
{
    int[] numbers = { 41, 51, 17, 45, 12 };
    int sum = Arrays.Solution.Sum(numbers);

    Assert.That(sum, Is.EqualTo(166));
}

[Test]
public void Test_Average()
{
    int[] numbers = { 41, 51, 17, 45, 12 };
    double average = Arrays.Solution.Average(numbers);

    Assert.That(average, Is.EqualTo(33.2));
}
```

### 3. Find Max & Min

Write a program that retrieves the maximum and minimum values from an array.

```csharp
 [Test]
 public void Test_MaxAndMin()
 {
     int[] numbers = { 41, 51, 17, 45, 12 };
     Arrays.Solution.MaxAndMin(numbers, out int max, out int min);

     Assert.Multiple(() =>
     {
         Assert.That(max, Is.EqualTo(51));
         Assert.That(min, Is.EqualTo(12));
     });
 }
```

### 4. Sort an Array

Write a program that asks the user how many numbers they intend to enter (ensure it’s a valid number). Then, store those numbers in an array and display the sorted array.

```csharp
 [Test]
 public void Test_Sort_An_Array()
 {
    int[] numbers = { 5, 3, 7, 8, 4, 1 };
    int[] result = Arrays.Solution.SortAndArray(numbers);
    int[] final = { 1, 3, 4, 5, 7, 8 };

    Assert.That(result, Is.EqualTo(final));
 }
```

### 5. Palindrome?

Write a program that checks if the elements of an array form a palindrome (the same order forwards and backwards).

```csharp
 [Test]
 public void Test_Palindrome()
 {
     int[] x = { 1, 2, 4, 2, 1 };

     Assert.That(Arrays.Solution.Palindrome(x), Is.EqualTo("The array is a palindrome"));
 }

 [Test]
 public void Test_Is_Not_Palindrome()
 {
     int[] x = { 1, 2, 4, 2, 2 };

     Assert.That(Arrays.Solution.Palindrome(x), Is.EqualTo("The array is not a palindrome"));
 }
```

---

![](https://img.wattpad.com/d85e1a7e92f2c59b1879df58b30c0461530d34ff/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6d725351515a77383659493365513d3d2d3735373332323132332e313562316564313834653739386633333738363533303238353532332e676966)
