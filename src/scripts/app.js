"use strict";

let nameOfTask = document.getElementById("taskName");
let descriptionOfTask = document.getElementById("taskDescription");
let taskArea = document.getElementById("displayArea");

function addTask(name, description) {
  let taskbody = document.createElement("div");
  let taskFront = document.createElement("p");
  let taskBackt = document.createElement("p");
  taskFront.innerHTML = name.value;
  taskBackt.innerHTML = description.value;
  taskbody.appendChild(taskFront);
  taskbody.appendChild(taskBackt);
  taskArea.appendChild(taskbody);
}

document.getElementById("addButton").onclick = () => {
  addTask(nameOfTask, descriptionOfTask);
};
