namespace CSharpWeekSecond.Exercises.Chapter12.LibraryManagementSystem;

public class Patron
{
    public Patron(string name)
    {
        Name = name;
    }

    public string Name { get; }
    public List<Book> BorrowedBooks { get; } = new();

    public void BorrowBook(Book book)
    {
        if (book != null && !BorrowedBooks.Contains(book)) BorrowedBooks.Add(book);
    }

    public void ReturnBook(Book book)
    {
        if (book != null && BorrowedBooks.Contains(book)) BorrowedBooks.Remove(book);
    }
}