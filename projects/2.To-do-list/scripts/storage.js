/** @format */

export function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
