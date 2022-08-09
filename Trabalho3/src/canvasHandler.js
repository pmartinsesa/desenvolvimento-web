class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  createLine(ctx) {
    ctx.lineWidth = 10;
    this.line = new Path2D();

    this.line.moveTo(this.x1, this.y1);
    this.line.lineTo(this.x2, this.y2);
  }

  getLength() {
    return this.x2 - this.x1;
  }

  getLinePartitions() {
    const length = this.getLength();
    const partition = length / 3;

    return {
      firstPartition: partition + this.x1,
      lastPartition: partition + partition + this.x1
    };
  }

  moveLine(event, command, isLeft) {
    const lineLength = this.getLength();

    if (command === "growLine") {
      console.log("growLine");

      const growReference = isLeft ? this.x2 : this.x1;

      this.line = new Path2D();
      this.line.moveTo(growReference, this.y1);
      this.line.lineTo(event.offsetX, event.offsetY);

      isLeft ? 
        this.updateAxisPosition(event.offsetX, this.y1, growReference, event.offsetY) : 
        this.updateAxisPosition(growReference, this.y1, event.offsetX, event.offsetY)

    } else {
      console.log("center");

      this.line = new Path2D();
      const x1 = event.offsetX - lineLength / 2;
      const x2 = event.offsetX + lineLength / 2;
      // const y1 = event.offsetY - lineLength / 2;
      // const y2 = event.offsetY + lineLength / 2;
      
      this.line.moveTo(x1, event.offsetY);
      this.line.lineTo(x2, event.offsetY);

      this.updateAxisPosition(x1, event.offsetY, x2, event.offsetY);
    }
  }

  updateAxisPosition(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

let lines = [];

const lineBeginX = 250;
const lineBeginY = 250;
const lineEndX = 450;
const lineEndY = 250;

const canvas = $("#myCanvas");
const ctx = canvas[0].getContext("2d");
lines.push(new Line(lineBeginX, lineBeginY, lineEndX, lineEndY));
createAllLines();
printOnCanvas();

canvas.on("mousedown", (e) => {
  const lineProcessing = hasClickInSomeLine(e.offsetX, e.offsetY);
  if (lineProcessing.hasClick) {
    const partitions = lineProcessing.selectedLine.getLinePartitions();

    console.log("partitions.firstPartition", partitions.firstPartition)
    console.log("partitions.lastPartition", partitions.lastPartition)
    console.log("offsetX", e.offsetX)
    console.log("offsetY", e.offsetY)

    const isCenter = e.offsetX > partitions.firstPartition && e.offsetX < partitions.lastPartition;
    const isLeft = e.offsetX <= partitions.firstPartition;

    console.log("partitions", partitions)
    console.log("isCenter", isCenter)
    console.log("isLeft", isLeft)

    let command = isCenter ? "center" : "growLine";

    $("canvas").on("mousemove", (e) => {
      lineProcessing.selectedLine.moveLine(e, command, isLeft);
      printOnCanvas();
    });
  }
});

canvas.on("mouseup", () => {
  $("canvas").off("mousemove");
});

function hasClickInSomeLine(xAxis, yAxis) {
  const lineProcessing = lines.filter((line) => ctx.isPointInStroke(line.line, xAxis, yAxis));
  
  return {
    selectedLine: lineProcessing[0] || [],
    hasClick: lineProcessing.length > 0
  }
}

function createAllLines() {
  lines.forEach((line) => {
    line.createLine(ctx);
  });
}

function printOnCanvas() {
  lines.forEach((line) => {
    ctx.clearRect(0, 0, 700, 500);
    ctx.stroke(line.line);
  });
}