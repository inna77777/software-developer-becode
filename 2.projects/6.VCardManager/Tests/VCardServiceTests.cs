using _6.VCardManager.Services;

namespace Tests;

[Parallelizable(ParallelScope.Self)]
[TestFixture]
public class VCardServiceTests
{
    private string tempFilePath;
    private string exportDirectory;

    [SetUp]
    public void Setup()
    {
        tempFilePath = Path.GetTempFileName();
        exportDirectory = Path.Combine(Path.GetTempPath(), "ExportTests");
        Directory.CreateDirectory(exportDirectory);
    }

    [TearDown]
    public void TearDown()
    {
        if (File.Exists(tempFilePath))
            File.Delete(tempFilePath);

        if (Directory.Exists(exportDirectory))
            Directory.Delete(exportDirectory, true);
    }

    [Test]
    public void AddContact_ShouldAddContact_WhenInputIsValid()
    {
        var service = new VCardService(tempFilePath);

        var input = new StringReader("John\n+1234567890\njohn@example.com\n");
        Console.SetIn(input);

        var output = new StringWriter();
        Console.SetOut(output);

        service.AddContact();

        string fileContent = File.ReadAllText(tempFilePath);
        Assert.That(fileContent.Contains("FN:John"));
        Assert.That(fileContent.Contains("TEL:+1234567890"));
        Assert.That(fileContent.Contains("EMAIL:john@example.com"));
    }

    [Test]
    public void DeleteContact_ShouldDeleteExistingContact()
    {
        File.WriteAllText(tempFilePath, "BEGIN:VCARD\nFN:Alice\nTEL:+1111111\nEMAIL:alice@mail.com\nEND:VCARD\n");

        var service = new VCardService(tempFilePath);

        var input = new StringReader("Alice\n");
        Console.SetIn(input);

        var output = new StringWriter();
        Console.SetOut(output);

        service.DeleteContact();

        string updatedContent = File.ReadAllText(tempFilePath);
        Assert.That(updatedContent, Is.Empty.Or.Not.Contains("FN:Alice"));
    }

    [Test]
    public void SearchContact_ShouldDisplayContact_IfFound()
    {
        File.WriteAllText(tempFilePath, "BEGIN:VCARD\nFN:Bob\nTEL:+2222222\nEMAIL:bob@mail.com\nEND:VCARD\n");

        var service = new VCardService(tempFilePath);

        var input = new StringReader("Bob\n");
        Console.SetIn(input);

        var output = new StringWriter();
        Console.SetOut(output);

        service.SearchContact();

        var result = output.ToString();
        Assert.That(result.Contains("Bob"));
    }

    [Test]
    public void SortContacts_ShouldSortAndSave()
    {
        File.WriteAllText(tempFilePath,
            "BEGIN:VCARD\nFN:Zack\nTEL:+3\nEMAIL:z@mail.com\nEND:VCARD\n" +
            "BEGIN:VCARD\nFN:Adam\nTEL:+1\nEMAIL:a@mail.com\nEND:VCARD\n");

        var service = new VCardService(tempFilePath);

        var output = new StringWriter();
        Console.SetOut(output);

        service.SortContacts();

        var content = File.ReadAllText(tempFilePath);
        var zIndex = content.IndexOf("FN:Zack");
        var aIndex = content.IndexOf("FN:Adam");

        Assert.That(aIndex < zIndex);
    }

    [Test]
    public void ExportContact_ShouldCreateVcfFile_WhenContactExists()
    {
        File.WriteAllText(tempFilePath, "BEGIN:VCARD\nFN:Emily\nTEL:+999\nEMAIL:emily@mail.com\nEND:VCARD\n");
        var service = new VCardService(tempFilePath);

        var input = new StringReader("Emily\n");
        Console.SetIn(input);

        var output = new StringWriter();
        Console.SetOut(output);

        // Act
        service.ExportContact();

        // Extract the exported path from the console output
        var consoleOutput = output.ToString();
        var exportedPath = consoleOutput.Split("Contact exported to:").LastOrDefault()?.Trim();

        // Assert the file exists and has correct content
        Assert.That(File.Exists(exportedPath), Is.True, "Exported .vcf file was not created");
        var fileContent = File.ReadAllText(exportedPath);
        Assert.That(fileContent.Contains("FN:Emily"));
    
        // Cleanup
        if (File.Exists(exportedPath))
            File.Delete(exportedPath);
    }


    [Test]
    public void ExportContact_ShouldShowNotFoundMessage_WhenContactMissing()
    {
        File.WriteAllText(tempFilePath, "BEGIN:VCARD\nFN:Mark\nTEL:+123\nEMAIL:mark@mail.com\nEND:VCARD\n");

        var service = new VCardService(tempFilePath);

        var input = new StringReader("Nonexistent\n");
        Console.SetIn(input);

        var output = new StringWriter();
        Console.SetOut(output);

        service.ExportContact();

        var result = output.ToString();
        Assert.That(result.Contains("Contact not found"));
    }
}
