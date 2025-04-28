using CSharpWeekFirst.Exercises;

namespace Tests;

public class UnitTest5Operators
{
    [Test]
    public void Test_IsAdult()
    {
        int age = 22;

        string expected = "You are an adult";

        string result = Operators.IsAdult(age);

        Assert.That(result, Is.EqualTo(expected));
    }

    [Test]
    public void Test_isChild()
    {
        int age = 17;

        string expected = "You are a child";

        string result = Operators.IsAdult(age);

        Assert.That(result, Is.EqualTo(expected));
    }
    
    [Test]
    public void Test_Even()
    {
        int number = 102;
        string result = "Even";

        Assert.That(Operators.EvenOrOdd(number), Is.EqualTo(result));
    }

    [Test]
    public void Test_Odd()
    {
        int number = 43;
        string result = "Odd";

        Assert.That(Operators.EvenOrOdd(number), Is.EqualTo(result));
    }
    [Test]
    public void Test_Add()
    {
        int number = Operators.Add(1,5);
        int result = 6;

        Assert.That(number, Is.EqualTo(result));
    }
    [Test]
    public void Test_Max()
    {
        Assert.That(Operators.Max(2, 5), Is.EqualTo(5));
    }
}