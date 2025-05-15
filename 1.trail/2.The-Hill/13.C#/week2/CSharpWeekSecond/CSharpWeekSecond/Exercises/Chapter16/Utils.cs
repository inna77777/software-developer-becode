namespace CSharpWeekSecond.Exercises.Chapter16;

public static class Utils
{
    public static void Swap<T>(ref T a, ref T b)
    {
        var temp = a;
        a = b;
        b = temp;
    }
}