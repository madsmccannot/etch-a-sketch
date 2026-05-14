const container = document.querySelector(".container");
const button = document.querySelector(".grid-btn");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 640 / size;

  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
  
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "beige";
    });

    container.appendChild(square);
  }
}

button.addEventListener("click", () => {
  let userInput = prompt("Enter number of squares per side (max 100)");

  userInput = Number(userInput);

  if (userInput > 0 && userInput <= 100) {
    createGrid(userInput);
  }
});

createGrid(16);
