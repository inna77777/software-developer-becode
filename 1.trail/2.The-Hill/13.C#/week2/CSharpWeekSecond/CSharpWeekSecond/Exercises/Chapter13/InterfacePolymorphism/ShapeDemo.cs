namespace CSharpWeekSecond.Exercises.Chapter13.InterfacePolymorphism;

public class ShapeDemo
{
    public static void Run()
    {
        var circle = new Circle(5.0);
        Console.WriteLine($"Circle Area: {circle.CalculateArea():F2}");
        circle.Paint("red");

        Console.WriteLine();

        var square = new Square(4.0);
        Console.WriteLine($"Square Area: {square.CalculateArea():F2}");
        square.Paint("blue");
    }
}