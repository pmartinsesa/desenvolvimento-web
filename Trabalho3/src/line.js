export default class Line {
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

      this.updateAxisPosition(growReference, this.y1, event.offsetX, event.offsetY);

    } else {
      console.log("center");

      this.line = new Path2D();
      const x1 = event.offsetX - lineLength / 2;
      const x2 = event.offsetX + lineLength / 2;
      
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