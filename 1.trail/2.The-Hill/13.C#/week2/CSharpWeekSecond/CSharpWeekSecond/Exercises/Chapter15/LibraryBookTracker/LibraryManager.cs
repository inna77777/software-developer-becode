namespace CSharpWeekSecond.Exercises.Chapter15.LibraryBookTracker;

public class LibraryManager
{
    private readonly HashSet<string> availableBooks;
    private readonly HashSet<string> borrowedBooks;

    public LibraryManager()
    {
        availableBooks = new HashSet<string>();
        borrowedBooks = new HashSet<string>();
    }

    public void AddBook(string book)
    {
        if (availableBooks.Contains(book) || borrowedBooks.Contains(book))
        {
            Console.WriteLine($"'{book}' already exists in the library.");
        }
        else
        {
            availableBooks.Add(book);
            Console.WriteLine($"'{book}' added to the library.");
        }
    }

    public void BorrowBook(string book)
    {
        if (availableBooks.Contains(book))
        {
            availableBooks.Remove(book);
            borrowedBooks.Add(book);
            Console.WriteLine($"'{book}' has been borrowed.");
        }
        else if (borrowedBooks.Contains(book))
        {
            Console.WriteLine($"'{book}' is already borrowed.");
        }
        else
        {
            Console.WriteLine($"'{book}' is not in the library.");
        }
    }

    public void ReturnBook(string book)
    {
        if (borrowedBooks.Contains(book))
        {
            borrowedBooks.Remove(book);
            availableBooks.Add(book);
            Console.WriteLine($"'{book}' has been returned.");
        }
        else if (availableBooks.Contains(book))
        {
            Console.WriteLine($"'{book}' was not borrowed.");
        }
        else
        {
            Console.WriteLine($"'{book}' does not belong to this library.");
        }
    }

    public void SearchBook(string book)
    {
        if (availableBooks.Contains(book))
            Console.WriteLine($"'{book}' is available in the library.");
        else if (borrowedBooks.Contains(book))
            Console.WriteLine($"'{book}' is currently borrowed.");
        else
            Console.WriteLine($"'{book}' is not in the library.");
    }

    public void ShowAllBooks()
    {
        Console.WriteLine("\nAvailable Books:");
        if (availableBooks.Count == 0)
            Console.WriteLine("None");
        else
            foreach (var book in availableBooks)
                Console.WriteLine($"- {book}");

        Console.WriteLine("\nBorrowed Books:");
        if (borrowedBooks.Count == 0)
            Console.WriteLine("None");
        else
            foreach (var book in borrowedBooks)
                Console.WriteLine($"- {book}");
    }
}