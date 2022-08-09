export class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.line = new Path2D();
    this.line.moveTo(this.x1, this.y1);
    this.line.lineTo(this.x2, this.y2);
  }

  getLength() {
    this.x1 - this.x2;
  }

  getLinePartitions() {
    const length = this.getLength();
    const partition = length / 3;

    return {
      firstPartion: partition,
      lastPartion: partition + partition
    };
  }

  moveLine(event, command, isRight) {
    lineLength = this.getLength();

    if (command === "growLine") {
      console.log("growLine");

      const growReference = isRight ? x2 : x1;

      this.line = new Path2D();
      this.line.moveTo(growReference, y1);
      this.line.lineTo(event.offsetX, event.offsetY);

    } else {
      console.log("center");

      this.line = new Path2D();
      this.line.moveTo(event.offsetX - lineLength / 2, event.offsetY);
      this.line.lineTo(event.offsetX + lineLength / 2, event.offsetY);
    }
  }
}
