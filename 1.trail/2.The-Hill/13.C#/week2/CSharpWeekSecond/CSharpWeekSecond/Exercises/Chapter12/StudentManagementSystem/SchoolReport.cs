namespace CSharpWeekSecond.Exercises.Chapter12.StudentManagementSystem;

public class SchoolReport
{
    public void GenerateReportCard(Student student)
    {
        Console.WriteLine($"\nReport Card for {student.Name}:");
        student.ListGrades();
        Console.WriteLine($"Average Grade: {student.GetAverageGrade():F2}");
    }

    public void GenerateOverallReport(School school)
    {
        Console.WriteLine("\nOverall School Report:");
        foreach (var student in school.Students)
            Console.WriteLine(
                $"Name: {student.Name}, Age: {student.Age}, Average Grade: {student.GetAverageGrade():F2}");
    }
}