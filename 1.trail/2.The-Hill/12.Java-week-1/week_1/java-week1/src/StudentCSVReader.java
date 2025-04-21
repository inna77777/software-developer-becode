// Importing the Student class from the model package

import model.Student;

// Importing necessary classes for file reading and list handling
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

// Class responsible for reading a CSV file and processing Student objects
public class StudentCSVReader {

  // Method to read students from a CSV file and return a list of Student objects
  public List<Student> readStudentsFromCSV(String fileName) {
    // Create an empty list to store Student objects
    List<Student> students = new ArrayList<>();

    // Try-with-resources to ensure the file is closed after reading
    try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
      String line; // Variable to hold each line from the file
      boolean isFirstLine = true; // Used to skip the header line in the CSV

      // Loop through each line in the file
      while ((line = br.readLine()) != null) {
        // Skip the first line if it's the header
        if (isFirstLine) {
          isFirstLine = false;
          continue;
        }

        // Split the line by commas to extract values
        String[] values = line.split(",");

        // Check if the line has exactly 5 values
        if (values.length == 5) {
          // Parse each value into the appropriate type
          int id = Integer.parseInt(values[0]);
          String firstName = values[1];
          String lastName = values[2];
          String email = values[3];
          int age = Integer.parseInt(values[4]);

          // Create a new Student object with the parsed data
          Student student = new Student(id, firstName, lastName, email, age);

          // Add the Student object to the list
          students.add(student);
        }
      }

    } catch (IOException e) {
      // If an error occurs while reading the file, print the error message
      System.err.println("Error reading CSV: " + e.getMessage());
    }

    // Return the list of students
    return students;
  }

  // Method to print only the emails of the students
  public void printStudentEmails(List<Student> students) {
    for (Student student : students) {
      System.out.println(student.getEmail());
    }
  }
}
