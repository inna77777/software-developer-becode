namespace CSharpWeekSecond.Exercises.Chapter12.StudentManagementSystem;

public class Grade
{
    public Grade(string subject, int score)
    {
        Subject = subject;
        Score = score;
    }

    public string Subject { get; set; }
    public int Score { get; set; }
}