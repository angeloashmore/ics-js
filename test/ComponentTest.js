import assert from "assert";
import ICS from "../ics-js/ICS";

const component = new ICS.Component();
const prop = new ICS.Property("KEY", "VALUE");
const component_2 = new ICS.Component();

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

  describe("#addProp()", function() {
    it("should add a Property", function() {
      component.addProp(prop);
      assert.deepEqual(component._props, [prop]);
    });

    it("should throw a TypeError if not passed an instance of Property", function() {
      assert.throws(() => component.addProp("prop"), TypeError);
    });
  });

  describe("#components()", function() {
    it("should not be mutable", function() {
      assert.throws(() => component.components().push(component_2), TypeError);
    });

    describe("with no props", function() {
      it("should return an empty array", function() {
        assert.deepEqual(component.components(), []);
      });
    });

    describe("with some props", function() {
      it("should return an array with added Component objects", function() {
        component.addComponent(component_2);
        assert.deepEqual(component.components(), [component_2]);
      });
    });
  });

  describe("#addComponent()", function() {
    it("should add a Component", function() {
      component.addComponent(component_2);
      assert.deepEqual(component._components, [component_2]);
    });

    it("should throw a TypeError if not passed an instance of Component", function() {
      assert.throws(() => component.addComponent("component"), TypeError);
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
});
