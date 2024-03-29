import { generateRectMap } from "../setup";
import { d, rl } from "../index";
import { landTheRover } from "./landing";
import { generateRoverMap } from "../map";

export function getWidth(): void {
  rl.question(
    "How wide is the landing plateau? (x) ",
    (plateauWidth: string) => {
      const pWidth = parseInt(plateauWidth);
      if (Number.isNaN(pWidth)) {
        console.log("Please enter a number!");
        getWidth();
      } else {
        const abs = Math.abs(pWidth);
        console.log(`Great, so it's ${abs} wide.`);
        d.pWidth = abs;
        getLength();
      }
    }
  );
}
function getLength(): void {
  rl.question("And how long is the plateau? (y) ", (plateauLength: string) => {
    const pLength = parseInt(plateauLength);
    if (Number.isNaN(pLength)) {
      console.log("Please enter a number!");
      return getLength();
    } else {
      const abs = Math.abs(pLength);
      console.log(`Great, so it's ${abs} wide.`);
      d.pLength = abs;
      d.map = generateRectMap(d.pWidth, d.pLength);
      drawPlateau(false);
      landTheRover();
    }
  });
}

export function drawPlateau(landed: boolean): void {
  console.clear();
  let liveMap = [];
  if (landed) {
    liveMap = generateRoverMap(d.map, d.position);
  } else {
    liveMap = d.map;
  }
  console.log(
    "y" + "-".repeat(d.pWidth) + "\\ (max y=" + (liveMap.length - 1) + ")"
  );
  for (let i = 0; i < liveMap.length; i++) {
    const yAxis0 = i === liveMap.length - 1 ? "0" : "|";
    console.log(yAxis0 + liveMap[liveMap.length - i - 1] + "|");
  }
  console.log(
    "+0" +
      "-".repeat(d.pWidth - 1) +
      "x (max x=" +
      (liveMap[0].length - 1) +
      ")"
  );
  console.log("");
}
