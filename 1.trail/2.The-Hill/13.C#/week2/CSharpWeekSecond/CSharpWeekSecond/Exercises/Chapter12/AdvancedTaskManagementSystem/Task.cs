namespace CSharpWeekSecond.Exercises.Chapter12.AdvancedTaskManagementSystem;

public class Task
{
    // Constructor
    public Task(string title, string description, string assignedTo, DateTime dueDate, PriorityLevel priority)
    {
        Title = title;
        Description = description;
        AssignedTo = assignedTo;
        DueDate = dueDate;
        Priority = priority;
        IsCompleted = false;
    }

    public string Title { get; set; }
    public string Description { get; set; }
    public string AssignedTo { get; set; }
    public DateTime DueDate { get; set; }
    public PriorityLevel Priority { get; set; }
    public bool IsCompleted { get; set; }

    // Mark the task as completed
    public void CompleteTask()
    {
        IsCompleted = true;
    }

    // Check if the task is overdue
    public bool IsOverdue()
    {
        return !IsCompleted && DateTime.Now > DueDate;
    }
}