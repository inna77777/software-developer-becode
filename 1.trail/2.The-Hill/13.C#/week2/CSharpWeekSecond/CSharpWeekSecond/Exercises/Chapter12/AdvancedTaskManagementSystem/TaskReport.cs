namespace CSharpWeekSecond.Exercises.Chapter12.AdvancedTaskManagementSystem;

public class TaskReport
{
    // Generate a report for a specific project
    public void GenerateProjectReport(Project project)
    {
        var completed = project.ListCompletedTasks();
        var overdue = project.GetOverdueTasks();
        var pending = project.Tasks.FindAll(t => !t.IsCompleted && !overdue.Contains(t));

        Console.WriteLine($"Project Report for: {project.Name}");
        Console.WriteLine($"Completed Tasks: {completed.Count}");
        Console.WriteLine($"Overdue Tasks: {overdue.Count}");
        Console.WriteLine($"Pending Tasks: {pending.Count}");
    }

    // Generate a report for a specific user across all projects
    public void GenerateUserReport(string user, TaskManager taskManager)
    {
        var tasks = taskManager.GetTasksByAssignedUser(user);
        var completed = tasks.FindAll(t => t.IsCompleted);
        var overdue = tasks.FindAll(t => t.IsOverdue());
        var pending = tasks.FindAll(t => !t.IsCompleted && !overdue.Contains(t));

        Console.WriteLine($"User Report for: {user}");
        Console.WriteLine($"Completed Tasks: {completed.Count}");
        Console.WriteLine($"Overdue Tasks: {overdue.Count}");
        Console.WriteLine($"Pending Tasks: {pending.Count}");
    }

    // Generate a system-wide report for all projects
    public void GenerateSystemReport(TaskManager taskManager)
    {
        foreach (var project in taskManager.Projects) GenerateProjectReport(project);
    }
}