namespace CSharpWeekSecond.Exercises.Chapter13.AbstractClassInterface;

public class AnimalDemo
{
    public static void Run()
    {
        var animals = new List<Animal>
        {
            new Cat(),
            new Dog(),
            new Cat(),
            new Dog()
        };
        foreach (var animal in animals) animal.MakeNoise();
    }
}