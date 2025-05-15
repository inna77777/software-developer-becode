namespace CSharpWeekSecond.Exercises.Chapter12.AdvancedTaskManagementSystem;

public class TaskDemo
{
    public static void Run()
    {
        var taskManager = new TaskManager();

        // Create projects
        var project1 = new Project("Project 1");
        var project2 = new Project("Project 2");

        // Create tasks
        var task1 = new Task("Task 1", "Description 1", "Alice", DateTime.Now.AddDays(-1), PriorityLevel.Critical);
        var task2 = new Task("Task 2", "Description 2", "Bob", DateTime.Now.AddDays(2), PriorityLevel.Medium);
        var task3 = new Task("Task 3", "Description 3", "Alice", DateTime.Now.AddDays(5), PriorityLevel.Low);

        // Add tasks to projects
        project1.AddTask(task1);
        project1.AddTask(task2);
        project2.AddTask(task3);

        // Add projects to TaskManager
        taskManager.AddProject(project1);
        taskManager.AddProject(project2);

        // Create TaskReport
        var taskReport = new TaskReport();

        // Display all overdue tasks
        var overdueTasks = taskManager.ListAllOverdueTasks();
        Console.WriteLine("Overdue Tasks:");
        foreach (var task in overdueTasks) Console.WriteLine($"- {task.Title}");

        // List tasks by priority
        var highPriorityTasks = taskManager.ListAllTasksByPriority(PriorityLevel.Critical);
        Console.WriteLine("\nHigh Priority Tasks:");
        foreach (var task in highPriorityTasks) Console.WriteLine($"- {task.Title}");

        // List tasks by user
        var userTasks = taskManager.GetTasksByAssignedUser("Alice");
        Console.WriteLine("\nTasks assigned to Alice:");
        foreach (var task in userTasks) Console.WriteLine($"- {task.Title}");

        // Generate reports
        taskManager.GenerateReport();
        taskReport.GenerateUserReport("Alice", taskManager);
        taskReport.GenerateSystemReport(taskManager);
    }
}