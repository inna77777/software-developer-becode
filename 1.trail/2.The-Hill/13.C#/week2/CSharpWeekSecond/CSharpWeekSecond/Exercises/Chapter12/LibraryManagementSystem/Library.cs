namespace CSharpWeekSecond.Exercises.Chapter12.LibraryManagementSystem;

public class Library
{
    public List<Book> Books { get; } = new();

    public void AddBook(Book book)
    {
        Books.Add(book);
        Console.WriteLine($"Book '{book.Title}' added to the library.");
    }

    public void ListBooks()
    {
        Console.WriteLine("\nLibrary Catalog:");
        foreach (var book in Books)
        {
            var status = book.IsBorrowed ? "Borrowed" : "Available";
            Console.WriteLine($"- {book.Title} by {book.Author} ({book.Genre}) - {status}");
        }
    }

    public void ListBooksByGenre(string genre)
    {
        Console.WriteLine($"\nBooks in genre: {genre}");
        var filtered = Books.Where(b => b.Genre.Equals(genre, StringComparison.OrdinalIgnoreCase)).ToList();
        if (!filtered.Any())
        {
            Console.WriteLine("No books found in this genre.");
            return;
        }

        foreach (var book in filtered)
        {
            var status = book.IsBorrowed ? "Borrowed" : "Available";
            Console.WriteLine($"- {book.Title} by {book.Author} - {status}");
        }
    }

    public Book BorrowBook(string title)
    {
        var book = Books.FirstOrDefault(b => b.Title.Equals(title, StringComparison.OrdinalIgnoreCase));
        if (book != null)
        {
            book.Borrow();
            return book.IsBorrowed ? book : null;
        }

        Console.WriteLine($"Book '{title}' not found in library.");
        return null;
    }

    public Book ReturnBook(string title)
    {
        var book = Books.FirstOrDefault(b => b.Title.Equals(title, StringComparison.OrdinalIgnoreCase));
        if (book != null)
        {
            book.ReturnBook();
            return book;
        }

        Console.WriteLine($"Book '{title}' not found in library.");
        return null;
    }
}