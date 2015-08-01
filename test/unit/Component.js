import assert from 'assert';
import ICS from '../../src/ICS';
import { VERSION } from '../../src/properties';
import {
  InvalidComponentError,
  InvalidProvidedComponentError,
  InvalidProvidedPropError,
  ValidationError
} from '../../src/errors';

const component = new ICS.VCALENDAR();
const prop = new VERSION(2);
const component2 = new ICS.VEVENT();

describe('Component', function() {
  beforeEach(function() {
    component.reset();
  });

  describe('#constructor()', function() {
    it('should create a new instance of Component', function() {
      assert.equal(component instanceof ICS.Component, true);
    });

    it('should have an empty `_props` instance property', function() {
      assert.deepEqual(component._props, []);
    });

    it('should have an empty `_components` instance property', function() {
      assert.deepEqual(component._components, []);
    });
  });

  describe('#props()', function() {
    it('should not be mutable', function() {
      assert.throws(() => component.props().push(prop), TypeError);
    });

    describe('with no props', function() {
      it('should return an empty array', function() {
        assert.deepEqual(component.props(), []);
      });
    });

    describe('with some props', function() {
      it('should return an array with added Property objects', function() {
        component.addProp('VERSION', 2);
        assert.deepEqual(component.props(), [prop]);
      });
    });
  });

  describe('#propNames()', function() {
    describe('with no props', function() {
      it('should return an empty array', function() {
        assert.deepEqual(component.propNames(), []);
      });
    });

    describe('with some props', function() {
      it('should return an array with added Property objects\' names', function() {
        component.addProp('VERSION', 2);
        assert.deepEqual(component.propNames(), [prop.constructor.propName]);
      });
    });
  });

  describe('#addProp()', function() {
    it('should add a Property', function() {
      component.addProp('VERSION', 2);
      assert.deepEqual(component._props, [prop]);
    });

    it('should throw an InvalidProvidedPropError if passed an invalid (for the component) prop', function() {
      assert.throws(() => component.addProp('DTSTART', new Date()), InvalidProvidedPropError);
    });

    it('should throw an Error if passed a prop against its requirement validations', function() {
      component.addProp('VERSION', 2);
      assert.throws(() => component.addProp('VERSION', 2), ValidationError);
    });
  });

  describe('#components()', function() {
    it('should not be mutable', function() {
      assert.throws(() => component.components().push(component2), TypeError);
    });

    describe('with no components', function() {
      it('should return an empty array', function() {
        assert.deepEqual(component.components(), []);
      });
    });

    describe('with some components', function() {
      it('should return an array with added Component objects', function() {
        component.addComponent(component2);
        assert.deepEqual(component.components(), [component2]);
      });
    });
  });

  describe('#componentNames()', function() {
    describe('with no components', function() {
      it('should return an empty array', function() {
        assert.deepEqual(component.componentNames(), []);
      });
    });

    describe('with some components', function() {
      it('should return an array with added Component objects\' names', function() {
        component.addComponent(component2);
        assert.deepEqual(component.componentNames(), [component2.constructor.componentName]);
      });
    });
  });

  describe('#addComponent()', function() {
    it('should add a Component', function() {
      component.addComponent(component2);
      assert.deepEqual(component._components, [component2]);
    });

    it('should throw a TypeError if not passed an instance of Component', function() {
      assert.throws(() => component.addComponent('component'), TypeError);
    });

    it('should throw an InvalidProvidedComponentError if passed an invalid (for the component) component', function() {
      const invalidComponent = new ICS.VCALENDAR();
      assert.throws(() => component.addComponent(invalidComponent), InvalidProvidedComponentError);
    });
  });

  describe('#reset()', function() {
    it('should remove all props and components', function() {
      component.addProp('VERSION', 2);
      component.addComponent(component2);
      component.reset();
      assert.deepEqual(component._props, []);
      assert.deepEqual(component._components, []);
    });
  });

  describe('#validateRequired()', function() {
    it('should throw an InvalidComponentError if missing required props', function() {
      component.addProp('VERSION', 2);
      assert.throws(() => component.validateRequired(), InvalidComponentError);
    });

    it('should return true if all required props are present', function() {
      component.addProp('VERSION', 2);
      component.addProp('PRODID', 'XYZ Corp');
      assert.equal(component.validateRequired(), true);
    });
  });

  describe('#toString()', function() {
    beforeEach(function() {
      component.addProp('VERSION', 2);
      component.addProp('PRODID', 'XYZ Corp');
    });

    it('should return a string', function() {
      assert.equal(typeof component.toString(), 'string');
    });

    it('should begin and end with prefix and suffix', function() {
      const string = component.toString();
      const separator = component.constructor.separator;
      const splitString = string.split(separator);

      assert.equal(string.startsWith('BEGIN:'), true);
      assert.equal(splitString[splitString.length - 1].startsWith('END:'), true);
    });
  });

  // Tests involving Blob skipped since Node/io.js does not support it.

  describe.skip('#toBlob()', function() {
    beforeEach(function() {
      component.addProp('VERSION', 2);
      component.addProp('PRODID', 'XYZ Corp');
    });

    it('should return an instance of Blob', function() {
      assert.equal(component.toBlob() instanceof Blob, true);
    });
  });

  describe.skip('toBase64()', function() {
    beforeEach(function() {
      component.addProp('VERSION', 2);
      component.addProp('PRODID', 'XYZ Corp');
    });

    it('should return a string starting with "data:text/calendar,"', function() {
      const base64 = component.toBase64();

      assert.equal(typeof base64, 'string');
      assert.equal(base64.startsWith('data:text/calendar,'), true);
    });
  });
});
