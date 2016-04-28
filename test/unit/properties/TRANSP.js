/* eslint-env mocha */

import assert from 'assert'
import propertyTest from '../../helpers/propertyTest'
import {TRANSP} from '../../../src/properties'

propertyTest('TRANSP', {
  transformableValue: true,
  transformedValue: 'TRANSPARENT'
})

describe('TRANSP', () => {
  it('should return OPAQUE if false', () => {
    const prop = new TRANSP(false)

    assert.equal(prop.transformedValue(), 'OPAQUE')
  })
})
