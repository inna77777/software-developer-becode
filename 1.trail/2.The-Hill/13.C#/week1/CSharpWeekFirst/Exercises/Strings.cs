namespace CSharpWeekFirst.Exercises;

public class Strings
{
    // 1. Reverse a String
    public static string ReversedString(string input)
    {
        try
        {
            if (string.IsNullOrEmpty(input))
                throw new ArgumentException("Input string must not be empty");

            var charArray = input.ToCharArray();
            Array.Reverse(charArray);
            return new string(charArray);
        }
        catch (ArgumentException ex)
        {
            throw new ArgumentException(ex.Message);
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while reversing the string: " + ex.Message);
        }
    }

    // 2. Count Vowels
    public static string CountVowels(string input)
    {
        try
        {
            if (string.IsNullOrEmpty(input))
                throw new ArgumentException("Input string must not be empty");

            var vowelCount = 0;
            var vowels = "aeiouAEIOU";

            foreach (var c in input)
                if (vowels.Contains(c))
                    vowelCount++;

            return $"Number of vowels:{vowelCount}";
        }
        catch (ArgumentException ex)
        {
            throw new ArgumentException(ex.Message);
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while counting vowels: " + ex.Message);
        }
    }

    // 3. Palindrome Check
    public static bool IsPalindrome(string input)
    {
        try
        {
            if (string.IsNullOrEmpty(input))
                throw new ArgumentException("Input string must not be empty");

            // Remove spaces and punctuation, convert to lowercase
            var cleanedInput = new string(input.Where(c => char.IsLetterOrDigit(c)).ToArray()).ToLower();
            var reversedInput = new string(cleanedInput.Reverse().ToArray());

            return cleanedInput == reversedInput;
        }
        catch (ArgumentException ex)
        {
            throw new ArgumentException(ex.Message);
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while checking palindrome: " + ex.Message);
        }
    }

    // 4. First Non-Repeating Character
    public static char FirstNonRepeatingCharacter(string input)
    {
        try
        {
            if (string.IsNullOrEmpty(input))
                throw new ArgumentException("Input string must not be empty");

            var charCount = new Dictionary<char, int>();

            // Count the occurrences of each character
            foreach (var c in input.ToLower())
                if (charCount.ContainsKey(c))
                    charCount[c]++;
                else
                    charCount[c] = 1;

            // Find the first non-repeating character
            foreach (var entry in charCount)
                if (entry.Value == 1)
                    return entry.Key;

            throw new Exception("No non-repeating characters found");
        }
        catch (ArgumentException ex)
        {
            throw new ArgumentException(ex.Message);
        }
        catch (Exception ex)
        {
            throw new Exception("An error occurred while finding the first non-repeating character: " + ex.Message);
        }
    }
}