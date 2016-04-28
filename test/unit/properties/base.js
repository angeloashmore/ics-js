/* eslint-env mocha */

import assert from 'assert'
import Property from '../../../src/Property'
import { base } from '../../../src/properties'

describe('base', () => {
  const name = 'NAME'
  const value = 'value'
  const PropClass = base(name)
  const prop = new PropClass(value)

  describe('base()', () => {
    it('should return an extension of Property with the name as the propName', () => {
      assert.equal(new PropClass() instanceof Property, true)
      assert.equal(PropClass.propName, name)
    })
  })

  describe('#transformedValue()', () => {
    it('should pass the value without transformations', () => {
      assert.equal(prop.transformedValue(), value)
    })
  })
})
