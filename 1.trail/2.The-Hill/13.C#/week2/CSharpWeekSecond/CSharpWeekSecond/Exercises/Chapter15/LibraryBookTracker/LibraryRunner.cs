namespace CSharpWeekSecond.Exercises.Chapter15.LibraryBookTracker;

public class LibraryRunner
{
    public static void Run()
    {
        var library = new LibraryManager();

// Adding books
        library.AddBook("The Hobbit");
        library.AddBook("1984");
        library.AddBook("To Kill a Mockingbird");
        library.AddBook("Brave New World");
        library.AddBook("The Great Gatsby");
        library.AddBook("The Hobbit"); // Duplicate
        library.AddBook("Moby Dick");
        library.AddBook("War and Peace");

// Borrowing books
        library.BorrowBook("The Hobbit");
        library.BorrowBook("1984");
        library.BorrowBook("The Great Gatsby");

// Borrowing again to test logic
        library.BorrowBook("The Hobbit"); // Already borrowed
        library.BorrowBook("The Catcher in the Rye"); // Not in library

// Searching books
        library.SearchBook("The Hobbit"); // Borrowed
        library.SearchBook("Moby Dick"); // Available
        library.SearchBook("Dracula"); // Not in library

// Returning books
        library.ReturnBook("The Hobbit");
        library.ReturnBook("Brave New World"); // Not borrowed

// Show all books
        library.ShowAllBooks();
    }
}