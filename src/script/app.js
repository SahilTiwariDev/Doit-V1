"use strict";

// Add-event
document.getElementById("addtaskButton").onclick = () => {
  // Create-task-body
  let newTask = document.createElement("div"); // Outer body
  let frontPart = document.createElement("div"); // Inner-body(front-part)
  let backPart = document.createElement("div"); // Inner-body(back-part)

  // Add attributes
  newTask.setAttribute("class", "flex text-xl justify-between"); // Outer-body
  frontPart.setAttribute("class", "flex gap-2 items-center"); // Inner-body(front-part)
  backPart.setAttribute("class", "flex gap-5 items-center"); // Inner-body(back-part)

  // Create-content

  //Front-part
  frontPart.innerHTML = `<svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#718355"
              >
                <path
                  d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                />
              </svg>`; // list-item-icon
  let taskDetails = document.createElement("p"); // Task-details
  taskDetails.innerText = "This is a demo text for testing the code"; // Text-for-task-details

  // Back-part

  // Create-button
  let doneTaskButton = document.createElement("button");
  let editTaskButton = document.createElement("button");
  let deleteTaskButton = document.createElement("button");

  // Button-icons
  doneTaskButton.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#718355"
                >
                  <path
                    d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                  />`; // Done-icon
  editTaskButton.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#718355"
                >
                  <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"
                  />
                </svg>`; // Edit-icon
  deleteTaskButton.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#718355"
                >
                  <path
                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                  />
                </svg>`; // Delete-icon

  // Add-<hr />-for-next-tasks
  let horizontalLine = document.createElement("hr");

  // Add-content(front-part)

  frontPart.appendChild(taskDetails);

  // Add-content(back-part)

  backPart.appendChild(doneTaskButton);
  backPart.appendChild(editTaskButton);
  backPart.appendChild(deleteTaskButton);

  // Add-inner-body-to-the-outer-body

  newTask.appendChild(frontPart);
  newTask.appendChild(backPart);

  // Add-outer-body-to-the-document

  document.getElementById("container").appendChild(newTask);
  document.getElementById("container").appendChild(horizontalLine);
};

// Hide-SVG-on-hover

let todayButton = document.getElementById("today-button"); // Today-button
let todayIcon = document.getElementById("today-icon"); // Today-icon

todayButton.addEventListener("mouseover", () => {
  todayIcon.classList.add("hidden");
});
todayButton.addEventListener("mouseleave", () => {
  todayIcon.classList.remove("hidden");
});

let tomorrowButton = document.getElementById("tomorrow-button"); // Tomorrow-button
let tomorrowIcon = document.getElementById("tomorrow-icon"); // Tomorrow-icon

tomorrowButton.addEventListener("mouseover", () => {
  tomorrowIcon.classList.add("hidden");
});

tomorrowButton.addEventListener("mouseleave", () => {
  tomorrowIcon.classList.remove("hidden");
});

let completedButton = document.getElementById("completed-button"); // Completed-button
let completedIcon = document.getElementById("completed-icon"); // Completed-icon

completedButton.addEventListener("mouseover", () => {
  completedIcon.classList.add("hidden");
});

completedButton.addEventListener("mouseleave", () => {
  completedIcon.classList.remove("hidden");
});

let addTaskButton = document.getElementById("addtaskButton"); // Add-task-button
let addTaskIcon = document.getElementById("addTaskIcon"); // Add-task-icon

addTaskButton.addEventListener("mouseover", () => {
  addTaskIcon.classList.add("hidden");
});

addTaskButton.addEventListener("mouseleave", () => {
  addTaskIcon.classList.remove("hidden");
});
