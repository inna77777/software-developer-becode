namespace CSharpWeekSecond.Exercises.Chapter16;

public class MyList<T>
{
    private readonly List<T> items = new();

    public void Add(T item)
    {
        items.Add(item);
    }

    public T Get(int index)
    {
        if (index < 0 || index >= items.Count)
            throw new IndexOutOfRangeException("Index is out of range.");
        return items[index];
    }
}