console.log("oi")

const lineBeginX = 250;
const lineBeginY = 250;
const lineEndX = 450;
const lineEndY = 250;
const lineLength = lineEndX - lineBeginX;


const primeiroParametro = 315
const segundoParametro = 405


const canvas = $("#myCanvas");
const ctx = canvas[0].getContext("2d");
let line = new Path2D();

ctx.lineWidth = 10;
line.moveTo(lineBeginX, lineBeginY);
line.lineTo(lineEndX, lineEndY);

console.log(line)
ctx.stroke(line);

const moveu = (e) => {
    const isCenter = e.offsetX > 300 && e.offsetX < 400;
    const isRight = e.offsetX <= 300;
    const isLeft = !isRight;
    let command = 'center'

    if (isCenter) { 
        console.log("isCenter", isCenter);
    }
    else {
        command = 'growLine';
        if (isRight) {
            console.log("isRight", isRight);
        }
        else {
            console.log("isLeft", isLeft);
        }
    }

    // if(command === 'growLine') {
    //     console.log(e.offsetX)
    //     ctx.clearRect(0, 0, 700, 500);
    //     console.log(line)
    //     line.moveTo(lineBeginX, lineBeginY);
	// 	ctx.lineTo(e.offsetX, e.offsetY);
    //     ctx.stroke(line);
    // }
    // else {
    //     console.log("center")

        ctx.clearRect(0, 0, 700, 500);
        line = new Path2D();
        line.moveTo(e.offsetX - (lineLength /2), e.offsetY);
        line.lineTo(e.offsetX + (lineLength /2), e.offsetY);
        ctx.stroke(line);
    // }
};


canvas.on("mousedown", (e) => {
    // console.log("mousedown", e.offsetX);
    const hasClickInSomeLine = ctx.isPointInStroke(line, e.offsetX, e.offsetY)
    if (hasClickInSomeLine) {
        document.getElementsByTagName("canvas")[0].addEventListener("mousemove", moveu, false);
    }
});

// canvas.on("mousedown", (e) => {
//     console.log("mousedown");
// });

canvas.on("mouseup", (e) => {
    // console.log("mouseup")
    //console.log(canvas.removeEventListener("mousemove", moveu, false))
    document.getElementsByTagName("canvas")[0].removeEventListener("mousemove", moveu, false);
});



console.log(canvas[0]);
console.log(ctx);
