namespace CSharpWeekSecond.Exercises.Chapter16;

public class Box<T>
{
    private readonly T value;

    public Box(T value)
    {
        this.value = value;
    }

    public void DisplayValue()
    {
        Console.WriteLine(value);
    }
}