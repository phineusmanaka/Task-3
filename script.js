// script.js

// Define variables
const name = "Manaka Phineus";
const bio = "Your biography goes here...";
const email = "phineusmanaka@gmail.com";
const phoneNumber = "0729100633";

// Define projects array
const projects = [
  "Project 1: Project description",
  "Project 2: Project description",
  "Project 3: Project description"
];

// Function to render data
function renderData() {
  document.getElementById("name").textContent = name;
  document.getElementById("bio").textContent = bio;

  const projectsList = document.getElementById("projects");
  projects.forEach(project => {
    const listItem = document.createElement("li");
    listItem.textContent = project;
    projectsList.appendChild(listItem);
  });

  document.getElementById("email").textContent = email;
  document.getElementById("phoneNumber").textContent = phoneNumber;
}

// Call renderData function
renderData();
