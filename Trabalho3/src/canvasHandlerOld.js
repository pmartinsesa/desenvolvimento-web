const lineBeginX = 250;
const lineBeginY = 250;
const lineEndX = 450;
const lineEndY = 250;
const lineLength = lineEndX - lineBeginX;

const primeiroParametro = 315;
const segundoParametro = 405;

const canvas = $("#myCanvas");
const ctx = canvas[0].getContext("2d");
let line = new Path2D();

ctx.lineWidth = 10;
line.moveTo(lineBeginX, lineBeginY);
line.lineTo(lineEndX, lineEndY);

console.log(line);
ctx.stroke(line);

const moveu = (e, command, isRight) => {
  if (command === "growLine") {
    console.log("growLine");

    const growReference = isRight ? lineEndX : lineBeginX;

    ctx.clearRect(0, 0, 700, 500);
    line = new Path2D();
    line.moveTo(growReference, lineBeginY);
    line.lineTo(e.offsetX, e.offsetY);
    ctx.stroke(line);
  } else {
    console.log("center");

    ctx.clearRect(0, 0, 700, 500);
    line = new Path2D();
    line.moveTo(e.offsetX - lineLength / 2, e.offsetY);
    line.lineTo(e.offsetX + lineLength / 2, e.offsetY);
    ctx.stroke(line);
  }
};

canvas.on("mousedown", (e) => {
  const hasClickInSomeLine = ctx.isPointInStroke(line, e.offsetX, e.offsetY);
  if (hasClickInSomeLine) {
    const isCenter = e.offsetX > 300 && e.offsetX < 400;
    const isRight = e.offsetX <= 300;

    let command = isCenter ? "center" : "growLine";

    $("canvas").on("mousemove", (e) => {
      moveu(e, command, isRight);
    });
  }
});


function printOnCanvas() {
    
}


canvas.on("mouseup", () => {
  $("canvas").off("mousemove");
});
