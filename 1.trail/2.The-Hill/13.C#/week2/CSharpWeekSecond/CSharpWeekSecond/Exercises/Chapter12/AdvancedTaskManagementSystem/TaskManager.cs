namespace CSharpWeekSecond.Exercises.Chapter12.AdvancedTaskManagementSystem;

public class TaskManager
{
    // Constructor
    public TaskManager()
    {
        Projects = new List<Project>();
    }

    public List<Project> Projects { get; set; }

    // Add a new project to the system
    public void AddProject(Project project)
    {
        Projects.Add(project);
    }

    // Get all tasks assigned to a specific user across all projects
    public List<Task> GetTasksByAssignedUser(string user)
    {
        var tasks = new List<Task>();
        foreach (var project in Projects) tasks.AddRange(project.ListTasksByUser(user));
        return tasks;
    }

    // List all overdue tasks across all projects
    public List<Task> ListAllOverdueTasks()
    {
        var overdueTasks = new List<Task>();
        foreach (var project in Projects) overdueTasks.AddRange(project.GetOverdueTasks());
        return overdueTasks;
    }

    // List all tasks across all projects by priority
    public List<Task> ListAllTasksByPriority(PriorityLevel priority)
    {
        var tasksByPriority = new List<Task>();
        foreach (var project in Projects) tasksByPriority.AddRange(project.ListTasksByPriority(priority));
        return tasksByPriority;
    }

    // List tasks by project name
    public List<Task> ListTasksByProject(string projectName)
    {
        var project = Projects.Find(p => p.Name == projectName);
        return project?.Tasks ?? new List<Task>();
    }

    // Generate a report summarizing all projects
    public void GenerateReport()
    {
        foreach (var project in Projects)
        {
            var totalTasks = project.Tasks.Count;
            var completedTasks = project.ListCompletedTasks().Count;
            var overdueTasks = project.GetOverdueTasks().Count;
            Console.WriteLine($"Project: {project.Name}");
            Console.WriteLine(
                $"Total Tasks: {totalTasks}, Completed Tasks: {completedTasks}, Overdue Tasks: {overdueTasks}\n");
        }
    }
}