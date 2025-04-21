import java.util.Random; // Importing the Random class to generate random integers

// Main class definition
public class SafeDivision {
    private Integer[] numbers; // Declaring an array to hold integers

    // Constructor that initializes the array with random numbers
    public SafeDivision(int size){
        this.numbers = generateRandomArray(size); // Generate and assign a random array of given size
    }

    // Method to generate an array filled with random integers from 0 to 10
    public Integer[] generateRandomArray(int size) {
        Integer[] array = new Integer[size]; // Creating an array of the specified size
        Random rand = new Random(); // Creating an instance of Random for number generation
        for (int i = 0; i < size; i++ ){
            array[i] = rand.nextInt(11); // Assign a random number between 0 and 10 (inclusive)
        }
        return array; // Return the generated array
    }

    // Method to print all elements in the array
    public void printArray() {
        System.out.print("Generated array: "); // Print a label
        for (Integer num : numbers) {
            System.out.print(num + " "); // Print each number followed by a space
        }
        System.out.println(); // Move to the next line
    }

    // Method to divide each number by the previous one and handle division by zero
    public void divideEachNumberByPrevious(){
        System.out.println("\nDividing each number by the previous one:"); // Header for output

        for (int i = 0; i < numbers.length; i++) {
            try {
                int numerator = numbers[i]; // Current number is the numerator
                int denominator = (i == 0) ? numbers[i] : numbers[i-1]; // First element divides by itself; others by the previous

                int result = numerator / denominator; // Perform division
                System.out.println(numerator + " / " + denominator + " = " + result); // Display result

            } catch (ArithmeticException e) {
                // Catch and handle division by zero
                System.out.println("Cannot divide " + numbers[i] + " by 0 — Division skipped!");
            }
        }
    }
}
