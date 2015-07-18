import assert from "assert";
import ICS from "../ics-js/ICS";
import Property from "../ics-js/Property";
import properties from "../ics-js/properties";
import Component from "../ics-js/Component";
import components from "../ics-js/components";

const string = "BEGIN:VCALENDAR\nEND:VCALENDAR";

describe("ICS", function() {
  describe("Property", function() {
    it("should return the Property class", function() {
      assert.equal(ICS.Property, Property);
    });

    it("should return an array of Properties", function() {
      assert.equal(ICS.properties, properties);
    })
  });

  describe("Component", function() {
    it("should return the Component class", function() {
      assert.equal(ICS.Component, Component);
    });

    it("should return an array of Components", function() {
      assert.equal(ICS.components, components);
    })
  });

  describe("::MIME_TYPE", function() {
    it("should return 'text/calendar'", function() {
      assert.equal(ICS.MIME_TYPE, "text/calendar");
    });
  });

  describe("#toBlob()", function() {
    it("should return an instance of Blob", function() {
      assert.equal(ICS.toBlob(string) instanceof Blob, true);
    });
  });

  describe("toBase64()", function() {
    it("should return a string starting with 'data:text/calendar,'", function() {
      assert.equal(typeof ICS.toBase64(string), "string");
      assert.equal(ICS.toBase64(string).startsWith("data:text/calendar,"), true);
    });
  });
});
