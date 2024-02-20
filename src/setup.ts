import { Map, RoverPosition } from "./setup.types";

export function generateRectMap(x: number, y: number): Map {
  const output: string[] = [];
  let row = "";
  for (let i = 0; i < x; i++) {
    row += "·";
  }
  for (let i = 0; i < y; i++) {
    output.push(row);
  }
  return output;
}

export function roverLandsOnPlateau(
  map: Map,
  { x, y, d }: RoverPosition
): boolean {
  if (x > map[0].length || y >= map.length || x < 0 || y < 0) {
    return false;
  }
  if (map[y].charAt(x) === "·") {
    return true;
  }
  return false;
}
