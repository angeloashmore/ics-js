/* eslint-env mocha */

import assert from 'assert'
import * as ICS from '../../src'
import Component from '../../src/Component'
import { VERSION } from '../../src/properties'
import {
  IncompatiblePlatformError,
  InvalidComponentError,
  InvalidProvidedComponentError,
  InvalidProvidedPropError,
  ValidationError
} from '../../src/errors'

const component = new ICS.VCALENDAR()
const prop = new VERSION(2)
const component2 = new ICS.VEVENT()

describe('Component', () => {
  beforeEach(() => {
    component.reset()
  })

  describe('#constructor()', () => {
    it('should create a new instance of Component', () => {
      assert.equal(component instanceof Component, true)
    })

    it('should have an empty `internalProps` instance property', () => {
      assert.deepEqual(component.internalProps, [])
    })

    it('should have an empty `internalComponents` instance property', () => {
      assert.deepEqual(component.internalComponents, [])
    })
  })

  describe('#props()', () => {
    it('should not be mutable', () => {
      assert.throws(() => {
        component.props().push(prop)
      }, TypeError)
    })

    describe('with no props', () => {
      it('should return an empty array', () => {
        assert.deepEqual(component.props(), [])
      })
    })

    describe('with some props', () => {
      it('should return an array with added Property objects', () => {
        component.addProp('VERSION', 2)
        assert.deepEqual(component.props(), [prop])
      })
    })
  })

  describe('#propNames()', () => {
    describe('with no props', () => {
      it('should return an empty array', () => {
        assert.deepEqual(component.propNames(), [])
      })
    })

    describe('with some props', () => {
      it('should return an array with added Property objects\' names', () => {
        component.addProp('VERSION', 2)
        assert.deepEqual(component.propNames(), [prop.constructor.propName])
      })
    })
  })

  describe('#addProp()', () => {
    it('should add a Property', () => {
      component.addProp('VERSION', 2)
      assert.deepEqual(component.internalProps, [prop])
    })

    it('should throw an InvalidProvidedPropError if passed an invalid (for the component) prop', () => {
      assert.throws(() => {
        component.addProp('DTSTART', new Date())
      }, InvalidProvidedPropError)
    })

    it('should throw an Error if passed a prop against its requirement validations', () => {
      component.addProp('VERSION', 2)
      assert.throws(() => {
        component.addProp('VERSION', 2)
      }, ValidationError)
    })
  })

  describe('#components()', () => {
    it('should not be mutable', () => {
      assert.throws(() => {
        component.components().push(component2)
      }, TypeError)
    })

    describe('with no components', () => {
      it('should return an empty array', () => {
        assert.deepEqual(component.components(), [])
      })
    })

    describe('with some components', () => {
      it('should return an array with added Component objects', () => {
        component.addComponent(component2)
        assert.deepEqual(component.components(), [component2])
      })
    })
  })

  describe('#componentNames()', () => {
    describe('with no components', () => {
      it('should return an empty array', () => {
        assert.deepEqual(component.componentNames(), [])
      })
    })

    describe('with some components', () => {
      it('should return an array with added Component objects\' names', () => {
        component.addComponent(component2)
        assert.deepEqual(component.componentNames(), [component2.constructor.componentName])
      })
    })
  })

  describe('#addComponent()', () => {
    it('should add a Component', () => {
      component.addComponent(component2)
      assert.deepEqual(component.internalComponents, [component2])
    })

    it('should throw a TypeError if not passed an instance of Component', () => {
      assert.throws(() => {
        component.addComponent('component')
      }, TypeError)
    })

    it('should throw an InvalidProvidedComponentError if passed an invalid (for the component) component', () => {
      const invalidComponent = new ICS.VCALENDAR()

      assert.throws(() => {
        component.addComponent(invalidComponent)
      }, InvalidProvidedComponentError)
    })
  })

  describe('#reset()', () => {
    it('should remove all props and components', () => {
      component.addProp('VERSION', 2)
      component.addComponent(component2)
      component.reset()
      assert.deepEqual(component.internalProps, [])
      assert.deepEqual(component.internalComponents, [])
    })
  })

  describe('#validateRequired()', () => {
    it('should throw an InvalidComponentError if missing required props', () => {
      component.addProp('VERSION', 2)
      assert.throws(() => {
        component.validateRequired()
      }, InvalidComponentError)
    })

    it('should return true if all required props are present', () => {
      component.addProp('VERSION', 2)
      component.addProp('PRODID', 'XYZ Corp')
      assert.equal(component.validateRequired(), true)
    })
  })

  describe('#toString()', () => {
    beforeEach(() => {
      component.addProp('VERSION', 2)
      component.addProp('PRODID', 'XYZ Corp')
    })

    it('should return a string', () => {
      assert.equal(typeof component.toString(), 'string')
    })

    it('should begin and end with prefix and suffix', () => {
      const string = component.toString()
      const separator = component.constructor.separator
      const splitString = string.split(separator)

      assert.equal(string.startsWith('BEGIN:'), true)
      assert.equal(splitString[splitString.length - 1].startsWith('END:'), true)
    })
  })

  describe('#toBlob()', () => {
    beforeEach(() => {
      component.addProp('VERSION', 2)
      component.addProp('PRODID', 'XYZ Corp')
    })

    it('should throw an IncompatiblePlatformError', () => {
      assert.throws(() => {
        component.toBlob()
      }, IncompatiblePlatformError)
    })
  })

  describe('toBase64()', () => {
    beforeEach(() => {
      component.addProp('VERSION', 2)
      component.addProp('PRODID', 'XYZ Corp')
    })

    it('should return a string', () => {
      assert.equal(typeof component.toBase64(), 'string')
    })

    it('should return a base64 encoded representation', () => {
      const buffer = new Buffer(component.toString())
      assert.equal(component.toBase64(), buffer.toString('base64'))
    })
  })
})
