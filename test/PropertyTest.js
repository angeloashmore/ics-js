import assert from "assert";
import ICS from "../ics-js/ICS";

const propKey = "key";
const propValue = "value";
const invalidPropKey = "-invalid1-";
const prop = new ICS.Property(propKey, propValue);

describe("Property", function() {
  describe("#constructor()", function() {
    it("should create a new instance of ICS.Property", function() {
      assert.equal(prop instanceof ICS.Property, true);
    });

    it("should have defined `key` and `value` instance properties", function() {
      assert.equal(prop.key != undefined, true);
      assert.equal(prop.value != undefined, true);
    });

    it("should convert a lowercase `key` to uppercase", function() {
      assert.equal(prop.key, propKey.toUpperCase());
    });

    it("should throw a TypeError if passed an invalid `key`", function() {
      assert.throws(() => new ICS.Property(invalidPropKey, propValue), TypeError);
    });
  });

  describe("toString()", function() {
    it("should return a string", function() {
      assert.equal(typeof prop.toString(), "string");
    });

    it("should be properly formatted", function() {
      const regex = /.*:{1}.*/;
      assert.equal(regex.test(prop.toString()), true);
    });
  });
});
