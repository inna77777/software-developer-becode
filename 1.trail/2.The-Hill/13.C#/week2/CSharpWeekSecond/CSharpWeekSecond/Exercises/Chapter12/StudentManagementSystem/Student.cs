namespace CSharpWeekSecond.Exercises.Chapter12.StudentManagementSystem;

public class Student
{
    public Student(string name, int age)
    {
        Name = name;
        Age = age;
        Grades = new List<Grade>();
    }

    public string Name { get; set; }
    public int Age { get; set; }
    public List<Grade> Grades { get; set; }

    public void AddGrade(string subject, int score)
    {
        var grade = Grades.FirstOrDefault(g => g.Subject == subject);
        if (grade != null)
            grade.Score = score;
        else
            Grades.Add(new Grade(subject, score));
    }

    public double GetAverageGrade()
    {
        if (Grades.Count == 0) return 0;
        return Grades.Average(g => g.Score);
    }

    public void ListGrades()
    {
        foreach (var grade in Grades) Console.WriteLine($"Subject: {grade.Subject}, Score: {grade.Score}");
    }
}