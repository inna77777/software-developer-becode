using CSharpWeekFirst.Exercises;

namespace Tests;

public class UnitTest6Loops
{
    [Test]
    public void Test_SumOfNumbers()
    {
        int result = Loops.SumOfNumbers();
        Assert.That(result, Is.EqualTo(5050));
    }
    
    [Test]
    public void Test_Factorial()
    {
        int sum = Loops.Factorial(5);
        Assert.That(sum,Is.EqualTo(120));
    }

    [Test]
    public void Test_Factorial_NegativeInput_ThrowsException()
    {
        Assert.Throws<ArgumentException>(() => Loops.Factorial(-5));
    }
}