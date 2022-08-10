let lines = [];

const FIRST_LINE_X1 = 250;
const FIRST_LINE_Y1 = 250;
const FIRST_LINE_X2 = 450;
const FIRST_LINE_Y2 = 250;

const canvas = $("#myCanvas");
const ctx = canvas[0].getContext("2d");

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
      lastPartition: partition + partition + this.x1,
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

      isLeft
        ? this.updateAxisPosition(
            event.offsetX,
            this.y1,
            growReference,
            event.offsetY
          )
        : this.updateAxisPosition(
            growReference,
            this.y1,
            event.offsetX,
            event.offsetY
          );
    } else {
      console.log("oldy1", this.y1);
      console.log("oldy2", this.y2);

      console.log("event.offsetY", event.offsetY);
      console.log("event.offsetX", event.offsetX);
      const lineLength = (this.getLength()/2) + this.x1;

      console.log("lineLength", lineLength);
      console.log("(event.offsetX - lineLength)", (event.offsetX - lineLength));
      console.log("(event.offsetY - lineLength)", (event.offsetY - lineLength));


      this.line = new Path2D();
      const x1 = this.x1 + (event.offsetX - lineLength);
      const x2 = this.x2 + (event.offsetX - lineLength);

      const y1 = this.y1 + (event.offsetX - lineLength);
      const y2 = this.y2 + (event.offsetX - lineLength);

      this.line.moveTo(x1, y1);
      this.line.lineTo(x2, y2);
      console.log("newy1", y1);
      console.log("newy1", y2);
      this.updateAxisPosition(x1, y1, x2, y2);
    }
  }

  updateAxisPosition(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

function main() {
  lines.push(
    new Line(FIRST_LINE_X1, FIRST_LINE_Y1, FIRST_LINE_X2, FIRST_LINE_Y2)
  );
  createAllLines();
  printOnCanvas();

  canvas.on("mousedown", (e) => {
    const lineProcessing = hasClickInSomeLine(e.offsetX, e.offsetY);
    if (lineProcessing.hasClick) {
      const isRightClick = e.button === 2;
      if (isRightClick) {
        const lineLength = lineProcessing.selectedLine.getLength();

        const line1 = new Line(
          lineProcessing.selectedLine.x1,
          lineProcessing.selectedLine.y1,
          lineProcessing.selectedLine.x1 + lineLength / 2,
          lineProcessing.selectedLine.y1
        );

        const line2 = new Line(
          lineProcessing.selectedLine.x1 + lineLength / 2,
          lineProcessing.selectedLine.y1,
          lineProcessing.selectedLine.x2,
          lineProcessing.selectedLine.y2
        );

        lines.splice(lineProcessing.index, 1);
        lines.push(line1, line2);

        console.log(lines);

        createAllLines();
        printOnCanvas();
      
      } else {
        const partitions = lineProcessing.selectedLine.getLinePartitions();
        const isCenter =
          e.offsetX > partitions.firstPartition &&
          e.offsetX < partitions.lastPartition;
        const isLeft = e.offsetX <= partitions.firstPartition;
        const command = isCenter ? "center" : "growLine";

        $("canvas").on("mousemove", (e) => {
          lineProcessing.selectedLine.moveLine(e, command, isLeft);
          printOnCanvas();
        });
      }
    }
  });

  canvas.on("mouseup", () => {
    $("canvas").off("mousemove");
  });
}

function hasClickInSomeLine(xAxis, yAxis) {
  const indexLine = lines.findIndex((line) =>
    ctx.isPointInStroke(line.line, xAxis, yAxis)
  );

  return {
    selectedLine: lines[indexLine] || [],
    hasClick: indexLine !== -1,
    index: indexLine,
  };
}

function createAllLines() {
  lines.forEach((line) => {
    line.createLine(ctx);
  });
}

function printOnCanvas() {
  ctx.clearRect(0, 0, 700, 500);
  lines.forEach((line) => {
    ctx.stroke(line.line);
  });
}

main();
