# 📇 vCard Manager Project

- **Type of Challenge**: C# Console Application (File Handling & Text Manipulation)
- **Duration**: 3 to 4 days
- **Team challenge**: Solo

## 🎯 The Mission
You will complete a lightweight console application to manage contacts stored in a `.vcf file`.

## 📚 What You'll Learn
- Reading and writing text files with `System.IO`
- Using List<string> for `dynamic storage`
- Organizing code into `reusable methods`
- Building an interactive console menu
- Managing `backups` of important files
- Extracting and manipulating structured text blocks

- (Bonus) Writing simple unit tests with `NUnit` or `xUnit`
- (Bonus) Using `Spectre.Console` to make beautiful `CLI apps`

## 🛠️ Your Tasks
### Main Features
- Create a console menu with options:
  - Display all contacts
  - Add a new contact
  - Search for a contact by name
  - Delete a contact
  - Export a contact into a separate `.vcf` file

- Implement each feature in a clean, reusable method.
- Ensure contacts are read and written properly into a single `contacts.vcf` file.

### Bonus Challenges ✨
- Improve your console app appearance using `Spectre.Console` (colors, prompts, tables).

- Write unit tests (NUnit or xUnit) to verify:
  - Adding a contact works
  - Searching for a contact succeeds
  - Deleting a contact removes it properly

- Add an option to sort contacts alphabetically.
- Validate user input (non-empty name, basic email validation).

## 📦 Deliverables
At the end of the project, submit:
- The complete source code of your application
- The final contacts.vcf file (and its backups, if implemented)
- (Bonus) Your unit test files

## ⚡ Advice
- Start simple. Make it work first, make it beautiful later.
- Comment your code to make it easy to understand.
- Don't hesitate to search the official documentation if you're stuck!

## 📄 Contact Format (vCard)

```text
BEGIN:VCARD
FN:FirstName LastName
TEL:+33 PhoneNumber
EMAIL:email@example.com
END:VCARD
``` 

Example
```text
BEGIN:VCARD
FN:John Doe
TEL:+33123456789
EMAIL:john.doe@email.com
END:VCARD
```

## 📎 Resources

- [C# Official Documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [Working with files in C#](https://learn.microsoft.com/en-us/dotnet/api/system.io.file)
- [Introduction to List<T>](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)
- [NUnit Testing Framework](https://nunit.org/)
- [vCard Format Overview (Wikipedia)](https://en.wikipedia.org/wiki/VCard)
- [Spectre.Console (Make beautiful console apps)](https://spectreconsole.net)


![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGVvYWkzb2lzazg1c2c2dzYwYmdicmJyeXp5cDY2MGR6eTN0eWxpYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ZtrubhtSgQsWghO/giphy.gif)
