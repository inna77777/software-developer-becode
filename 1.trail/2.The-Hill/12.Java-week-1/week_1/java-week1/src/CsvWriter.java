import model.Visitor;

import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

public class CsvWriter {
  public static void writeVisitorsToCsv(List<Visitor> visitors, String filename) {
    try (FileWriter writer = new FileWriter(filename)) {
      writer.write("Firstname,Lastname,Reason,Department,Date\n");
      for (Visitor v : visitors) {
        writer.write(v.toCsvRow() + "\n");
      }
      System.out.println("CSV file created: " + filename);
    } catch (IOException e) {
      System.err.println("Failed to write CSV: " + e.getMessage());
    }
  }
}

