namespace CSharpWeekFirst.Exercises;

public class Methods
{
    // 1. Sum
    public static int Sum(int a, int b)
    {
        return a + b;
    }

    // 2. Who's
    public static string Whos(string firstName, string lastName, int age)
    {
        return $"Firstname : {firstName}\nLastname : {lastName}\nAge : {age}";
    }

    // 3. Sum and product using out
    public static void SumAndProduct(int a, int b, out int sum, out int product)
    {
        sum = a + b;
        product = a * b;
    }

    // 4. Sum and product again (tuple version)
    public static (int quotient, int remainder) QuotientAndRemainder(int dividend, int divisor)
    {
        return (dividend / divisor, dividend % divisor);
    }

    // 5. Method with a default value
    public static int MethodWithDefaultValue(int value = 10)
    {
        return value * 2;
    }
}