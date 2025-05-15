using CSharpWeekSecond.Exercises.Chapter12.AdvancedTaskManagementSystem;
using CSharpWeekSecond.Exercises.Chapter12.LibraryManagementSystem;
using CSharpWeekSecond.Exercises.Chapter12.StudentManagementSystem;
using CSharpWeekSecond.Exercises.Chapter13.AbstractClassesPolymorphism;
using CSharpWeekSecond.Exercises.Chapter13.AbstractClassInterface;
using CSharpWeekSecond.Exercises.Chapter13.DependencyInjection;
using CSharpWeekSecond.Exercises.Chapter13.InterfacePolymorphism;
using CSharpWeekSecond.Exercises.Chapter14;
using CSharpWeekSecond.Exercises.Chapter15;
using CSharpWeekSecond.Exercises.Chapter15.EventRegistrationSystem;
using CSharpWeekSecond.Exercises.Chapter15.LibraryBookTracker;
using CSharpWeekSecond.Exercises.Chapter16;


// --- Chapter 12 ---
Console.WriteLine("*** CHAPTER 12 ***");
LibraryDemo.Run();
SchoolDemo.Run();
TaskDemo.Run();


// --- Chapter 13 ---
Console.WriteLine("*** CHAPTER 13 ***");
VehicleDemo.Run();
AnimalDemo.Run();
ShapeDemo.Run();
EngineDemo.Run();


// --- Chapter 14 ---
Console.WriteLine("*** CHAPTER 14 ***");
StructsRecordsRunner.Run();


// ---Chapter 15---
Console.WriteLine("*** CHAPTER 15 ***");
var manager = new InventoryManager();
manager.Run();
LibraryRunner.Run();
EventRunner.Run();


// ---Chapter 16---
Console.WriteLine("*** CHAPTER 16 ***");
GenericsRunner.Run();