using CSharpWeekSecond.Exercises.Chapter11;

namespace Tests;

public class Chapter11Tests
{
    private Person _adultPerson;
    private Book _book;
    private Person _childPerson;
    private Rectangle _rectangle;

    [SetUp]
    public void Setup()
    {
        // Setup for Book
        _book = new Book
        {
            Author = "John Doe",
            Title = "How to learn C#",
            Pages = 100
        };

        // Setup for Person
        _adultPerson = new Person("John", 23);
        _childPerson = new Person("Hector", 12);

        // Setup for Rectangle
        _rectangle = new Rectangle
        {
            Length = 4d,
            Width = 2d
        };
    }

    // --- Book Tests ---
    [Test]
    public void Book_Display_ReturnsExpectedString()
    {
        var expected = "Author : John Doe - Title : How to learn C# - Page : 100";
        var result = _book.Display();
        Assert.That(result, Is.EqualTo(expected));
    }

    // --- Person Tests ---
    [Test]
    public void Person_Display_ReturnsCorrectDescriptionForAdult()
    {
        var expected = "John is 23 years old : Adult";
        var actual = _adultPerson.Display();
        Assert.That(actual, Is.EqualTo(expected));
    }

    [Test]
    public void Person_IsAdult_ReturnsTrueForAdult()
    {
        var isAdult = _adultPerson.IsAdult();
        Assert.That(isAdult, Is.True);
    }

    [Test]
    public void Person_IsAdult_ReturnsFalseForChild()
    {
        var isAdult = _childPerson.IsAdult();
        Assert.That(isAdult, Is.False);
    }

    // --- Rectangle Tests ---
    [Test]
    public void Rectangle_ValidDimensions_AreSetCorrectly()
    {
        _rectangle.Length = 2d;
        _rectangle.Width = 5d;

        Assert.That(_rectangle.Length, Is.EqualTo(2d));
        Assert.That(_rectangle.Width, Is.EqualTo(5d));
    }

    [Test]
    public void Rectangle_Length_SetToNegative_ThrowsException()
    {
        var ex = Assert.Throws<ArgumentOutOfRangeException>(() => _rectangle.Length = -1);
        Assert.That(ex.ParamName, Is.EqualTo("value"));
        Assert.That(ex.Message, Does.StartWith("Length cannot be zero or negative."));
    }

    [Test]
    public void Rectangle_Width_SetToNegative_ThrowsException()
    {
        var ex = Assert.Throws<ArgumentOutOfRangeException>(() => _rectangle.Width = -1);
        Assert.That(ex.ParamName, Is.EqualTo("value"));
        Assert.That(ex.Message, Does.StartWith("Width cannot be zero or negative."));
    }

    [Test]
    public void Rectangle_Area_IsCorrect()
    {
        var result = _rectangle.CalculateArea();
        Assert.That(result, Is.EqualTo(8d));
    }
}