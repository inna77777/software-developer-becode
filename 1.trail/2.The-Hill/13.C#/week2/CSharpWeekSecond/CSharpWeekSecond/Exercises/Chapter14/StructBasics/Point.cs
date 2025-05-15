namespace CSharpWeekSecond.Exercises.Chapter14.StructBasics;

public struct Point
{
    public double X { get; set; }
    public double Y { get; set; }

    public double DistanceTo(Point other)
    {
        var dx = X - other.X;
        var dy = Y - other.Y;
        return Math.Sqrt(dx * dx + dy * dy);
    }
}