namespace CSharpWeekFirst.Exercises
{
    public class Loops
    {
        public static int SumOfNumbers()
        {
            int sum = 0;
            for (int i = 1; i <= 100; i++)
            {
                sum += i;
            }
            return sum;
        }

        public static int Factorial(int n)
        {
            if (n < 0)
            {
                throw new ArgumentException("Factorial is not defined for negative numbers.");
            }

            int result = 1;
            while (n > 0)
            {
                result *= n;
                n--;
            }
            return result;
        }

        public static void PrintMultiplicationTable()
        {
            for (int i = 1; i <= 10; i++)
            {
                for (int j = 1; j <= 10; j++)
                {
                    Console.WriteLine($"{i} x {j} = {i * j}");
                }
            }
        }
        
        public static void ValidateUserInput()
        {
            int number;
            do
            {
                Console.Write("Enter a number between 1 and 10: ");
            } while (!int.TryParse(Console.ReadLine(), out number) || number < 1 || number > 10);
            Console.WriteLine($"You entered a valid number: {number}");
        }

        public static void FindSmallestNumber()
        {
            int smallest = int.MaxValue;
            int number;
            do
            {
                Console.Write("Enter a number (0 to stop): ");
                while (!int.TryParse(Console.ReadLine(), out number))
                {
                    Console.Write("Please enter a valid number: ");
                }

                if (number != 0 && number < smallest)
                {
                    smallest = number;
                }
            } while (number != 0);

            Console.WriteLine($"The smallest number entered is: {smallest}");
        }
    }
}
