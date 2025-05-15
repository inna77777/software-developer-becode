namespace CSharpWeekSecond.Exercises.Chapter12.LibraryManagementSystem;

public class LibrarySystem
{
    public Library Library { get; } = new();
    public List<Patron> Patrons { get; } = new();

    public void AddPatron(Patron patron)
    {
        Patrons.Add(patron);
        Console.WriteLine($"Patron '{patron.Name}' registered.");
    }

    public void BorrowBook(string patronName, string title)
    {
        var patron = Patrons.FirstOrDefault(p => p.Name.Equals(patronName, StringComparison.OrdinalIgnoreCase));
        if (patron != null)
        {
            var book = Library.BorrowBook(title);
            if (book != null)
                patron.BorrowBook(book);
        }
        else
        {
            Console.WriteLine($"Patron '{patronName}' not found.");
        }
    }

    public void ReturnBook(string patronName, string title)
    {
        var patron = Patrons.FirstOrDefault(p => p.Name.Equals(patronName, StringComparison.OrdinalIgnoreCase));
        if (patron != null)
        {
            var book = Library.Books.FirstOrDefault(b => b.Title.Equals(title, StringComparison.OrdinalIgnoreCase));
            if (book != null && patron.BorrowedBooks.Contains(book))
            {
                Library.ReturnBook(title);
                patron.ReturnBook(book);
            }
            else
            {
                Console.WriteLine($"'{title}' is not borrowed by '{patronName}'.");
            }
        }
        else
        {
            Console.WriteLine($"Patron '{patronName}' not found.");
        }
    }

    public void ListBorrowedBooks(string patronName)
    {
        var patron = Patrons.FirstOrDefault(p => p.Name.Equals(patronName, StringComparison.OrdinalIgnoreCase));
        if (patron != null)
        {
            Console.WriteLine($"\nBooks borrowed by {patronName}:");
            if (patron.BorrowedBooks.Count == 0)
                Console.WriteLine("No books currently borrowed.");
            else
                foreach (var book in patron.BorrowedBooks)
                    Console.WriteLine($"- {book.Title} by {book.Author}");
        }
        else
        {
            Console.WriteLine($"Patron '{patronName}' not found.");
        }
    }
}