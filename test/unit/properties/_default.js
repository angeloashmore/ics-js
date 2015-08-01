import assert from 'assert';
import Property from '../../../src/Property';
import { _default } from '../../../src/properties';

describe('_default', function() {
  const name = 'NAME';
  const value = 'value';
  const PropClass = _default(name);
  const prop = new PropClass(value);

  describe('_default()', function() {
    it('should return an extension of Property with the name as the propName', function() {
      assert.equal(new PropClass() instanceof Property, true);
      assert.equal(PropClass.propName, name);
    });
  });

  describe('#transformedValue()', function() {
    it('should pass the value without transformations', function() {
      assert.equal(prop.transformedValue(), value);
    });
  });
});
