import { generateRectMap } from "../setup";
import { d, rl } from "../index";

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
      console.log(JSON.stringify(d));
    }
  });
}
