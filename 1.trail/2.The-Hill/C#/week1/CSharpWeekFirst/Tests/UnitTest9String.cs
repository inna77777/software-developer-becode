using CSharpWeekFirst.Exercises;

namespace Tests;

public class UnitTest9String
{
    [Test]
    public void Test_ReversedString()
    {
        var result = Strings.ReversedString("hello");
        Assert.That(result, Is.EqualTo("olleh"));
    }

    [Test]
    public void Test_ReversedString_Exception()
    {
        var ex = Assert.Throws<ArgumentException>(() => Strings.ReversedString(""));
        Assert.That(ex.Message, Is.EqualTo("Input string must not be empty"));
    }

    [Test]
    public void Test_CountVowels()
    {
        var result = Strings.CountVowels("You are a nice software developer");
        Assert.That(result, Is.EqualTo($"Number of vowels:{14}"));
    }

    [Test]
    public void Test_CountVowels_Exception()
    {
        var ex = Assert.Throws<ArgumentException>(() => Strings.CountVowels(""));
        Assert.That(ex.Message, Is.EqualTo("Input string must not be empty"));
    }

    [Test]
    public void Test_IsPalindrome()
    {
        var result = Strings.IsPalindrome("Elu par cette crapule");
        Assert.That(result, Is.EqualTo(true));
    }

    [Test]
    public void Test_FirstNonRepeatingCharacter()
    {
        var result = Strings.FirstNonRepeatingCharacter("Stress");
        Assert.That(result, Is.EqualTo('t'));
    }
}