let lines = [];

const FIRST_LINE_X1 = 250;
const FIRST_LINE_Y1 = 250;
const FIRST_LINE_X2 = 450;
const FIRST_LINE_Y2 = 250;

const canvas = $("#myCanvas");
const canvasByDocument = document.getElementById("myCanvas")
const ctx = canvas[0].getContext("2d");

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
                    
          createAllLines();
          printOnCanvas();
      
      } else {
        const distanceToBegin = lineProcessing.selectedLine.getDistanceOfInitialPoints(e.offsetX, e.offsetY)
        const distanceToCenter = lineProcessing.selectedLine.getDistanceOfCenterPoints(e.offsetX, e.offsetY)
        const distanceToEnd = lineProcessing.selectedLine.getDistanceOfFinalPoints(e.offsetX, e.offsetY)        
        
        const isCenter =
          Math.min(distanceToBegin, distanceToCenter, distanceToEnd) === distanceToCenter;

        const isLeft = 
          Math.min(distanceToBegin, distanceToCenter, distanceToEnd) === distanceToBegin;

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
