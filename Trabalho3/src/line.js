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
    const x2x1 = this.x2 - this.x1;
    const y2y1 = this.y2 - this.y1;

    return Math.sqrt(x2x1 * x2x1 + y2y1 * y2y1);
  }

  getLinePartitions() {
    const length = this.getLength();
    const partition = length / 3;

    return {
      firstPartition: partition + this.x1,
      lastPartition: partition + partition + this.x1,
    };
  }

  moveLine(event, command, isLeft, rect) {
    if (command === "growLine") {
      this.line = new Path2D();
      let x1 = 0;
      let y1 = 0;
      let x2 = 0;
      let y2 = 0;

      if (isLeft) {
        x1 = event.offsetX;
        y1 = event.offsetY;
        x2 = this.x2;
        y2 = this.y2;
      } else {
        x1 = this.x1;
        y1 = this.y1;
        x2 = event.offsetX;
        y2 = event.offsetY;
      }

      this.line.moveTo(x1, y1);
      this.line.lineTo(x2, y2);
      this.updateAxisPosition(x1, y1, x2, y2);

    } else {
      this.line = new Path2D();

      const centerX = this.x2 - this.x1;
      const centerY = this.y2 - this.y1;

      const x1 = event.offsetX - (centerX/2);
      const y1 = event.offsetY - (centerY/2);
      const x2 = x1 + centerX;
      const y2 = y1 + centerY;

      this.line.moveTo(x1, y1);
      this.line.lineTo(x2, y2);
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
