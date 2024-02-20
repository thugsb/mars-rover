import { RoverPosition } from "./setup.types";
import { generateRectMap, roverLandsOnPlateau } from "./setup";
import { moveRover } from "./maneuver";

export type RoverCommands = {
  plateau: {
    x: number;
    y: number;
  };
  rovers: Array<PositionAndInstructions>;
};

type PositionAndInstructions = {
  position: RoverPosition;
  instructions: string;
};

export function landAndCommandRovers(
  data: RoverCommands
): Array<RoverPosition | string> {
  const map = generateRectMap(data.plateau.x, data.plateau.y);
  const newPositions: Array<RoverPosition | string> = data.rovers.map(
    (rover) => {
      if (roverLandsOnPlateau(map, rover.position)) {
        return moveRover(rover.instructions, rover.position, map);
      } else {
        return "Rover failed to land";
      }
    }
  );
  return newPositions;
}
