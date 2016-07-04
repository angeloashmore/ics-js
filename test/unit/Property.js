/* eslint-env mocha */

import assert from 'assert'
import Property from '../../src/Property'

const value = 'value'
const prop = new Property(value)
const propParameters = {
  KEY1: 'VALUE1',
  KEY2: 'VALUE2'
}
const propWithParameters = new Property(value, propParameters)
const propWithoutValue = new Property()

describe('Property', () => {
  describe('#constructor()', () => {
    it('should create a new instance of Property', () => {
      assert.equal(prop instanceof Property, true)
    })

    it('should have defined `value` and `skipTransformer` instance properties', () => {
      assert.notStrictEqual(typeof prop.value, 'undefined')
      assert.notStrictEqual(typeof prop.skipTransformer, 'undefined')
    })
  })

  describe('#shortTransformer()', () => {
    it('should return true', () => {
      assert.equal(prop.shortTransformer(), true)
    })
  })

  describe('#transformer()', () => {
    it('should return value untouched', () => {
      assert.equal(prop.transformer(), value)
    })
  })

  describe('#transformedValue()', () => {
    it('should return value untouched', () => {
      assert.equal(prop.transformer(), value)
    })
  })

  describe('#transformedParameters()', () => {
    it('should return a string', () => {
      assert.equal(typeof prop.transformedParameters(), 'string')
    })

    describe('with no props', () => {
      it('should return an empty string', () => {
        assert.equal(prop.transformedParameters(), '')
      })
    })

    describe('with props', () => {
      it('should return a semicolon separated string', () => {
        assert.equal(propWithParameters.transformedParameters(), 'KEY1=VALUE1;KEY2=VALUE2')
      })
    })
  })

  describe('toString()', () => {
    it('should return a string', () => {
      assert.equal(typeof prop.toString(), 'string')
    })

    it('should be properly formatted', () => {
      const regex = /.*:{1}.*/

      assert.equal(regex.test(prop.toString()), true)
    })

    it('should not have a trailing semicolon if no value is set', () => {
      assert.equal(propWithoutValue.toString().endsWith(':'), false)
    })
  })
})
