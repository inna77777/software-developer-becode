import model.Visitor;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class VisitorFactory {

  private static final List<String> FIRSTNAMES = Arrays.asList(
      "Alice", "Bob", "Charlie", "Daisy", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack",
      "Kathy", "Liam", "Mona", "Nathan", "Olivia", "Paul", "Quincy", "Rachel", "Steve", "Tina",
      "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane", "Chloe", "Leo", "Nina", "Oscar"
  );

  private static final List<String> LASTNAMES = Arrays.asList(
      "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Hernandez",
      "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee",
      "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
      "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green"
  );

  private static final List<String> REASONS = Arrays.asList("Appointment", "Visit");

  private static final List<String> DEPARTMENTS = Arrays.asList(
      "Cardiology", "Radiology", "Pediatrics", "Geriatrics", "Pulmonology"
  );

  public static Visitor createRandomVisitor() {
    String firstname = RandomPicker.pickRandom(FIRSTNAMES);
    String lastname = RandomPicker.pickRandom(LASTNAMES);
    String reason = RandomPicker.pickRandom(REASONS);
    String department = reason.equals("Appointment") ? RandomPicker.pickRandom(DEPARTMENTS) : null;

    LocalDate randomDate = LocalDate.of(LocalDate.now().getYear(), 4, 1)
        .plusDays((int) (Math.random() * 30));
    String date = randomDate.format(DateTimeFormatter.ISO_DATE);

    return new Visitor(firstname, lastname, reason, department, date);
  }

  public static List<Visitor> createMultiple(int count) {
    List<Visitor> visitors = new ArrayList<>();
    for (int i = 0; i < count; i++) {
      visitors.add(createRandomVisitor());
    }
    return visitors;
  }
}
