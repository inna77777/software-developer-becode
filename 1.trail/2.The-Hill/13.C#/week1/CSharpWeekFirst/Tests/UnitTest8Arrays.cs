using CSharpWeekFirst.Exercises;

namespace Tests;

public class UnitTest8Arrays
{
    [Test]
    public void Test_Sum()
    {
        int[] numbers = { 41, 51, 17, 45, 12 };
        var sum = Arrays.Sum(numbers);

        Assert.That(sum, Is.EqualTo(166));
    }

    [Test]
    public void Test_Average()
    {
        int[] numbers = { 41, 51, 17, 45, 12 };
        var average = Arrays.Average(numbers);

        Assert.That(average, Is.EqualTo(33.2));
    }

    [Test]
    public void Test_MaxAndMin()
    {
        int[] numbers = { 41, 51, 17, 45, 12 };
        Arrays.MaxAndMin(numbers, out var max, out var min);

        Assert.Multiple(() =>
        {
            Assert.That(max, Is.EqualTo(51));
            Assert.That(min, Is.EqualTo(12));
        });
    }

    [Test]
    public void Test_Sort_An_Array()
    {
        int[] numbers = { 5, 3, 7, 8, 4, 1 };
        var result = Arrays.SortAndArray(numbers);
        int[] final = { 1, 3, 4, 5, 7, 8 };

        Assert.That(result, Is.EqualTo(final));
    }

    [Test]
    public void Test_Palindrome()
    {
        int[] x = { 1, 2, 4, 2, 1 };

        Assert.That(Arrays.Palindrome(x), Is.EqualTo("The array is a palindrome"));
    }

    [Test]
    public void Test_Is_Not_Palindrome()
    {
        int[] x = { 1, 2, 4, 2, 2 };

        Assert.That(Arrays.Palindrome(x), Is.EqualTo("The array is not a palindrome"));
    }
}