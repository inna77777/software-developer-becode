namespace CSharpWeekSecond.Exercises.Chapter12.LibraryManagementSystem;

public class Book
{
    public Book(string title, string author, string genre)
    {
        Title = title;
        Author = author;
        Genre = genre;
        IsBorrowed = false;
    }

    public string Title { get; }
    public string Author { get; }
    public string Genre { get; }
    public bool IsBorrowed { get; private set; }

    public string Borrow()
    {
        if (!IsBorrowed)
        {
            IsBorrowed = true;
            var message = $"'{Title}' has been successfully borrowed.";
            Console.WriteLine(message);
            return message;
        }
        else
        {
            var message = $"'{Title}' is currently unavailable.";
            Console.WriteLine(message);
            return message;
        }
    }

    public string ReturnBook()
    {
        if (IsBorrowed)
        {
            IsBorrowed = false;
            var message = $"'{Title}' has been successfully returned.";
            Console.WriteLine(message);
            return message;
        }
        else
        {
            var message = $"'{Title}' was not borrowed.";
            Console.WriteLine(message);
            return message;
        }
    }
}