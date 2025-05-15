namespace CSharpWeekSecond.Exercises.Chapter15;

public class InventoryManager
{
    private readonly SortedDictionary<string, int> inventory = new();

    public void Run()
    {
        var running = true;

        while (running)
        {
            Console.WriteLine("\nInventory Management System");
            Console.WriteLine("1. Add or Update Item");
            Console.WriteLine("2. Remove Item");
            Console.WriteLine("3. Check Low Stock");
            Console.WriteLine("4. Show All Items");
            Console.WriteLine("5. Exit");
            Console.Write("Select an option: ");

            var input = Console.ReadLine();

            switch (input)
            {
                case "1":
                    AddOrUpdateItem();
                    break;
                case "2":
                    RemoveItem();
                    break;
                case "3":
                    CheckLowStock();
                    break;
                case "4":
                    ShowAllItems();
                    break;
                case "5":
                    running = false;
                    break;
                default:
                    Console.WriteLine("Invalid option. Please try again.");
                    break;
            }
        }
    }

    private void AddOrUpdateItem()
    {
        Console.Write("Enter item name: ");
        var itemName = Console.ReadLine()?.Trim();
        if (string.IsNullOrWhiteSpace(itemName))
        {
            Console.WriteLine("Item name cannot be empty.");
            return;
        }

        Console.Write("Enter quantity to add/update: ");
        if (int.TryParse(Console.ReadLine(), out var quantity) && quantity >= 0)
        {
            if (inventory.ContainsKey(itemName))
            {
                inventory[itemName] += quantity;
                Console.WriteLine($"Updated '{itemName}' to {inventory[itemName]} units.");
            }
            else
            {
                inventory[itemName] = quantity;
                Console.WriteLine($"Added '{itemName}' with {quantity} units.");
            }
        }
        else
        {
            Console.WriteLine("Invalid quantity.");
        }
    }

    private void RemoveItem()
    {
        Console.Write("Enter item name to remove: ");
        var itemName = Console.ReadLine()?.Trim();

        if (inventory.Remove(itemName))
            Console.WriteLine($"'{itemName}' removed from inventory.");
        else
            Console.WriteLine($"Item '{itemName}' not found.");
    }

    private void CheckLowStock()
    {
        Console.Write("Enter low stock threshold: ");
        if (int.TryParse(Console.ReadLine(), out var threshold))
        {
            Console.WriteLine($"\nItems below {threshold} units:");
            var found = false;

            foreach (var item in inventory)
                if (item.Value < threshold)
                {
                    Console.WriteLine($"{item.Key}: {item.Value}");
                    found = true;
                }

            if (!found) Console.WriteLine("No items below threshold.");
        }
        else
        {
            Console.WriteLine("Invalid threshold.");
        }
    }

    private void ShowAllItems()
    {
        if (inventory.Count == 0)
        {
            Console.WriteLine("Inventory is empty.");
            return;
        }

        Console.WriteLine("\nCurrent Inventory:");
        foreach (var item in inventory) Console.WriteLine($"{item.Key}: {item.Value}");
    }
}