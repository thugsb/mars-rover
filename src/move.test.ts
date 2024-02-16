import { generateRectMap } from "./setup";
import { terrainIsNavigable } from "./move";

const landingPlateau = generateRectMap(6, 4);
const rockyPlateau = ["···x", "·x·x"];

describe("Make sure the rover only moves if it is safe", () => {
  it("should throw an error if the move is off the edge of the plateau", () => {
    expect(terrainIsNavigable(7, 4, landingPlateau)).toBe(false);
  });
  it("should allow movement within the plateau", () => {
    expect(terrainIsNavigable(3, 2, landingPlateau)).toBe(true);
  });
  it("should recognise navigable terrain as ·", () => {
    expect(terrainIsNavigable(1, 0, rockyPlateau)).toBe(true);
    expect(terrainIsNavigable(1, 1, rockyPlateau)).toBe(false);
  });
});
