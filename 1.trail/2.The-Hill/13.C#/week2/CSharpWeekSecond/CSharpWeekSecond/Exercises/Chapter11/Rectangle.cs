namespace CSharpWeekSecond.Exercises.Chapter11;

public class Rectangle
{
    private double _length;
    private double _width;

    public double Length
    {
        get => _length;
        set
        {
            if (value <= 0)
                throw new ArgumentOutOfRangeException(nameof(value), "Length cannot be zero or negative.");
            _length = value;
        }
    }

    public double Width
    {
        get => _width;
        set
        {
            if (value <= 0)
                throw new ArgumentOutOfRangeException(nameof(value), "Width cannot be zero or negative.");
            _width = value;
        }
    }

    public double CalculateArea()
    {
        return Length * Width;
    }
}