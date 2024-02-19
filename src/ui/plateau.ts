import { generateRectMap } from "../setup";
import { d, rl } from "../index";
import { landTheRover } from "./landing";
import { generateRoverMap } from "../map";

export function getWidth(): void {
  rl.question(
    "How wide is the landing plateau? (x)",
    (plateauWidth: string) => {
      const pWidth = parseInt(plateauWidth);
      if (Number.isNaN(pWidth)) {
        console.log("Please enter a number!");
        getWidth();
      } else {
        console.log(`Great, so it's ${pWidth} wide.`);
        d.pWidth = pWidth;
        getLength();
      }
    }
  );
}
function getLength(): void {
  rl.question("And how long is the plateau? (y)", (plateauLength: string) => {
    const pLength = parseInt(plateauLength);
    if (Number.isNaN(pLength)) {
      console.log("Please enter a number!");
      return getLength();
    } else {
      console.log(`Great, so it's ${pLength} wide.`);
      d.pLength = pLength;
      d.map = generateRectMap(d.pWidth, d.pLength);
      drawPlateau(false);
      landTheRover();
      // console.log(JSON.stringify(d));
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
    console.log("|" + liveMap[liveMap.length - i - 1] + "|");
  }
  console.log(
    "0" + "-".repeat(d.pWidth) + "x (max x=" + (liveMap[0].length - 1) + ")"
  );
}
