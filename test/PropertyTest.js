import assert from "assert";
import ICS from "../ics-js/ICS";

const validName = "DSTART";
const invalidName = "-DStart-";
const value = "value";
const prop = new ICS.Property(value);

describe("Property", function() {
  describe("::keyRegex", function() {
    const keyRegex = ICS.Property.keyRegex;

    it("should return false for keys containing invalid characters", function() {
      assert.equal(keyRegex.test(invalidName), false);
    });

    it("should return true for a valid key", function() {
      assert.equal(keyRegex.test(validName), true);
    });
  });

  describe("#constructor()", function() {
    it("should create a new instance of ICS.Property", function() {
      assert.equal(prop instanceof ICS.Property, true);
    });

    it("should have defined `value` and `skipTransformer` instance properties", function() {
      assert.equal(prop.value != undefined, true);
      assert.equal(prop.skipTransformer != undefined, true);
    });
  });

  describe("#shortTransformer()", function() {
    it("should return true", function() {
      assert.equal(prop.shortTransformer(), true);
    });
  });

  describe("#transformer()", function() {
    it("should return value untouched", function() {
      assert.equal(prop.transformer(), value);
    });
  });

  describe("#transformedValue()", function() {
    it("should return value untouched", function() {
      assert.equal(prop.transformer(), value);
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
