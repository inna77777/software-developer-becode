namespace CSharpWeekSecond.Exercises.Chapter13.AbstractClassesPolymorphism;

public class VehicleDemo
{
    public static void Run()
    {
        var vehicles = new List<Vehicle>
        {
            new Car(),
            new Motorcycle()
        };
        foreach (var vehicle in vehicles) vehicle.Start(); // Polymorphism in action
    }
}