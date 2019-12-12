const Hobbits = require("./hobbitsModel.js");
const db = require("../data/dbConfig.js");

describe("Hobbits model", () => {
  describe("insert()", () => {
    beforeEach(async () => {
      await db("hobbits").truncate();
    });
    it("should insert 2 hobbits", async () => {
      await Hobbits.insert({ name: "gaffer" });
      await Hobbits.insert({ name: "sam" });

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });
    it("should return the hobbit that is inserted", async () => {
      let hobbit = await Hobbits.insert({ name: "gaffer" });
      expect(hobbit.name).toBe("gaffer");

      hobbit = await Hobbits.insert({ name: "sam" });
      expect(hobbit.name).toBe("sam");
    });
  });
});
