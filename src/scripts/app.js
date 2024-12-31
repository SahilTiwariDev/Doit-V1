"use strict";

let nameOfTask = document.getElementById("taskName");
let descriptionOfTask = document.getElementById("taskDescription");
let taskArea = document.getElementById("displayArea");
let noTaskText = document.getElementById("epmtyTaskText");

function addTask(name) {
  if (name.value === "") {
    let popUpWindow = document.getElementById("popUpBox");
    popUpWindow.classList.remove("hidden");
    popUpWindow.classList.add("flex");
    document.getElementById("closePopUpButton").onclick = () => {
      popUpWindow.classList.add("hidden");
      popUpWindow.classList.remove("flex");
    };
  } else {
    // Create the task container
    let taskbody = document.createElement("div");
    taskbody.classList.add("flex", "items-center", "gap-3", "task-item");

    // Add the description to the dataset
    taskbody.dataset.description = descriptionOfTask.value;

    // Create the task name element
    let taskFront = document.createElement("p");
    taskFront.innerHTML = name.value;
    taskFront.style.cursor = "pointer";

    // Create the list icon
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

    // Append the elements to the task container
    taskbody.appendChild(listIcon);
    taskbody.appendChild(taskFront);
    taskArea.appendChild(taskbody);

    // Hide the "no task" message
    noTaskText.classList.remove("flex");
    noTaskText.classList.add("hidden");
    taskArea.classList.remove("flex", "justify-center");

    // Reset the input fields
    nameOfTask.value = "";
    descriptionOfTask.value = "";
  }
}

// Add a new task
document.getElementById("addButton").onclick = () => {
  addTask(nameOfTask);
};

// Handle task clicks
taskArea.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    // Find the parent task container
    let taskItem = e.target.closest(".task-item");

    // Check if a valid task container is clicked
    if (taskItem) {
      // Fetch the description from the dataset
      let taskDescription = taskItem.dataset.description;

      // Open the pop-up and display the description
      let newPopUp = document.getElementById("editTaskPopUpBox");
      let textField = document.getElementById("descriptionField");
      textField.innerText = taskDescription; // Display the dynamic description
      newPopUp.classList.add("flex");
      newPopUp.classList.remove("hidden");

      // Close button functionality
      document.getElementById("closeeditTaskPopUpBoxButton").onclick = () => {
        newPopUp.classList.remove("flex");
        newPopUp.classList.add("hidden");
      };
    }
  }
});
