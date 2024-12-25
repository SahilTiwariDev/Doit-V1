"use strict";

let taskName = document.getElementById("taskDescription");
let taskArea = document.getElementById("displayArea");

function addTask(taskValue) {
  let taskData = document.createElement("p");
  taskData.innerHTML = taskValue.value; // Get the value of the input field
  taskArea.appendChild(taskData);      // Append the new task to the display area
}

document.getElementById("addButton").onclick = () => {
  addTask(taskName); // Call addTask when the button is clicked
};
