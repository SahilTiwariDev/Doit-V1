"use strict";

let nameOfTask = document.getElementById("taskName");
let descriptionOfTask = document.getElementById("taskDescription");
let taskArea = document.getElementById("displayArea");
let noTaskText = document.getElementById("epmtyTaskText");

function addTask(name, description) {
  if (description.value === "") {
    let popUpWindow = document.getElementById("popUpBox");
    popUpWindow.classList.remove("hidden");
    popUpWindow.classList.add("flex");
    document.getElementById("closePopUpButton").onclick = () => {
      popUpWindow.classList.add("hidden");
      popUpWindow.classList.remove("flex");
    };
  } else {
    let taskbody = document.createElement("div");
    let taskFront = document.createElement("p");
    let taskBackt = document.createElement("p");
    taskbody.classList.add("flex");
    taskFront.innerHTML = name.value;
    taskBackt.innerHTML = description.value;
    taskbody.appendChild(taskFront);
    taskbody.appendChild(taskBackt);
    taskArea.appendChild(taskbody);
    noTaskText.classList.remove("flex");
    noTaskText.classList.add("hidden");
    taskArea.classList.remove('flex', 'justify-center')
  }
}

document.getElementById("addButton").onclick = () => {
  addTask(nameOfTask, descriptionOfTask);
};
