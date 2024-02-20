import { getWidth } from "./ui/plateau";
import { RoverPosition } from "./setup.types";

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

export const rl = readline.createInterface({ input, output });

type marsData = {
  pWidth: number;
  pLength: number;
  map: Array<string>;
  position: RoverPosition;
  lastInstructions: string;
  allInstructions: string;
};

export let d: marsData = {
  pWidth: 0,
  pLength: 0,
  map: [""],
  position: { x: 0, y: 0, d: "E" },
  lastInstructions: "",
  allInstructions: "",
};

const pWidth = goToMars();

function goToMars(): void {
  console.log("Welcome to Mars Central.");
  console.log("We'll be landing on a rectangular plateau.");
  getWidth();
}
