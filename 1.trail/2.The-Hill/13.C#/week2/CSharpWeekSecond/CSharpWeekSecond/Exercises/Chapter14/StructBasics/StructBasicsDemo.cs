namespace CSharpWeekSecond.Exercises.Chapter14.StructBasics;

public class StructBasicsDemo
{
    public static void Run()
    {
        var p1 = new Point { X = 0, Y = 0 };
        var p2 = new Point { X = 3, Y = 4 };

        Console.WriteLine($"Distance: {p1.DistanceTo(p2)}"); // 5

        var p3 = p1;
        p3.X = 10;

        Console.WriteLine($"p1.X: {p1.X}"); // 0 (original not changed)
        Console.WriteLine($"p3.X: {p3.X}"); // 10 (copy changed)
    }
}