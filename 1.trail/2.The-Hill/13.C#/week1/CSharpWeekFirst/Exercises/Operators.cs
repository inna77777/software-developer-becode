namespace CSharpWeekFirst.Exercises;

public class Operators
{
    public static string IsAdult(int age)
    {
        if (age >= 18)
        {
            return "You are an adult";
        }
        else
        {
            return "You are a child";
        }
    }

    public static string EvenOrOdd(int number)
    {
        if (number % 2 == 0)
        {
            return "Even";
        }
        else
        {
            return "Odd";
        }
    }

    public static int Add(int a, int b)
    {
        return a + b;
    }

    public static int Max(int a, int b)
    {
        return a > b ? a : b;
    }
}