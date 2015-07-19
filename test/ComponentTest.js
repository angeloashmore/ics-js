import assert from "assert";
import ICS from "../ics-js/ICS";

const component = new ICS.components.VCALENDAR();
const prop = new ICS.properties.VERSION(2);
const component_2 = new ICS.components.VEVENT();

describe("Component", function() {
  beforeEach(function() {
    component.reset();
  });

  describe("#constructor()", function() {
    it("should create a new instance of Component", function() {
      assert.equal(component instanceof ICS.Component, true);
    });

    it("should have an empty `_props` instance property", function() {
      assert.deepEqual(component._props, []);
    });

    it("should have an empty `_components` instance property", function() {
      assert.deepEqual(component._components, []);
    });
  });

  describe("#props()", function() {
    it("should not be mutable", function() {
      assert.throws(() => component.props().push(prop), TypeError);
    });

    describe("with no props", function() {
      it("should return an empty array", function() {
        assert.deepEqual(component.props(), []);
      });
    });

    describe("with some props", function() {
      it("should return an array with added Property objects", function() {
        component.addProp(prop);
        assert.deepEqual(component.props(), [prop]);
      });
    });
  });

  describe("#propNames()", function() {
    describe("with no props", function() {
      it("should return an empty array", function() {
        assert.deepEqual(component.propNames(), []);
      });
    });

    describe("with some props", function() {
      it("should return an array with added Property objects' names", function() {
        component.addProp(prop);
        assert.deepEqual(component.propNames(), [prop.constructor.propName]);
      });
    });
  });

  describe("#addProp()", function() {
    it("should add a Property", function() {
      component.addProp(prop);
      assert.deepEqual(component._props, [prop]);
    });

    it("should throw an Error if not passed an instance of Property", function() {
      assert.throws(() => component.addProp("prop"), Error);
    });

    it("should throw an Error if passed an invalid (for the component) prop", function() {
      const invalid_prop = new ICS.properties.DTSTART(new Date());
      assert.throws(() => component.addProp(invalid_prop), Error);
    });

    it("should throw an Error if passed a prop against its requirement validations", function() {
      component.addProp(prop);
      assert.throws(() => component.addProp(prop), Error);
    });
  });

  describe("#components()", function() {
    it("should not be mutable", function() {
      assert.throws(() => component.components().push(component_2), TypeError);
    });

    describe("with no components", function() {
      it("should return an empty array", function() {
        assert.deepEqual(component.components(), []);
      });
    });

    describe("with some components", function() {
      it("should return an array with added Component objects", function() {
        component.addComponent(component_2);
        assert.deepEqual(component.components(), [component_2]);
      });
    });
  });

  describe("#componentNames()", function() {
    describe("with no components", function() {
      it("should return an empty array", function() {
        assert.deepEqual(component.componentNames(), []);
      });
    });

    describe("with some components", function() {
      it("should return an array with added Component objects' names", function() {
        component.addComponent(component_2);
        assert.deepEqual(component.componentNames(), [component_2.constructor.componentName]);
      });
    });
  });

  describe("#addComponent()", function() {
    it("should add a Component", function() {
      component.addComponent(component_2);
      assert.deepEqual(component._components, [component_2]);
    });

    it("should throw an Error if not passed an instance of Component", function() {
      assert.throws(() => component.addComponent("component"), Error);
    });

    it("should throw an Error if passed an invalid (for the component) component", function() {
      const invalid_component = new ICS.components.VCALENDAR();
      assert.throws(() => component.addComponent(invalid_component), Error);
    });
  });

  describe("#reset()", function() {
    it("should remove all props and components", function() {
      component.addProp(prop);
      component.addComponent(component_2);
      component.reset();
      assert.deepEqual(component._props, []);
      assert.deepEqual(component._components, []);
    })
  });

  describe("#validateRequired()", function() {
    it("should throw an error if missing required props", function() {
      component.addProp(prop);
      assert.throws(() => component.validateRequired(), Error);
    });

    it("should return true if all required props are present", function() {
      component.addProp(prop);
      component.addProp(new ICS.properties.PRODID("XYZ Corp"));
      assert.equal(component.validateRequired(), true);
    });
  });

  describe("#toString()", function() {
    beforeEach(function() {
      component.addProp(prop);
      component.addProp(new ICS.properties.PRODID("XYZ Corp"));
    });

    it("should return a string", function() {
      assert.equal(typeof component.toString(), "string");
    });

    it("should begin and end with prefix and suffix", function() {
      const string = component.toString();
      const separator = component.constructor.separator;
      const splitString = string.split(separator);

      assert.equal(string.startsWith("BEGIN:"), true);
      assert.equal(splitString[splitString.length - 1].startsWith("END:"), true);
    });
  });
});
