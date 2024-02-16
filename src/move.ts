import { Map, RoverPosition } from "./setup.types";

export function getNewPosition({ x, y, d }: RoverPosition): RoverPosition {
  const newPos = { x: x, y: y, d: d };
  switch (d) {
    case "E":
      newPos.x++;
      break;
    case "W":
      newPos.x--;
      break;
    case "N":
      newPos.y++;
      break;
    case "S":
      newPos.y--;
      break;
  }
  return newPos;
}

export function terrainIsNavigable(x: number, y: number, map: Map): boolean {
  if (y > map.length || x > map[0].length || y < 0 || x < 0) {
    return false;
  }
  if (map[y].charAt(x) === "·") {
    return true;
  }
  return false;
}
