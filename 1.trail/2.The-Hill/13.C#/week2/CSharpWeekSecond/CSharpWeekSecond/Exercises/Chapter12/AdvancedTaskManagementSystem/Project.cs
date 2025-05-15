namespace CSharpWeekSecond.Exercises.Chapter12.AdvancedTaskManagementSystem;

public class Project
{
    // Constructor
    public Project(string name)
    {
        Name = name;
        Tasks = new List<Task>();
    }

    public string Name { get; set; }
    public List<Task> Tasks { get; set; }

    // Add a task to the project
    public void AddTask(Task task)
    {
        Tasks.Add(task);
    }

    // Get a list of all overdue tasks
    public List<Task> GetOverdueTasks()
    {
        return Tasks.FindAll(t => t.IsOverdue());
    }

    // List tasks by priority
    public List<Task> ListTasksByPriority(PriorityLevel priority)
    {
        return Tasks.FindAll(t => t.Priority == priority);
    }

    // Complete a task by title
    public void CompleteTask(string title)
    {
        var task = Tasks.Find(t => t.Title == title);
        if (task != null) task.CompleteTask();
    }

    // List tasks assigned to a specific user
    public List<Task> ListTasksByUser(string user)
    {
        return Tasks.FindAll(t => t.AssignedTo == user);
    }

    // List completed tasks
    public List<Task> ListCompletedTasks()
    {
        return Tasks.FindAll(t => t.IsCompleted);
    }
}