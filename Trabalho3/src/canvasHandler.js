const canvas = $("#myCanvas");
const ctx = canvas[0].getContext("2d");
const line = new Path2D();

ctx.lineWidth = 10;
line.moveTo(250, 250);
line.lineTo(450, 250);


console.log(line)
ctx.stroke(line);

canvas.on("click", (e) => {
    console.log(e.originalEvent.x);
    console.log(ctx.isPointInStroke(line, e.offsetX, e.offsetY));
    console.log(e);
})
console.log(canvas[0]);
console.log(ctx);
