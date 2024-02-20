import { generateRoverMap } from "./map";
import { generateRectMap } from "./setup";
import { RoverPosition } from "./setup.types";

const roverCoords: RoverPosition = { x: 3, y: 2, d: "E" };
const landingPlateau = generateRectMap(6, 4);

describe("Drawing a map", () => {
  it("should output a map with the rover on it shown by directional arrows", () => {
    expect(generateRoverMap(landingPlateau, roverCoords)).toEqual([
      "······",
      "······",
      "···→··",
      "······",
    ]);
  });
});
