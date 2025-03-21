/** @format */

import { saveTasks, getTasks } from "./storage.js";
import { renderTasks } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const clearCompletedBtn = document.getElementById("clearCompleted");

  let tasks = getTasks();
  renderTasks(tasks);

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
      tasks.push({ text: taskText, completed: false });
      saveTasks(tasks);
      renderTasks(tasks);
      taskInput.value = "";
    }
  }

  clearCompletedBtn.addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.completed);
    saveTasks(tasks);
    renderTasks(tasks);
  });
});
