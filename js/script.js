const container = document.getElementById("container");
const grid = document.createElement("div");

// Create grid = 52 x 45
for (let i = 0; i < 2340; i++) {
	const grid = document.createElement("div");
	container.append(grid);
	grid.classList.add("grids");
}
