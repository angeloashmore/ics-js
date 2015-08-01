import assert from 'assert';
import propertyTest from '../../helpers/propertyTest';
import { TRANSP } from '../../../src/properties';

propertyTest('TRANSP', {
  transformableValue: true,
  transformedValue: 'TRANSPARENT',
});

describe('UID', function() {
  it('should return OPAQUE if false', function() {
    const prop = new TRANSP(false);
    assert.equal(prop.transformedValue(), 'OPAQUE');
  });
});
