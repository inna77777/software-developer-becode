namespace CSharpWeekSecond.Exercises.Chapter13.AbstractClassesPolymorphism;

public class Motorcycle : Vehicle
{
    public override void Start()
    {
        Console.WriteLine("The motorcycle starts with a loud rev.");
    }
}