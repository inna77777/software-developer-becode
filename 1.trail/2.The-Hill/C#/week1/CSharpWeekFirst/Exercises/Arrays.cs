namespace CSharpWeekFirst.Exercises;

public static class Arrays
{
    // 1. Initialize and Loop Through an Array
    public static void DisplayArray(int[] array)
    {
        try
        {
            foreach (var item in array) Console.WriteLine(item);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
        }
    }

    // 2. Calculate the Sum and Average
    public static int Sum(int[] numbers)
    {
        try
        {
            if (numbers == null || numbers.Length == 0)
                throw new ArgumentException("Array cannot be null or empty.");
            var sum = 0;
            foreach (var num in numbers) sum += num;
            return sum;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return 0;
        }
    }

    public static double Average(int[] numbers)
    {
        try
        {
            if (numbers == null || numbers.Length == 0)
                throw new ArgumentException("Array cannot be null or empty.");
            double sum = Sum(numbers);
            return sum / numbers.Length;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return 0;
        }
    }

    // 3. Find Max & Min
    public static void MaxAndMin(int[] numbers, out int max, out int min)
    {
        try
        {
            if (numbers == null || numbers.Length == 0)
                throw new ArgumentException("Array cannot be null or empty.");

            max = numbers[0];
            min = numbers[0];

            foreach (var num in numbers)
            {
                if (num > max)
                    max = num;
                if (num < min)
                    min = num;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            max = min = 0;
        }
    }

    // 4. Sort an Array
    public static int[] SortAndArray(int[] numbers)
    {
        try
        {
            if (numbers == null || numbers.Length == 0)
                throw new ArgumentException("Array cannot be null or empty.");
            Array.Sort(numbers);
            return numbers;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return new int[0];
        }
    }

    // 5. Palindrome?
    public static string Palindrome(int[] numbers)
    {
        try
        {
            if (numbers == null || numbers.Length == 0)
                throw new ArgumentException("Array cannot be null or empty.");

            int left = 0, right = numbers.Length - 1;

            while (left < right)
            {
                if (numbers[left] != numbers[right])
                    return "The array is not a palindrome";
                left++;
                right--;
            }

            return "The array is a palindrome";
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred: {ex.Message}");
            return "Error checking palindrome";
        }
    }
}