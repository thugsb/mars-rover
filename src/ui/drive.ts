import { rl, d } from "../index";
import { moveRover } from "../maneuver";
import { drawPlateau } from "./plateau";

export function driveAround() {
  rl.question(
    "What instructions will you give to rover now? ",
    (input: string) => {
      const invalidInstructions: string[] = [];
      for (let i = 0; i < input.length; i++) {
        const instr = input.charAt(i).toUpperCase();
        if (instr === "M" || instr === "R" || instr === "L") {
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
      console.log(`The last set of instructions given were ${input}.`);
      driveAround();
    }
  );
}
