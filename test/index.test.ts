import { describe, expect, it } from "bun:test";
import { app } from "../src";

// testing tipis tipis
describe("Elysia", () => {
  it("returns a response", async () => {
    const response = await app
      .handle(new Request("http://localhost/hi"))
      .then((res) => res.text());

    expect(response).toBe("hi");
  });

  it("square root result", async () => {
    const response = await app
      .handle(new Request("http://localhost/sqrt/6"))
      .then((res) => res.text());

    expect(response).toBe("36");
  });
});
