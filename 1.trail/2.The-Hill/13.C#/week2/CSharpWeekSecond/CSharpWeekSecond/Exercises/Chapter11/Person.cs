namespace CSharpWeekSecond.Exercises.Chapter11;

public class Person
{
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public string Name { get; }
    public int Age { get; }

    public bool IsAdult()
    {
        return Age >= 18;
    }

    public string Display()
    {
        return $"{Name} is {Age} years old : {(Age >= 13 && Age <= 17 ? "Teenager" : IsAdult() ? "Adult" : "Child")}";
    }
}