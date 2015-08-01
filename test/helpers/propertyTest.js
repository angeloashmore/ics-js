import assert from "assert";
import * as properties from "../../src/properties";

export default function(name, opts) {
  describe(name, function() {
    const { transformableValue, transformedValue, shortableValue } = opts;

    const propertyClass = properties[name];
    const transformedProp = new propertyClass(transformableValue);
    const shortedProp = new propertyClass(transformedValue);

    describe("#transformedValue()", function() {
      it("should transform a transformable value", function() {
        assert.equal(transformedProp.transformedValue(), transformedValue);
      });

      it("should not transform a shorted value", function() {
        assert.equal(shortedProp.transformedValue(), transformedValue);
      });
    });
  });
}
