namespace CSharpWeekSecond.Exercises.Chapter14;

public record Person(string Name, int Age);

public class RecordBasicsDemo
{
    public static void Run()
    {
        var person1 = new Person("Alice", 30);
        var person2 = new Person("Alice", 30);

        Console.WriteLine(person1 == person2); // True (value-based)
    }
}