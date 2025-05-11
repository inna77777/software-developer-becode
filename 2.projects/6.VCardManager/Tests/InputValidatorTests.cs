using _6.VCardManager.Services;

namespace Tests;

public class InputValidatorTests
{
    [Test]
    public void ValidateName_WithValidName_ReturnsTrue()
    {
        var result = InputValidator.ValidateName("Alice");
        Assert.That(result, Is.EqualTo(true));
    }

    [Test]
    public void ValidateName_WithEmptyName_ReturnsFalse()
    {
        var result = InputValidator.ValidateName("");
        Assert.That(result, Is.EqualTo(false));
    }

    [Test]
    public void ValidateEmail_WithValidEmail_ReturnsTrue()
    {
        var result = InputValidator.ValidateEmail("test@example.com");
        Assert.That(result, Is.EqualTo(true));
    }

    [Test]
    public void ValidateEmail_WithInvalidEmail_ReturnsFalse()
    {
        var result = InputValidator.ValidateEmail("bademail@");
        Assert.That(result, Is.EqualTo(false));
    }

    [Test]
    public void ValidatePhone_WithValidPhone_ReturnsTrue()
    {
        var result = InputValidator.ValidatePhone("+1234567890");
        Assert.That(result, Is.EqualTo(true));
    }

    [Test]
    public void ValidatePhone_WithInvalidPhone_ReturnsFalse()
    {
        var result = InputValidator.ValidatePhone("abc123");
        Assert.That(result, Is.EqualTo(false));
    }
}