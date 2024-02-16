import { generateRectMap } from "./setup";
import { RoverPosition } from "./setup.types";
import { moveRover } from "./maneuver";

const landingCoords: RoverPosition = { x: 3, y: 2, d: "E" };
const landingPlateau = generateRectMap(6, 4);

describe("Make sure instructions are clean", () => {
  it("should throw an error if the instructions contain anything other than LRM", () => {
    expect(() => {
      moveRover("X", landingCoords, landingPlateau);
    }).toThrow("Unknown instructions");
  });
  it("should throw an error if the instructions are blank", () => {
    expect(() => {
      moveRover("", landingCoords, landingPlateau);
    }).toThrow("Unknown instructions");
  });
});

describe("Turning the Rover", () => {
  it("should turn anticlockwise when given a L instruction", () => {
    expect(moveRover("L", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 2,
      d: "N",
    });
    expect(moveRover("LL", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 2,
      d: "W",
    });
    expect(moveRover("LLL", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 2,
      d: "S",
    });
    expect(moveRover("LLLL", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 2,
      d: "E",
    });
  });
  it("should turn clockwise when given a R instruction", () => {
    expect(moveRover("R", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 2,
      d: "S",
    });
    expect(moveRover("RR", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 2,
      d: "W",
    });
    expect(moveRover("RRR", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 2,
      d: "N",
    });
    expect(moveRover("RRRR", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 2,
      d: "E",
    });
  });
  it("should increase or decrease the x and y axis when moving", () => {
    expect(moveRover("M", landingCoords, landingPlateau)).toEqual({
      x: 4,
      y: 2,
      d: "E",
    });
    expect(moveRover("LLM", landingCoords, landingPlateau)).toEqual({
      x: 2,
      y: 2,
      d: "W",
    });
    expect(moveRover("LM", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 3,
      d: "N",
    });
    expect(moveRover("RM", landingCoords, landingPlateau)).toEqual({
      x: 3,
      y: 1,
      d: "S",
    });
  });
});
