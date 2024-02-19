import { getWidth } from "./ui/plateau";

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

export const rl = readline.createInterface({ input, output });

type marsData = {
  pWidth: number;
  pLength: number;
  map: string[];
};

export let d: marsData = {
  pWidth: 0,
  pLength: 0,
  map: [""],
};

const pWidth = goToMars();

function goToMars(): void {
  console.log("Welcome to Mars Central.");
  console.log("We'll be landing on a rectangular plateau.");
  getWidth();
}
