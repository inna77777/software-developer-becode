namespace _6.VCardManager.Helpers;

public class PathHelper
{
    public static string GetProjectRootPath(string fileName)
    {
        // Get project root directory
        string? projectRoot = Directory.GetParent(AppContext.BaseDirectory)?
            .Parent?.Parent?.Parent?.FullName;

        if (projectRoot == null)
        {
            throw new InvalidOperationException("Could not determine project root directory.");
        }

        // Ensure files folder exists in the project root
        string folderPath = Path.Combine(projectRoot, "files");
        Directory.CreateDirectory(folderPath); // Ensure the folder exists

        // Build and return the complete file path
        return Path.Combine(folderPath, fileName);
    }
}