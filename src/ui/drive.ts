import { rl, d } from "../index";
import { moveRover } from "../maneuver";
import { drawPlateau } from "./plateau";
import { getNewPosition, terrainIsNavigable } from "../move";

export function driveAround() {
  rl.question(
    "What instructions will you give to rover now? ",
    (input: string) => {
      const invalidInstructions: string[] = [];
      const refusedInstructions: string[] = [];
      for (let i = 0; i < input.length; i++) {
        const instr = input.charAt(i).toUpperCase();
        if (instr === "M") {
          const targetCoords = getNewPosition(d.position);
          if (terrainIsNavigable(targetCoords.x, targetCoords.y, d.map)) {
            d.position = getNewPosition(d.position);
          } else {
            refusedInstructions.push(instr);
          }
        } else if (instr === "R" || instr === "L") {
          d.position = moveRover(instr, d.position, d.map);
        } else {
          invalidInstructions.push(instr);
        }
      }
      drawPlateau(true);
      if (invalidInstructions.length > 0) {
        console.log(
          "WARNING: the following invalid instructions were given and ignored: " +
            invalidInstructions.join(",")
        );
      }
      if (refusedInstructions.length > 0) {
        console.log(
          "WARNING: the following instructions were refused: " +
            refusedInstructions.join(",")
        );
      }
      console.log(
        `The last set of instructions given were ${input
          .toUpperCase()
          .split("")
          .join(",")}.`
      );
      driveAround();
    }
  );
}
