import loading from "../ts/methods/loading";

test("Checking loading text", () => {
  expect(loading("Loading....")).toBe("Loading....");
});
