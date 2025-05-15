using CSharpWeekSecond.Exercises.Chapter14.StructBasics;

namespace CSharpWeekSecond.Exercises.Chapter14;

public record Shape(Point Center, double Radius);

public class StructRecordCombinationDemo
{
    public static void Run()
    {
        var shape1 = new Shape(new Point { X = 1, Y = 2 }, 10);
        var shape2 = shape1 with { Radius = 20 };

        Console.WriteLine(shape1); // Shape { Center = Point { X = 1, Y = 2 }, Radius = 10 }
        Console.WriteLine(shape2); // Shape { Center = Point { X = 1, Y = 2 }, Radius = 20 }
    }
}