const container = document.querySelector("#container");

// Creating 256 Divs inside container using loop.
for (let i = 1; i <= 345; i++) {
  container.innerHTML += '<div class="divCommonClass"></div>';
}

// Adding Hover Effects to the Divs.
// (But for this purpose I'm using a container. Because divs aren't working.)
container.addEventListener("mouseover", (event) => {
  if (event.target.id == "container") {
    return;
  }
  event.target.style.backgroundColor = "royalblue";
});
