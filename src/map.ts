import { Map, RoverPosition } from "./setup.types";

export function generateRoverMap(
  plateauMap: Map,
  { x, y, d }: RoverPosition
): Map {
  const outputMap = [...plateauMap];
  const row = outputMap[y];
  const newRow = row.substring(0, x) + d + row.substring(x + 1);
  outputMap[y] = newRow;
  return outputMap;
}
