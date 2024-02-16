import { generateRectMap, roverLandsOnPlateau } from "./setup";
import { RoverPosition } from "./setup.types";

describe("Output a rectangular plateau", () => {
  it("should return an array of strings", () => {
    expect(generateRectMap(2, 3)).toEqual(["··", "··", "··"]);
  });
});

describe("Check whether a Rover lands safely", () => {
  const map2x3 = ["··", "··", "··"];

  it("should be false if the plateau is missed entirely", () => {
    const missedLanding: RoverPosition = { x: 1, y: 4, d: "N" };
    expect(roverLandsOnPlateau(map2x3, missedLanding)).toBe(false);
    missedLanding.y = -1;
    expect(roverLandsOnPlateau(map2x3, missedLanding)).toBe(false);
    missedLanding.y = 1;
    missedLanding.x = 6;
    expect(roverLandsOnPlateau(map2x3, missedLanding)).toBe(false);
    missedLanding.x = -1;
    expect(roverLandsOnPlateau(map2x3, missedLanding)).toBe(false);
  });
  it("should be true if the rover lands on safe ground", () => {
    const safeLanding: RoverPosition = { x: 1, y: 0, d: "N" };
    expect(roverLandsOnPlateau(map2x3, safeLanding)).toBe(true);
    safeLanding.y = 2;
    expect(roverLandsOnPlateau(map2x3, safeLanding)).toBe(true);
  });
  const rockyPlateau = ["·x·", "·x·", "·x·"];
  it("should be false if the rover lands on unsafe ground", () => {
    const safeLanding: RoverPosition = { x: 1, y: 0, d: "N" };
    expect(roverLandsOnPlateau(rockyPlateau, safeLanding)).toBe(false);
    safeLanding.y = 2;
    expect(roverLandsOnPlateau(rockyPlateau, safeLanding)).toBe(false);
  });
});
