namespace CSharpWeekSecond.Exercises.Chapter14.ImmutableStruct;

public readonly struct Rectangle
{
    public readonly double Width { get; }
    public readonly double Height { get; }

    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }

    public double Area()
    {
        return Width * Height;
    }
}