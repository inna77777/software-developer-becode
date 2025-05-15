namespace CSharpWeekSecond.Exercises.Chapter11;

public class Book
{
    public string Title { get; init; }
    public string Author { get; set; }
    public int Pages { get; set; }

    public string Display()
    {
        return $"Author : {Author} - Title : {Title} - Page : {Pages}";
    }
}