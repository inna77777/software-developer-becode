namespace CSharpWeekSecond.Exercises.Chapter15.EventRegistrationSystem;

public class EventRunner
{
    public static void Run()
    {
        var system = new EventRegistrationSystem();

        system.RegisterAttendee("Tech Conference", "Alice");
        system.RegisterAttendee("Tech Conference", "Bob");
        system.RegisterAttendee("Music Festival", "Alice");
        system.RegisterAttendee("Tech Conference", "Alice"); // Alice registers twice

        system.ListEventAttendees("Tech Conference");
        system.ListEventAttendees("Music Festival");

        system.RemoveRegistration("Tech Conference", "Bob");
        system.RemoveRegistration("Tech Conference", "Charlie"); // Not registered

        system.ShowAllRegistrations();
    }
}