using System.Text.RegularExpressions;
using _6.VCardManager.Helpers;
using _6.VCardManager.Models;

namespace _6.VCardManager.Services;

public class VCardService
{
    private readonly string filePath;
    private List<Contact> contacts = new();


    public VCardService(string filePath)
    {
        this.filePath = filePath;
        try
        {
            LoadContacts();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error loading contacts: {ex.Message}");
        }
    }

    private void LoadContacts()
    {
        try
        {
            if (!File.Exists(filePath)) return;
            var blocks = File.ReadAllText(filePath)
                             .Split("BEGIN:VCARD")
                             .Skip(1)
                             .Select(b => "BEGIN:VCARD" + b.Trim());

            foreach (var block in blocks)
            {
                var name = Regex.Match(block, @"FN:(.*)").Groups[1].Value;
                var phone = Regex.Match(block, @"TEL:(.*)").Groups[1].Value;
                var email = Regex.Match(block, @"EMAIL:(.*)").Groups[1].Value;
                contacts.Add(new Contact { FullName = name, Phone = phone, Email = email });
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error loading contacts: {ex.Message}");
        }
    }

    private void SaveContacts()
    {
        try
        {
            File.WriteAllText(filePath, string.Join("\n", contacts.Select(c => c.ToVCard())));
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error saving contacts: {ex.Message}");
        }
    }

    public void RunMenu()
    {
        try
        {
            while (true)
            {
                Console.Clear();
                Console.WriteLine("=== vCard Manager ===");
                Console.WriteLine("1. Display All Contacts");
                Console.WriteLine("2. Add New Contact");
                Console.WriteLine("3. Search Contact by Name");
                Console.WriteLine("4. Delete Contact");
                Console.WriteLine("5. Export Contact to .vcf");
                Console.WriteLine("6. Sort Contacts");
                Console.WriteLine("0. Exit");
                Console.Write("Choose: ");
                string choice = Console.ReadLine();

                switch (choice)
                {
                    case "1": DisplayContacts(); break;
                    case "2": AddContact(); break;
                    case "3": SearchContact(); break;
                    case "4": DeleteContact(); break;
                    case "5": ExportContact(); break;
                    case "6": SortContacts(); break;
                    case "0": return;
                    default: Console.WriteLine("Invalid input!"); break;
                }
                Console.WriteLine("\nPress any key to return to menu...");
                Console.ReadKey();
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error in menu operation: {ex.Message}");
        }
    }

    public void DisplayContacts()
    {
        try
        {
            foreach (var contact in contacts)
                Console.WriteLine(contact);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error displaying contacts: {ex.Message}");
        }
    }

    public void AddContact()
    {
        try
        {
            string name = "";
            while (true)
            {
                Console.Write("Name: ");
                name = Console.ReadLine() ?? "";

                // Capitalize the first letter and make the rest lowercase
                if (!string.IsNullOrWhiteSpace(name))
                {
                    name = char.ToUpper(name[0]) + name.Substring(1).ToLower();
                }

                if (InputValidator.ValidateName(name)) break;
            }

            string phone = "";
            while (true)
            {
                Console.Write("Phone: ");
                phone = Console.ReadLine() ?? "";
                if (InputValidator.ValidatePhone(phone)) break;
            }

            string email = "";
            while (true)
            {
                Console.Write("Email: ");
                email = Console.ReadLine() ?? "";
                if (InputValidator.ValidateEmail(email)) break;
            }

            contacts.Add(new Contact { FullName = name, Phone = phone, Email = email });
            SaveContacts();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error adding contact: {ex.Message}");
        }
    }

    public void SearchContact()
    {
        try
        {
            Console.Write("Enter name to search: ");
            string keyword = Console.ReadLine() ?? "";
            var results = contacts.Where(c => c.FullName.Contains(keyword, StringComparison.OrdinalIgnoreCase));
            foreach (var c in results) Console.WriteLine(c);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error searching for contact: {ex.Message}");
        }
    }

    public void DeleteContact()
    {
        try
        {
            Console.Write("Enter name to delete: ");
            string keyword = Console.ReadLine() ?? "";
            var contact = contacts.FirstOrDefault(c => c.FullName.Equals(keyword, StringComparison.OrdinalIgnoreCase));
            if (contact != null)
            {
                contacts.Remove(contact);
                SaveContacts();
                Console.WriteLine("Deleted.");
            }
            else Console.WriteLine("Contact not found.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error deleting contact: {ex.Message}");
        }
    }

    public void ExportContact()
    {
        try
        {
            Console.Write("Enter name to export: ");
            string name = Console.ReadLine() ?? "";

            var contact = contacts.FirstOrDefault(c => c.FullName.Equals(name, StringComparison.OrdinalIgnoreCase));

            if (contact == null)
            {
                Console.WriteLine("Contact not found.");
                return;
            }

            // Sanitize the name to make a valid filename
            string sanitizedName = string.Concat(name.Split(Path.GetInvalidFileNameChars()));
            string filePath = PathHelper.GetProjectRootPath($"{sanitizedName}.vcf");

            // Generate a unique filename if it already exists
            int count = 1;
            string uniqueFilePath = filePath;

            while (File.Exists(uniqueFilePath))
            {
                uniqueFilePath = Path.Combine(Path.GetDirectoryName(filePath)!, $"{sanitizedName}_{count}.vcf");
                count++;
            }
            File.WriteAllText(uniqueFilePath, contact.ToVCard());

            Console.WriteLine($"Contact exported to: {uniqueFilePath}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error exporting contact: {ex.Message}");
        }
    }

    public void SortContacts()
    {
        try
        {
            contacts = contacts.OrderBy(c => c.FullName).ToList();
            SaveContacts();
            Console.WriteLine("Contacts sorted.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error sorting contacts: {ex.Message}");
        }
    }
}
