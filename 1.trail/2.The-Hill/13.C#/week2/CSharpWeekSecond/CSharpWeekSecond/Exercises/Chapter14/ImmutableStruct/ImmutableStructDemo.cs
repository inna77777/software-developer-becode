namespace CSharpWeekSecond.Exercises.Chapter14.ImmutableStruct;

public class ImmutableStructDemo
{
    public static void Run()
    {
        var rect = new Rectangle(5, 4);
        Console.WriteLine($"Area: {rect.Area()}"); // 20
    }
}