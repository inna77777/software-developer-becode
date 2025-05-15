namespace CSharpWeekSecond.Exercises.Chapter13.InterfacePolymorphism;

public class Circle : Shape, Paintable
{
    public Circle(double radius)
    {
        Radius = radius;
    }

    public double Radius { get; set; }

    public void Paint(string color)
    {
        Console.WriteLine($"The circle has been painted {color}.");
    }

    public override double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }
}