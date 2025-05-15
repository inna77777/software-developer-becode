namespace CSharpWeekSecond.Exercises.Chapter12.StudentManagementSystem;

public class School
{
    public School()
    {
        Students = new List<Student>();
    }

    public List<Student> Students { get; set; }

    public void AddStudent(Student student)
    {
        Students.Add(student);
    }

    public void ListStudents()
    {
        foreach (var student in Students)
            Console.WriteLine(
                $"Name: {student.Name}, Age: {student.Age}, Average Grade: {student.GetAverageGrade():F2}");
    }

    public Student FindStudent(string name)
    {
        var student = Students.FirstOrDefault(s => s.Name.Equals(name, StringComparison.OrdinalIgnoreCase));
        if (student != null)
        {
            Console.WriteLine($"Grades for {student.Name}:");
            student.ListGrades();
            Console.WriteLine($"Average Grade: {student.GetAverageGrade():F2}");
        }
        else
        {
            Console.WriteLine("Student not found.");
        }

        return student;
    }

    public void ListTopStudents(int topN)
    {
        var topStudents = Students
            .OrderByDescending(s => s.GetAverageGrade())
            .Take(topN);

        Console.WriteLine($"Top {topN} Students:");
        foreach (var student in topStudents)
            Console.WriteLine($"Name: {student.Name}, Average Grade: {student.GetAverageGrade():F2}");
    }
}