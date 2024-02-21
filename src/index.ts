import { getWidth } from "./ui/plateau";
import { RoverPosition } from "./setup.types";

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

export const rl = readline.createInterface({ input, output });

type MarsData = {
  pWidth: number;
  pLength: number;
  map: Array<string>;
  position: RoverPosition;
};

export let d: MarsData = {
  pWidth: 0,
  pLength: 0,
  map: [""],
  position: { x: 0, y: 0, d: "E" },
};

goToMars();

function goToMars(): void {
  console.log("Welcome to Mars Central.");
  console.log("We'll be landing on a rectangular plateau.");
  getWidth();
}
