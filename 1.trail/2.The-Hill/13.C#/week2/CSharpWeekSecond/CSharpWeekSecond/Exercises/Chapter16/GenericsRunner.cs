namespace CSharpWeekSecond.Exercises.Chapter16;

public class GenericsRunner
{
    public static void Run()
    {
        RunBoxExample();
        RunSwapExample();
        RunMyListExample();
        RunGreeterExample();
        RunFilterExample();
    }

    private static void RunBoxExample()
    {
        var intBox = new Box<int>(42);
        intBox.DisplayValue(); // Output: 42
    }

    private static void RunSwapExample()
    {
        int a = 10, b = 20;
        Utils.Swap(ref a, ref b);
        Console.WriteLine($"a = {a}, b = {b}"); // a = 20, b = 10
    }

    private static void RunMyListExample()
    {
        var list = new MyList<string>();
        list.Add("Hello");
        Console.WriteLine(list.Get(0)); // Output: Hello
    }

    private static void RunGreeterExample()
    {
        var person = new Person("Alice");
        var greeter = new Greeter<Person>();
        greeter.Greet(person); // Output: Hello, Alice!
    }

    private static void RunFilterExample()
    {
        var names = new List<string> { "Jean", "Paul", "Jacques", "Luc" };
        var filtered = FilterHelper.Filter(names, name => name.StartsWith("J"));
        foreach (var name in filtered) Console.WriteLine(name); // Jean, Jacques
    }
}