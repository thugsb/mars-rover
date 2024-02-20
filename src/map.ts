import { Map, RoverPosition } from "./setup.types";
const clc = require("cli-color");

export function generateRoverMap(
  plateauMap: Map,
  { x, y, d }: RoverPosition
): Map {
  let arrow = "?";
  switch (d) {
    case "N":
      arrow = "↑";
      break;
    case "S":
      arrow = "↓";
      break;
    case "E":
      arrow = "→";
      break;
    case "W":
      arrow = "←";
      break;

    default:
      break;
  }
  const outputMap = [...plateauMap];
  const row = outputMap[y];
  const newRow = row.substring(0, x) + arrow + row.substring(x + 1);
  outputMap[y] = newRow;
  return outputMap;
}
