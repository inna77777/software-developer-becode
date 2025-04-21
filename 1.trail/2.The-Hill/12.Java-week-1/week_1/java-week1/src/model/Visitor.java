package model;

public class Visitor {
  private final String firstname;
  private final String lastname;
  private final String reason;
  private final String department;
  private final String date;

  public Visitor(String firstname, String lastname, String reason, String department, String date) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.reason = reason;
    this.department = department;
    this.date = date;
  }

  public String toCsvRow() {
    return String.join(",", firstname, lastname, reason, department == null ? "" : department, date);
  }
}
