const triangleButton = $("#triangle");
const squareButton = $("#square");
const pentagonButton = $("#pentagon");
const hexagonButton = $("#hexagon");
const heptagonButton = $("#heptagon");
const octagonButton = $("#octagon");
const lineButton = $("#line");

triangleButton.on("click", () => {
  lines = [];
  lines.push(
    new Line(245, 367, 445, 367),
    new Line(245, 367, 345, 200),
    new Line(445, 367, 345, 200)
  );
  
  createAllLines();
  printOnCanvas();
});

squareButton.on("click", () => {
  lines = [];

  lines.push(
    new Line(245, 367, 445, 367),
    new Line(245, 167, 445, 167),
    new Line(245, 167, 245, 367),
    new Line(445, 167, 445, 367)
  );
  
  createAllLines();
  printOnCanvas();
});

pentagonButton.on("click", () => {
  lines = [];

  lines.push(
    new Line(245, 367, 445, 367),
    new Line(245, 367, 200, 167),
    new Line(445, 367, 490, 167),
    new Line(200, 167, 345, 67),
    new Line(490, 167, 345, 67)
  );
  
  createAllLines();
  printOnCanvas();
});

hexagonButton.on("click", () => {
  lines = [];

  lines.push(
    new Line(245, 367, 395, 367),
    new Line(245, 367, 170, 217),
    new Line(395, 367, 470, 217),
    new Line(170, 217, 245, 67),
    new Line(470, 217, 395, 67),
    new Line(245, 67, 395, 67)
  );
  
  createAllLines();
  printOnCanvas();
});

heptagonButton.on("click", () => {
  lines = [];

  lines.push(
    new Line(245, 467, 395, 467),
    new Line(245, 467, 170, 317),
    new Line(395, 467, 470, 317),
    new Line(170, 317, 195, 167),
    new Line(470, 317, 445, 167),
    new Line(195, 167, 325, 67),
    new Line(445, 167, 325, 67)
  );
  
  createAllLines();
  printOnCanvas();
});

octagonButton.on("click", () => {
  lines = [];

  lines.push(
    new Line(245, 480, 395, 480),
    new Line(245, 480, 170, 330),
    new Line(395, 480, 470, 330),
    new Line(170, 330, 170, 180),
    new Line(470, 330, 470, 180),
    new Line(170, 180, 250, 30),
    new Line(470, 180, 395, 30),
    new Line(250, 30, 395, 30)
  );
  
  createAllLines();
  printOnCanvas();
});

lineButton.on("click", () => {
  lines = [];

  lines.push(
    new Line(FIRST_LINE_X1, FIRST_LINE_Y1, FIRST_LINE_X2, FIRST_LINE_Y2)
  );
  
  createAllLines();
  printOnCanvas();
});