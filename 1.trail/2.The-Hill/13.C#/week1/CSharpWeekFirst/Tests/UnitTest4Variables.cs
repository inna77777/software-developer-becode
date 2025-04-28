using CSharpWeekFirst.Exercises;
namespace Tests;

public class Tests
{
    [Test]
    public void Test_SayHello()
    {
        Assert.That(Variables.SayHello("John"), Is.EqualTo("Hello John"));
        Assert.That(Variables.SayHello("Alice"), Is.EqualTo("Hello Alice"));
    }

    [Test]
    public void Test_AgeToFloat()
    {
        Assert.That(Variables.AgeToFloat(10), Is.EqualTo(5f));
        Assert.That(Variables.AgeToFloat(25), Is.EqualTo(12.5f));
    }

    [Test]
    public void Test_CelciusToFarenheit()
    {
        Assert.That(Variables.CelciusToFarenheit(0), Is.EqualTo(32m));
        Assert.That(Variables.CelciusToFarenheit(100), Is.EqualTo(212m));
        Assert.That(Variables.CelciusToFarenheit(-40), Is.EqualTo(-40m));
    }

    [Test]
    public void Test_KilometersToMiles()
    {
        Assert.That(Variables.KilometersToMiles(10), Is.EqualTo(6).Within(0.01)); // Allow small tolerance
        Assert.That(Variables.KilometersToMiles(5), Is.EqualTo(3).Within(0.01));
    }

    [Test]
    public void Test_RandomNumberBetween1And10()
    {
        for (int i = 0; i < 100; i++)
        {
            int number = Variables.RandomNumberBetween1And10();
            Assert.That(number, Is.GreaterThanOrEqualTo(1));
            Assert.That(number, Is.LessThanOrEqualTo(10));
        }
    }
}