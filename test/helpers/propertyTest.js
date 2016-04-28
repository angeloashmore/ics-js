/* eslint-env mocha */

import assert from 'assert'
import * as properties from '../../src/properties'

export default (name, opts) => {
  describe(name, () => {
    const {
      transformableValue,
      transformableProps,
      transformedValue,
      shortableProps
    } = opts

    const PropertyClass = properties[name] // eslint-disable-line import/namespace
    const transformedProp = new PropertyClass(transformableValue, transformableProps)
    const shortedProp = new PropertyClass(transformedValue, shortableProps)

    describe('#transformedValue()', () => {
      it('should transform a transformable value', () => {
        assert.equal(transformedProp.transformedValue(), transformedValue)
      })

      it('should not transform a shorted value', () => {
        assert.equal(shortedProp.transformedValue(), transformedValue)
      })
    })
  })
}
