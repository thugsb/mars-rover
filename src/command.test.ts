import { landAndCommandRovers } from "./command";
import { RoverCommands } from "./command";
import { RoverPosition } from "./setup.types";

describe("A function that can handle multiple rovers", () => {
  it("should be able to handle multiple rovers", () => {
    const data: RoverCommands = {
      plateau: {
        x: 12,
        y: 8,
      },
      rovers: [
        {
          position: { x: 5, y: 3, d: "N" } as RoverPosition,
          instructions: "mmlmmlm",
        },
        {
          position: { x: 2, y: 6, d: "E" } as RoverPosition,
          instructions: "mrmmmlm",
        },
      ],
    };
    expect(landAndCommandRovers(data)).toEqual([
      { x: 3, y: 4, d: "S" },
      { x: 4, y: 3, d: "E" },
    ]);
  });

  it("should let us know if a rover fails to land", () => {
    const data: RoverCommands = {
      plateau: {
        x: 12,
        y: 8,
      },
      rovers: [
        {
          position: { x: 15, y: 3, d: "N" } as RoverPosition,
          instructions: "mmlmmlm",
        },
        {
          position: { x: 2, y: 8, d: "E" } as RoverPosition,
          instructions: "mrmmmlm",
        },
      ],
    };
    expect(landAndCommandRovers(data)).toEqual([
      "Rover failed to land",
      "Rover failed to land",
    ]);
  });

  it("should handle a single rover that is directed to leave the plateau (and refuses)", () => {
    const data: RoverCommands = {
      plateau: {
        x: 12,
        y: 8,
      },
      rovers: [
        {
          position: { x: 2, y: 6, d: "E" } as RoverPosition,
          instructions: "mlmmmlm",
        },
      ],
    };
    expect(landAndCommandRovers(data)).toEqual([{ x: 2, y: 7, d: "W" }]);
  });
});
