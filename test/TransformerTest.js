import assert from "assert";
import ICS from "../ics-js/ICS";

const transformer = ICS.transformers.DTSTART;
const input = "1991-03-07 07:00:00 AM";
const inputTransformed = "19910307T070000";

describe("Transformer", function() {
  describe("::execute()", function() {
    it("should transform the input", function() {
      assert.equal(transformer.execute(input), inputTransformed);
    });
  });
});
