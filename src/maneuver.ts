import { Direction, RoverPosition, Map } from "./setup.types";
import { getNewPosition, terrainIsNavigable } from "./move";

export function moveRover(
  instructions: string,
  position: RoverPosition,
  map: Map
): RoverPosition {
  if (!RegExp("^[LRM]+$", "gi").test(instructions)) {
    throw new Error("Unknown instructions");
  }
  let newRoverPosition = { x: position.x, y: position.y, d: position.d };
  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions.charAt(i).toUpperCase();
    if (instruction === "L") {
      newRoverPosition.d = turnLeft(newRoverPosition.d);
    }
    if (instruction === "R") {
      newRoverPosition.d = turnRight(newRoverPosition.d);
    }
    if (instruction === "M") {
      const targetCoords = getNewPosition(position);
      if (terrainIsNavigable(targetCoords.x, targetCoords.y, map)) {
        newRoverPosition = getNewPosition(newRoverPosition);
      }
    }
  }
  return newRoverPosition;
}

function turnLeft(dir: Direction): Direction {
  switch (dir) {
    case "E":
      return "N";
      break;
    case "N":
      return "W";
      break;
    case "W":
      return "S";
      break;
    case "S":
      return "E";
      break;
  }
}
function turnRight(dir: Direction): Direction {
  switch (dir) {
    case "E":
      return "S";
      break;
    case "S":
      return "W";
      break;
    case "W":
      return "N";
      break;
    case "N":
      return "E";
      break;
  }
}
