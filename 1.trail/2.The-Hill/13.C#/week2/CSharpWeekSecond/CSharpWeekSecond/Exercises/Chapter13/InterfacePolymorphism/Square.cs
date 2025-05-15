namespace CSharpWeekSecond.Exercises.Chapter13.InterfacePolymorphism;

public class Square : Shape, Paintable
{
    public Square(double side)
    {
        Side = side;
    }

    public double Side { get; set; }

    public void Paint(string color)
    {
        Console.WriteLine($"The square has been painted {color}.");
    }

    public override double CalculateArea()
    {
        return Side * Side;
    }
}