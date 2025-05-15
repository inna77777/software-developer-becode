namespace CSharpWeekSecond.Exercises.Chapter13.AbstractClassesPolymorphism;

public class Car : Vehicle

{
    public override void Start()
    {
        Console.WriteLine("The car starts with a roar.");
    }
}