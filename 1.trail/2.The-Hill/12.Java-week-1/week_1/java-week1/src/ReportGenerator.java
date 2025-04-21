package service;

import model.HospitalVisit;

import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class ReportGenerator {

  public void generateDailyReport(List<HospitalVisit> visits, String fileName) {
    try (FileWriter writer = new FileWriter(fileName)) {
      for (HospitalVisit visit : visits) {
        writer.write(visit.getDayReport() + "\n");
      }
    } catch (IOException e) {
      System.err.println("Could not write daily report: " + e.getMessage());
    }
  }

  public void generateMonthlyReport(List<HospitalVisit> visits, String fileName) {
    Map<String, Integer> monthlyTotals = visits.stream()
        .collect(Collectors.groupingBy(
            HospitalVisit::getMonthKey,
            Collectors.summingInt(HospitalVisit::getTotalVisits)
        ));

    try (FileWriter writer = new FileWriter(fileName)) {
      for (Map.Entry<String, Integer> entry : monthlyTotals.entrySet()) {
        writer.write("Month: " + entry.getKey() + " | Total visits: " + entry.getValue() + "\n");
      }
    } catch (IOException e) {
      System.err.println("Could not write monthly report: " + e.getMessage());
    }
  }
}
