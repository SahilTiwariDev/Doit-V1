"use strict";

let nameOfTask = document.getElementById("taskName");
let descriptionOfTask = document.getElementById("taskDescription");
let taskArea = document.getElementById("displayArea");
let noTaskText = document.getElementById("epmtyTaskText");

// Load tasks from localStorage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTask(task.name, task.description));
}

// Save tasks to localStorage
function saveTasks() {
  let tasks = [];
  document.querySelectorAll(".task-item").forEach((taskItem) => {
    tasks.push({
      name: taskItem.querySelector(".task-name").innerText,
      description: taskItem.dataset.description,
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render a task on the page
function renderTask(name, description) {
  // Create the task container
  let taskbody = document.createElement("div");
  taskbody.classList.add("flex", "items-center", "justify-between", "task-item", "border", "p-2", "rounded", "mb-2");
  taskbody.dataset.description = description;

  // Front part: Task name and icon
  let taskFront = document.createElement("div");
  taskFront.classList.add("flex", "items-center", "gap-3");

  let listIcon = document.createElement("div");
  listIcon.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20px"
      viewBox="0 -960 960 960"
      width="20px"
      fill="#5A9BD6"
      class="mr-2"
    >
      <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
    </svg>
  `;

  let taskName = document.createElement("p");
  taskName.classList.add("task-name");
  taskName.innerHTML = name;
  taskName.style.cursor = "pointer";

  taskFront.appendChild(listIcon);
  taskFront.appendChild(taskName);

  // Back part: Edit icon
  let taskBack = document.createElement("div");
  taskBack.classList.add("flex", "gap-2");

  // Edit Icon Div
  let editDiv = document.createElement("div");
  editDiv.style.cursor = "pointer";
  editDiv.innerHTML = `
    
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5A9BD6"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
  `;
  editDiv.onclick = () => {
    let newPopUp = document.getElementById("editTaskPopUpBox");
    let textField = document.getElementById("taskNameField");
    textField.innerText = name;
    newPopUp.classList.add("flex");
    newPopUp.classList.remove("hidden");

    // Close button functionality
    document.getElementById("closeeditTaskPopUpBoxButton").onclick = () => {
      newPopUp.classList.remove("flex");
      newPopUp.classList.add("hidden");
    };
  };

  // Append edit icon to the back part
  taskBack.appendChild(editDiv);

  // Append front and back parts to the task container
  taskbody.appendChild(taskFront);
  taskbody.appendChild(taskBack);

  taskArea.appendChild(taskbody);

  // Hide the "no task" message
  noTaskText.classList.remove("flex");
  noTaskText.classList.add("hidden");
  taskArea.classList.remove("flex", "justify-center");
  taskArea.classList.add("flex", "flex-col", "gap-3");
}

// Add a new task
document.getElementById("addButton").onclick = () => {
  if (nameOfTask.value === "") {
    let popUpWindow = document.getElementById("popUpBox");
    popUpWindow.classList.remove("hidden");
    popUpWindow.classList.add("flex");
    document.getElementById("closePopUpButton").onclick = () => {
      popUpWindow.classList.add("hidden");
      popUpWindow.classList.remove("flex");
    };
  } else {
    renderTask(nameOfTask.value, descriptionOfTask.value);
    saveTasks();
    nameOfTask.value = "";
    descriptionOfTask.value = "";
  }
};

// Handle task clicks
taskArea.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    let taskItem = e.target.closest(".task-item");
    if (taskItem) {
      let taskDescription = taskItem.dataset.description;
      let newPopUp = document.getElementById("editTaskPopUpBox");
      let textField = document.getElementById("descriptionField");
      textField.innerText = taskDescription;
      newPopUp.classList.add("flex");
      newPopUp.classList.remove("hidden");

      document.getElementById("closeeditTaskPopUpBoxButton").onclick = () => {
        newPopUp.classList.remove("flex");
        newPopUp.classList.add("hidden");
      };
    }
  }
});

// Load tasks on page load
loadTasks();
