namespace CSharpWeekFirst.Exercises;

public class Variables
{
    public static string SayHello(string name)
    {
        return $"Hello {name}";
    }

    public static float AgeToFloat(int age)
    {
        return age / 2f;
    }

    public static decimal CelciusToFarenheit(int celcius)
    {
        return (celcius * 9m / 5m) + 32m;
    }

    public static double KilometersToMiles(int kilometers)
    {
        return kilometers * 0.6;
    }

    public static int RandomNumberBetween1And10()
    {
        Random random = new Random();
        return random.Next(1, 11); // 1 included, 11 excluded
    }
}