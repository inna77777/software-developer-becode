using CSharpWeekFirst.Exercises;
using NUnit.Framework.Legacy;

namespace Tests;

public class UnitTest10Methods
{
    [Test]
    public void Test_Sum()
    {
        Assert.That(Methods.Sum(2, 5), Is.EqualTo(7));
    }

    [Test]
    public void Test_Whos()
    {
        Assert.That(Methods.Whos("John", "Doe", 23), Is.EqualTo("Firstname : John\nLastname : Doe\nAge : 23"));
    }

    [Test]
    public void SumAndProduct_ShouldReturnCorrectSumAndProduct()
    {
        int sum, product;
        Methods.SumAndProduct(3, 4, out sum, out product);

        ClassicAssert.AreEqual(7, sum, "The sum of 3 and 4 should be 7.");
        ClassicAssert.AreEqual(12, product, "The product of 3 and 4 should be 12.");
    }

    [Test]
    public void QuotientAndRemainder_ShouldReturnCorrectQuotientAndRemainder()
    {
        var result = Methods.QuotientAndRemainder(10, 3);

        ClassicAssert.AreEqual(3, result.quotient, "The quotient of 10 divided by 3 should be 3.");
        ClassicAssert.AreEqual(1, result.remainder, "The remainder of 10 divided by 3 should be 1.");
    }

    [Test]
    public void MethodWithDefaultValue_ShouldReturnDoubleOfProvidedValue()
    {
        var result = Methods.MethodWithDefaultValue(5);
        ClassicAssert.AreEqual(10, result, "The result with a value of 5 should be 10.");
    }

    [Test]
    public void MethodWithDefaultValue_ShouldReturnDoubleOfDefaultValue_WhenNoValueIsProvided()
    {
        var result = Methods.MethodWithDefaultValue();
        ClassicAssert.AreEqual(20, result,
            "The result with no provided value should be 20 (10 by default multiplied by 2).");
    }
}