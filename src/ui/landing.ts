import { d, rl } from "../index";
import { roverLandsOnPlateau } from "../setup";
import { drawPlateau } from "./plateau";

export function landTheRover(): void {
  console.log("We've identified the plateau where we'll land.");
  console.log("Now we need to know the target coordinates.");
  getX();
}

function getX(): void {
  rl.question("What's the x landing coordinate?", (input: string) => {
    const x = parseInt(input);
    if (Number.isNaN(x)) {
      console.log("x must be a number!");
      getX();
    } else if (x < 0 || x > d.pWidth) {
      console.log("That entirely misses the plateau!");
      getX();
    } else {
      console.log(`Got it: ${x}.`);
      d.position.x = x;
      getY();
    }
  });
}

function getY(): void {
  rl.question("What's the y landing coordinate?", (input: string) => {
    const y = parseInt(input);
    if (Number.isNaN(y)) {
      console.log("y must be a number!");
      getY();
    } else if (y < 0 || y > d.pLength) {
      console.log("That entirely misses the plateau!");
      getY();
    } else {
      console.log(`Got it: ${y}.`);
      d.position.y = y;
      getD();
    }
  });
}
function getD(): void {
  rl.question(
    "Which direction will it be facing? N,S,E or W?",
    (input: string) => {
      const i = input.toUpperCase();
      if (i === "N" || i === "S" || i === "E" || i === "W") {
        d.position.d = i;
        console.log(`Facing: ${i}.`);
        if (roverLandsOnPlateau(d.map, d.position)) {
          drawPlateau(true);
        } else {
          console.log(
            "Something blocks the landing. Where else do you want to land?"
          );
          getD();
        }
      } else {
        console.log("Rovers can only face in a cardinal direction.");
        getD();
      }
    }
  );
}
