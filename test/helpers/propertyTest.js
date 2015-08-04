import assert from 'assert';
import * as properties from '../../src/properties';

export default function(name, opts) {
  describe(name, function() {
    const {
      transformableValue,
      transformableProps,
      transformedValue,
      shortableValue,
      shortableProps
    } = opts;

    const PropertyClass = properties[name];
    const transformedProp = new PropertyClass(transformableValue, transformableProps);
    const shortedProp = new PropertyClass(transformedValue, shortableProps);

    describe('#transformedValue()', function() {
      it('should transform a transformable value', function() {
        assert.equal(transformedProp.transformedValue(), transformedValue);
      });

      it('should not transform a shorted value', function() {
        assert.equal(shortedProp.transformedValue(), transformedValue);
      });
    });
  });
}
