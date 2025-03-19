/** @format */

import { saveTasks, getTasks } from "./storage.js";

export function renderTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveTasks(tasks);
      renderTasks(tasks);
    });

    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks(tasks);
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
