/* eslint max-nested-callbacks:0 */

import assert from 'assert';
import Property from '../../src/Property';

const value = 'value';
const prop = new Property(value);
const propProps = {
  KEY1: 'VALUE1',
  KEY2: 'VALUE2'
};
const propWithProps = new Property(value, propProps);

describe('Property', () => {
  describe('#constructor()', () => {
    it('should create a new instance of Property', () => {
      assert.equal(prop instanceof Property, true);
    });

    it('should have defined `value` and `skipTransformer` instance properties', () => {
      assert.notStrictEqual(typeof prop.value, 'undefined');
      assert.notStrictEqual(typeof prop.skipTransformer, 'undefined');
    });
  });

  describe('#shortTransformer()', () => {
    it('should return true', () => {
      assert.equal(prop.shortTransformer(), true);
    });
  });

  describe('#transformer()', () => {
    it('should return value untouched', () => {
      assert.equal(prop.transformer(), value);
    });
  });

  describe('#transformedValue()', () => {
    it('should return value untouched', () => {
      assert.equal(prop.transformer(), value);
    });
  });

  describe('#transformedProps()', () => {
    it('should return a string', () => {
      assert.equal(typeof prop.transformedProps(), 'string');
    });

    describe('with no props', () => {
      it('should return an empty string', () => {
        assert.equal(prop.transformedProps(), '');
      });
    });

    describe('with props', () => {
      it('should return a semicolon separated string', () => {
        assert.equal(propWithProps.transformedProps(), 'KEY1=VALUE1;KEY2=VALUE2');
      });
    });
  });

  describe('toString()', () => {
    it('should return a string', () => {
      assert.equal(typeof prop.toString(), 'string');
    });

    it('should be properly formatted', () => {
      const regex = /.*:{1}.*/;

      assert.equal(regex.test(prop.toString()), true);
    });
  });
});
