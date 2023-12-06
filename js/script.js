const container = document.getElementById("container");
const grid = document.createElement("div");

// Create grid = 52 x 45
for (let i = 0; i < 2340; i++) {
	const grid = document.createElement("div");
	container.append(grid);
	grid.classList.add("grids");
}

container.onmouseover = handler;

// mouseover event function
// on mouseover, change background style to red
function handler(event) {
	if (event.x < 832 && event.x > 0 && event.y > 0 && event.y < 720) {
		if (event.type == "mouseover") {
			event.target.style.background = "red";
		}
	}
}
