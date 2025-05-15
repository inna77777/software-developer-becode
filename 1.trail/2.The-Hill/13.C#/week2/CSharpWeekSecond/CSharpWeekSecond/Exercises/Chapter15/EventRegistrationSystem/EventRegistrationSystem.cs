namespace CSharpWeekSecond.Exercises.Chapter15.EventRegistrationSystem;

public class EventRegistrationSystem
{
    private readonly List<(string eventName, string attendeeName)> registrations;

    public EventRegistrationSystem()
    {
        registrations = new List<(string, string)>();
    }

    public void RegisterAttendee(string eventName, string attendeeName)
    {
        registrations.Add((eventName, attendeeName));
        Console.WriteLine($"{attendeeName} has been registered for {eventName}.");
    }

    public void RemoveRegistration(string eventName, string attendeeName)
    {
        var removed = registrations.Remove((eventName, attendeeName));
        if (removed)
            Console.WriteLine($"{attendeeName}'s registration for {eventName} has been removed.");
        else
            Console.WriteLine($"{attendeeName} is not registered for {eventName}.");
    }

    public void ListEventAttendees(string eventName)
    {
        var attendees = registrations
            .Where(r => r.eventName.Equals(eventName, StringComparison.OrdinalIgnoreCase))
            .Select(r => r.attendeeName)
            .ToList();

        Console.WriteLine($"\nAttendees for {eventName}:");
        if (attendees.Count == 0)
            Console.WriteLine("No attendees registered.");
        else
            foreach (var attendee in attendees)
                Console.WriteLine($"- {attendee}");
    }

    public void ShowAllRegistrations()
    {
        Console.WriteLine("\nAll Event Registrations:");
        if (registrations.Count == 0)
            Console.WriteLine("No registrations yet.");
        else
            foreach (var reg in registrations)
                Console.WriteLine($"{reg.attendeeName} -> {reg.eventName}");
    }
}