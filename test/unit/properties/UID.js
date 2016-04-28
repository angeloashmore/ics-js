/* eslint-env mocha */

import assert from 'assert'
import propertyTest from '../../helpers/propertyTest'
import { UID } from '../../../src/properties'

propertyTest('UID', {
  transformableValue: '123',
  transformedValue: '123'
})

describe('UID', () => {
  it('should generate a GUID if no value is provided', () => {
    const prop = new UID()

    assert.equal(prop.transformedValue().length, 36)
  })
})
