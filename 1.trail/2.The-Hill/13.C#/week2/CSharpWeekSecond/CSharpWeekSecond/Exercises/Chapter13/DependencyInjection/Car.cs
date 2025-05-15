namespace CSharpWeekSecond.Exercises.Chapter13.DependencyInjection;

public class Car
{
    private readonly Engine _engine;

    public Car(Engine engine)
    {
        _engine = engine;
    }

    public void Start()
    {
        Console.WriteLine($"This car: {_engine.Function()}");
    }
}