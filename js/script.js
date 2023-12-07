const container = document.getElementById("container");
let containerHeight = 720;
let containerWidth = 832;
let gridX = 52;
let gridY = 45;
let gridSize = 16;

// Creates grid with 16x16 squares
function generateGrid() {
	// Create grid = 52 x 45
	for (let i = 0; i < gridX * gridY; i++) {
		const grid = document.createElement("div");
		container.append(grid);
		grid.classList.add("grids");
		grid.setAttribute("id", "grid" + i);
	}
	// Sets container width and height based on number of squares
	// on X and Y axis and square size
	containerWidth = gridX * gridSize;
	containerHeight = gridY * gridSize;
	container.style.width = containerWidth + "px";
	container.style.height = containerHeight + "px";
}

// function to remove previous grid before generating a new one
function removeGrid() {
	const container = document.getElementById("container");
	while (container.hasChildNodes()) {
		container.firstChild.remove();
	}
}

container.onmouseover = handler;

// mouseover event function
// on mouseover, change background style to red
function handler(event) {
	if (
		event.x < container.clientWidth &&
		event.x > 4 &&
		event.y > 40 &&
		event.y < container.clientHeight + 40
	) {
		if (event.type == "mouseover") {
			event.target.style.background = "red";
		}
	}
}

// Grid size button
const gridSizeBtn = document.getElementById("gridSizeBtn");
// Prompt for grid size for X and Y axis
gridSizeBtn.addEventListener("click", function () {
	gridX = prompt("Grid size (X axis): ");
	gridY = prompt("Grid size (Y axis): ");
	removeGrid();
	generateGrid();
});

// Function call to generate grid onload
generateGrid();
