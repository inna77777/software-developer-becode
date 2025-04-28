using CSharpWeekFirst.Exercises;
using NUnit.Framework.Legacy;

namespace Tests;

public class UnitTest7Conditions
{
    [Test]
    public void Test_Can_Enter_In_TheCasino()
    {
        var input = new StringReader("23");

        Console.SetIn(input);

        var result = Conditions.CanEnterInTheCasino();

        ClassicAssert.AreEqual("You can enter! Be welcome!", result);
    }

    [Test]
    public void Test_Can_not_Enter_In_The_Casino()
    {
        var input = new StringReader("13");

        Console.SetIn(input);

        var result = Conditions.CanEnterInTheCasino();

        ClassicAssert.AreEqual("Sorry, you can't enter! Be patient!", result);
    }

    [Test]
    public void Test_Get_Validated_Age()
    {
        var age = Conditions.GetValidatedAge("23");

        Assert.That(age, Is.EqualTo(23));
    }

    [Test]
    public void Test_Get_Unvalidated_Age_string()
    {
        Assert.Throws<FormatException>(() => Conditions.GetValidatedAge("Bonjour"));
    }

    [Test]
    public void Test_SignOfNumber_Positive()
    {
        Assert.That(Conditions.SignOfNumber(20), Is.EqualTo("The number is positive."));
    }

    [Test]
    public void Test_SignOfNumber_Negative()
    {
        Assert.That(Conditions.SignOfNumber(-2), Is.EqualTo("The number is negative."));
    }

    [Test]
    public void Test_SignOfNumber_Zero()
    {
        Assert.That(Conditions.SignOfNumber(0), Is.EqualTo("The number is zero."));
    }

    [Test]
    public void Test_DiscountPriceCalculatorOption1()
    {
        Assert.That(Conditions.DiscountPriceCalculator(1, 25), Is.EqualTo(22.5));
    }

    [Test]
    public void Test_DiscountPriceCalculatorOption2()
    {
        Assert.That(Conditions.DiscountPriceCalculator(2, 25), Is.EqualTo(23.75));
    }

    [Test]
    public void Test_DiscountPriceCalculatorOption3()
    {
        Assert.That(Conditions.DiscountPriceCalculator(3, 25), Is.EqualTo(20));
    }

    [Test]
    public void Test_DiscountPriceCalculatorError()
    {
        // Arrange
        var invalidChoice = 4;
        double price = 25;

        // Act & Assert
        var ex = Assert.Throws<ArgumentException>(() => Conditions.DiscountPriceCalculator(invalidChoice, price));

        Assert.That(ex.Message, Is.EqualTo("Invalid choice. Please enter a number between 1 and 3."));
    }

    [Test]
    public void TriangleClassificationEquilateral()
    {
        Assert.That(Conditions.TriangleClassification(10, 10, 10), Is.EqualTo("The triangle is equilateral."));
    }

    [Test]
    public void TriangleClassificationIsosceles()
    {
        Assert.That(Conditions.TriangleClassification(10, 5, 10), Is.EqualTo("The triangle is isosceles."));
    }

    [Test]
    public void TriangleClassificationScalene()
    {
        Assert.That(Conditions.TriangleClassification(10, 5, 8), Is.EqualTo("The triangle is scalene."));
    }
}