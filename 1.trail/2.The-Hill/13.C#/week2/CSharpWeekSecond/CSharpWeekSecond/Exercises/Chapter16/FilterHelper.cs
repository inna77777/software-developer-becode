namespace CSharpWeekSecond.Exercises.Chapter16;

public static class FilterHelper
{
    public static IEnumerable<T> Filter<T>(IEnumerable<T> items, Func<T, bool> condition)
    {
        return items.Where(condition);
    }
}