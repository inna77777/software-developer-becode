namespace CSharpWeekSecond.Exercises.Chapter12.LibraryManagementSystem;

public class LibraryDemo
{
    public static void Run()
    {
        var librarySystem
            = new LibrarySystem();

// Add books to the library
        librarySystem
            .Library.AddBook(new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy"));
        librarySystem
            .Library.AddBook(new Book("1984", "George Orwell", "Dystopian"));
        librarySystem
            .Library.AddBook(new Book("Clean Code", "Robert C. Martin", "Programming"));

// Register patrons
        librarySystem
            .AddPatron(new Patron("Alice"));
        librarySystem
            .AddPatron(new Patron("Bob"));

// Borrow books
        librarySystem
            .BorrowBook("Alice", "The Hobbit");
        librarySystem
            .BorrowBook("Bob", "1984");

// Try to borrow an already borrowed book
        librarySystem
            .BorrowBook("Bob", "The Hobbit");

// Return a book
        librarySystem
            .ReturnBook("Alice", "The Hobbit");

// Display borrowed books
        librarySystem
            .ListBorrowedBooks("Alice");
        librarySystem
            .ListBorrowedBooks("Bob");

// List all books
        librarySystem
            .Library.ListBooks();

// List books by genre
        librarySystem
            .Library.ListBooksByGenre("Fantasy");
        librarySystem
            .Library.ListBooksByGenre("Programming");
    }
}