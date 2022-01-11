const container = document.querySelector("#container");
const divCommonClass = document.querySelector(".divCommonClass");

// Creating 345 Divs inside container using loop.
for (let i = 1; i <= 345; i++) {
  container.innerHTML += '<div class="divCommonClass"></div>';
}

// Adding Hover Effects to the Divs.
container.addEventListener("mouseover", (event) => {
  if (event.target.id == "container") {
    return;
  }
  event.target.style.backgroundColor = "royalblue";
});

// Creating a Reload button.
const buttonReload = document.querySelector("#reloadButton");
buttonReload.addEventListener("click", reload);

function reload() {
  location.reload();
}

// Generating a New Grid Layout.
const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", newGridLayout);

function newGridLayout() {
  let gridLayout = prompt("Enter the number of squares (Maximum 100): ");
  if (gridLayout > 100) {
    return;
  }

  const removeClass = document.querySelectorAll(".divCommonClass");
  for (let i = 0; i < removeClass.length; i++) {
    const element = removeClass[i];
    element.parentNode.removeChild(element);
  }
  // Creating Custom Divs inside container using loop.
  for (let i = 1; i <= gridLayout * gridLayout; i++) {
    container.innerHTML += '<div class="divCommonClass"></div>';
  }
}
