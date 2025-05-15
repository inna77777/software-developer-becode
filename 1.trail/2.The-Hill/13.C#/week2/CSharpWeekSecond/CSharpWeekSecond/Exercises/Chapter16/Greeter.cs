namespace CSharpWeekSecond.Exercises.Chapter16;

public interface IHasName
{
    string Name { get; set; }
}

public class Person : IHasName
{
    public Person(string name)
    {
        Name = name;
    }

    public string Name { get; set; }
}

public class Greeter<T> where T : IHasName
{
    public void Greet(T person)
    {
        Console.WriteLine($"Hello, {person.Name}!");
    }
}