import model.HospitalVisit;
import model.Student;
import model.Visitor;
import service.ReportGenerator;
import service.VisitCSVReader;

import java.util.ArrayList;
import java.util.List;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
  public static void main(String[] args) {
    //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
    // to see how IntelliJ IDEA suggests fixing it.
    System.out.printf("Hello and welcome!\n");

    // Exo 1, 2, 3
//    PrimitiveTypes primitiveTypes = new PrimitiveTypes();
//    primitiveTypes.loopAutomaticallyTypes();
//    primitiveTypes.printObjectTypes();

    // Exo 4
//        SafeDivision safeDivision = new SafeDivision(10);
//        safeDivision.printArray();
//        safeDivision.divideEachNumberByPrevious();

    // Exo 5
//        CountWordAppearance wordsCounter = new CountWordAppearance();
//        wordsCounter.countWordsInFile("resources/example.txt");

    // Exo 6
//        CountLetterAppearance counter = new CountLetterAppearance();
//        counter.processFile("resources/example.txt");

    // Exo 7
//    StudentCSVReader studentCSVReader = new StudentCSVReader();
//    List<Student> students = studentCSVReader.readStudentsFromCSV("resources/students.csv");
//    System.out.println("Emails of students:");
//    studentCSVReader.printStudentEmails(students);

    // Exo 8
//    service.VisitCSVReader visitReader = new VisitCSVReader();
//    List<HospitalVisit> visits = visitReader.readVisits("resources/visits.csv");
//    service.ReportGenerator generator = new ReportGenerator();
//    generator.generateDailyReport(visits, "daily_report.txt");
//    generator.generateMonthlyReport(visits, "monthly_report.txt");
//    System.out.println("Reports generated.");

    // Exo 9
//    List<Visitor> visitors = VisitorFactory.createMultiple(50);
//    CsvWriter.writeVisitorsToCsv(visitors, "visitors.csv");

    // Exo 10
    List<Vehicle> vehicles = new ArrayList<>();

    vehicles.add(new Car());
    vehicles.add(new Truck());

    for (Vehicle v : vehicles) {
      System.out.println("This vehicle has " + v.getNumberOfWheels() + " wheels.");
    }
  }

}