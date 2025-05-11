using System.Text.RegularExpressions;

namespace _6.VCardManager.Services;

public static class InputValidator
{
    private static readonly Regex PhoneRegex = new(@"^\+?\d{7,15}$");
    private static readonly Regex EmailRegex = new(@"^[^@\s]+@[^@\s]+\.[^@\s]+$");

    public static bool ValidateName(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            Console.WriteLine("Name can't be empty.");
            return false;
        }
        return true;
    }

    public static bool ValidateEmail(string email)
    {
        if (string.IsNullOrWhiteSpace(email))
        {
            Console.WriteLine("Email can't be empty.");
            return false;
        }

        if (!EmailRegex.IsMatch(email))
        {
            Console.WriteLine("Invalid email format. Example: name@example.com");
            return false;
        }
        return true;
    }

    public static bool ValidatePhone(string phone)
    {
        if (string.IsNullOrWhiteSpace(phone))
        {
            Console.WriteLine("Phone can't be empty.");
            return false;
        }

        if (!PhoneRegex.IsMatch(phone))
        {
            Console.WriteLine("Invalid phone number. Use digits only, optionally starting with + (e.g. +1234567890)");
            return false;
        }
        return true;
    }
}