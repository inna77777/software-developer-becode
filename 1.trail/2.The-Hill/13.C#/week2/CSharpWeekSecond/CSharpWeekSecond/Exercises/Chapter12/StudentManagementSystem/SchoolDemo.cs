namespace CSharpWeekSecond.Exercises.Chapter12.StudentManagementSystem;

public class SchoolDemo
{
    public static void Run()
    {
        var school = new School();
        var report = new SchoolReport();

        // Create students
        var alice = new Student("Alice", 17);
        alice.AddGrade("Math", 90);
        alice.AddGrade("English", 85);
        alice.AddGrade("Science", 88);

        var bob = new Student("Bob", 16);
        bob.AddGrade("Math", 78);
        bob.AddGrade("English", 82);
        bob.AddGrade("Science", 75);

        var clara = new Student("Clara", 18);
        clara.AddGrade("Math", 95);
        clara.AddGrade("English", 90);
        clara.AddGrade("Science", 92);

        // Add students to school
        school.AddStudent(alice);
        school.AddStudent(bob);
        school.AddStudent(clara);

        // List all students
        Console.WriteLine("List of all students:");
        school.ListStudents();

        // Find a specific student
        Console.WriteLine("\nSearching for student 'Alice':");
        school.FindStudent("Alice");

        // List top 2 students
        school.ListTopStudents(2);

        // Generate report card for Clara
        report.GenerateReportCard(clara);

        // Generate overall school report
        report.GenerateOverallReport(school);
    }
}