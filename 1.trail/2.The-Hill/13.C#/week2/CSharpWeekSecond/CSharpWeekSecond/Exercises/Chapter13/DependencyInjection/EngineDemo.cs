namespace CSharpWeekSecond.Exercises.Chapter13.DependencyInjection;

public class EngineDemo
{
    public static void Run()
    {
        // Create engine instances
        Engine gasolineEngine = new GasolineEngine();
        Engine dieselEngine = new DieselEngine();

        // Inject into Car
        var gasolineCar = new Car(gasolineEngine);
        var dieselCar = new Car(dieselEngine);

        // Start cars
        gasolineCar.Start(); // Output: This car: This engine runs on gasoline.
        dieselCar.Start(); // Output: This car: This engine runs on diesel.
    }
}