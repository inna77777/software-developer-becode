using System;

namespace CSharpWeekFirst.Exercises
{
    public class Conditions
    {
        // Exercise 1: Can you go to the Casino?
        public static string CanEnterInTheCasino()
        {
            Console.WriteLine("Hello, what is your age?");
            string input = Console.ReadLine();
            int age = GetValidatedAge(input);

            if (age >= 18)
            {
                return "You can enter! Be welcome!";
            }
            else
            {
                return "Sorry, you can't enter! Be patient!";
            }
        }

        public static int GetValidatedAge(string input)
        {
            try
            {
                int age = int.Parse(input);
                return age;
            }
            catch (FormatException)
            {
                throw new FormatException("Invalid age format. Please enter a number.");
            }
        }

        // Exercise 2: Checking the sign of a number
        public static string SignOfNumber(int number)
        {
            if (number > 0)
            {
                return "The number is positive.";
            }
            else if (number < 0)
            {
                return "The number is negative.";
            }
            else
            {
                return "The number is zero.";
            }
        }

        // Exercise 3: Discount price calculator
        public static double DiscountPriceCalculator(int choice, double price)
        {
            switch (choice)
            {
                case 1: // 10% for students
                    return price * 0.9;
                case 2: // 5% for members
                    return price * 0.95;
                case 3: // 20% for sale products
                    return price * 0.8;
                default:
                    throw new ArgumentException("Invalid choice. Please enter a number between 1 and 3.");
            }
        }

        // Exercise 4: Triangle classification
        public static string TriangleClassification(int side1, int side2, int side3)
        {
            if (side1 == side2 && side2 == side3)
            {
                return "The triangle is equilateral.";
            }
            else if (side1 == side2 || side1 == side3 || side2 == side3)
            {
                return "The triangle is isosceles.";
            }
            else
            {
                return "The triangle is scalene.";
            }
        }
    }
}
