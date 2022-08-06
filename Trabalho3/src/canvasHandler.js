const canvas = $("#myCanvas");
const ctx = canvas[0].getContext("2d");
const line = new Path2D();

ctx.lineWidth = 10;
line.moveTo(250, 250);
line.lineTo(450, 250);

console.log(line)
ctx.stroke(line);

const moveu = (e) => {
    console.log("mousemove");
};


canvas.on("mousedown", (e) => {
    console.log("mousedown");
    const hasClickInSomeLine = ctx.isPointInStroke(line, e.offsetX, e.offsetY)
    if (hasClickInSomeLine) {
        // canvas.on("mousemove", moveu);
        document.getElementsByTagName("canvas")[0].addEventListener("mousemove", moveu, false);

    }
});

// canvas.on("mousedown", (e) => {
//     console.log("mousedown");
// });

canvas.on("mouseup", (e) => {
    console.log("mouseup")
    //console.log(canvas.removeEventListener("mousemove", moveu, false))
    document.getElementsByTagName("canvas")[0].removeEventListener("mousemove", moveu, false);
});



console.log(canvas[0]);
console.log(ctx);
