using CSharpWeekSecond.Exercises.Chapter14.ImmutableStruct;
using CSharpWeekSecond.Exercises.Chapter14.StructBasics;

namespace CSharpWeekSecond.Exercises.Chapter14;

public class StructsRecordsRunner
{
    public static void Run()
    {
        Console.WriteLine("== Struct Basics ==");
        StructBasicsDemo.Run();

        Console.WriteLine("\n== Immutable Struct ==");
        ImmutableStructDemo.Run();

        Console.WriteLine("\n== Record Basics ==");
        RecordBasicsDemo.Run();

        Console.WriteLine("\n== Combining Structs and Records ==");
        StructRecordCombinationDemo.Run();

        Console.WriteLine("\n== Performance Comparison ==");
        PerformanceComparison.Run();

        Console.WriteLine("\n== Inheritance and Records ==");
        RecordInheritanceDemo.Run();
    }
}