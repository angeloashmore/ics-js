import assert from "assert";
import ICS from "../ics-js/ICS";

const propKey = "dtstart";
const propValue = "1991-03-07 07:00:00 AM";
const propValueAfterTransformer = "19910307T070000";
const prop = new ICS.Property(propKey, propValue);

const propSkipTransformer = new ICS.Property(propKey, propValue, true);

const invalidPropKey = "-invalid1-";

const propKeyWOTransformer = "LOCATION";
const propValueWOTransformer = "Location";
const propWOTransformer = new ICS.Property(propKeyWOTransformer, propValueWOTransformer);

const DTSTARTTransformer = ICS.transformers.DTSTART;
const DefaultTransformer = ICS.transformers.Default;

describe("Property", function() {
  describe("::keyRegex", function() {
    const keyRegex = ICS.Property.keyRegex;

    it("should return false for keys containing lowercase characters", function() {
      assert.equal(keyRegex.test(propKey), false);
    });

    it("should return false for keys containing invalid characters", function() {
      assert.equal(keyRegex.test(invalidPropKey), false);
    });

    it("should return true for a valid key", function() {
      assert.equal(keyRegex.test(propKeyWOTransformer), true);
    });
  });

  describe("::transformerFor()", function() {
    it("should return the correct transformer for the key", function() {
      assert.equal(ICS.Property.transformerFor(prop.key), DTSTARTTransformer);
    });

    it("should return the default transformer if one does not exist for the key", function() {
      assert.equal(ICS.Property.transformerFor(propKeyWOTransformer), DefaultTransformer);
    });
  });

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

      it("should not transform the value if `skipTransformer` is true", function() {
        assert.equal(propSkipTransformer.value, propValue);
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
