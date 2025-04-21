package service;

import model.HospitalVisit;

import java.io.BufferedReader;
import java.io.FileReader;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class VisitCSVReader {

  public List<HospitalVisit> readVisits(String filename) {
    List<HospitalVisit> visits = new ArrayList<>();

    try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
      String line;
      boolean isFirstLine = true;

      while ((line = br.readLine()) != null) {
        if (isFirstLine) {
          isFirstLine = false;
          continue;
        }

        String[] parts = line.split(",");
        LocalDate date = LocalDate.parse(parts[0]);
        int cardio = Integer.parseInt(parts[1]);
        int radio = Integer.parseInt(parts[2]);
        int visitor = Integer.parseInt(parts[3]);

        visits.add(new HospitalVisit(date, cardio, radio, visitor));
      }

    } catch (Exception e) {
      System.err.println("Error reading CSV: " + e.getMessage());
    }

    return visits;
  }
}
