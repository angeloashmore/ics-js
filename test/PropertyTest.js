import assert from "assert";
import ICS from "../ics-js/ICS";

const propKey = "dtstart";
const propValue = "1991-03-07 07:00:00 AM";
const propValueAfterTransformer = "19910307T070000";
const prop = new ICS.Property(propKey, propValue);

const invalidPropKey = "-invalid1-";

const propKeyWOTransformer = "LOCATION";
const propValueWOTransformer = "Location";
const propWOTransformer = new ICS.Property(propKeyWOTransformer, propValueWOTransformer);

describe("Property", function() {
  describe("#constructor()", function() {
    it("should create a new instance of ICS.Property", function() {
      assert.equal(prop instanceof ICS.Property, true);
    });

    it("should have defined `key` and `value` instance properties", function() {
      assert.equal(prop.key != undefined, true);
      assert.equal(prop.value != undefined, true);
    });

    it("should throw a TypeError if `key` or `value` is undefined", function() {
      assert.throws(() => new ICS.Property(propKey), TypeError);
      assert.throws(() => new ICS.Property(), TypeError);
    });
  });

  describe("#key", function() {
    it("should convert a lowercase `key` to uppercase", function() {
      assert.equal(prop.key, propKey.toUpperCase());
    });

    it("should throw a TypeError if passed an invalid `key`", function() {
      assert.throws(() => new ICS.Property(invalidPropKey, propValue), TypeError);
    });
  });

  describe("#value", function() {
    describe("if transformer is available", function() {
      it("should transform the value", function() {
        assert.equal(prop.value, propValueAfterTransformer);
      });
    });

    describe("if transformer is not available", function() {
      it("should leave the value untouched", function() {
        assert.equal(propWOTransformer.value, propValueWOTransformer);
      });
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
