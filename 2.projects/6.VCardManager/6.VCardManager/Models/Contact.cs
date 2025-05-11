namespace _6.VCardManager.Models;

public class Contact
{
    public string FullName { get; set; } = string.Empty;
    public string Phone { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;

    public override string ToString() =>
        $"Name: {FullName}, Phone: {Phone}, Email: {Email}";

    public string ToVCard() =>
       $"BEGIN:VCARD\nFN:{FullName}\nTEL:{Phone}\nEMAIL:{Email}\nEND:VCARD";
}