using System.Diagnostics;

namespace CSharpWeekSecond.Exercises.Chapter14;

public struct DataStruct
{
    public int A;
    public int B;
}

public class DataClass
{
    public int A;
    public int B;
}

public class PerformanceComparison
{
    public static void Run()
    {
        const int size = 10_000_000;

        var structArray = new DataStruct[size];
        var classArray = new DataClass[size];

        var sw = Stopwatch.StartNew();

        for (var i = 0; i < size; i++)
            structArray[i] = new DataStruct { A = i, B = i };

        sw.Stop();
        Console.WriteLine($"Struct array fill time: {sw.ElapsedMilliseconds} ms");

        sw.Restart();

        for (var i = 0; i < size; i++)
            classArray[i] = new DataClass { A = i, B = i };

        sw.Stop();
        Console.WriteLine($"Class array fill time: {sw.ElapsedMilliseconds} ms");
    }
}