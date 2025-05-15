namespace CSharpWeekSecond.Exercises.Chapter14;

public record PersonBase(string Name);

public record Employee(string Name, string Position) : PersonBase(Name);

public class RecordInheritanceDemo
{
    public static void Run()
    {
        var p = new PersonBase("Bob");
        var e1 = new Employee("Bob", "Dev");
        var e2 = new Employee("Bob", "Dev");

        Console.WriteLine(p == e1); // False: different types
        Console.WriteLine(e1 == e2); // True: same values
    }
}