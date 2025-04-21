package model;

import java.time.LocalDate;

public class HospitalVisit {
  private LocalDate date;
  private int cardiology;
  private int radiology;
  private int visitors;

  public HospitalVisit(LocalDate date, int cardiology, int radiology, int visitors) {
    this.date = date;
    this.cardiology = cardiology;
    this.radiology = radiology;
    this.visitors = visitors;
  }

  public LocalDate getDate() {
    return date;
  }

  public int getTotalVisits() {
    return cardiology + radiology + visitors;
  }

  public String getDayReport() {
    return "Date: " + date + " | Total: " + getTotalVisits() +
        " (Cardio: " + cardiology + ", Radio: " + radiology + ", Visitors: " + visitors + ")";
  }

  public String getMonthKey() {
    return date.getYear() + "-" + date.getMonthValue();
  }
}