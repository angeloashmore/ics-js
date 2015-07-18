import assert from "assert";
import ICS from "../ics-js/ICS";

const cal = new ICS.components.VCALENDAR();
cal.addProp(new ICS.Property("VERSION", "2.0"));

const event = new ICS.components.VEVENT();
event.addProp(new ICS.Property("SUMMARY", "Birthdate"));
event.addProp(new ICS.Property("DTSTART", new Date(Date.parse("1991-03-07 07:00 AM"))));
event.addProp(new ICS.Property("DTEND", new Date(Date.parse("1991-03-07 09:30 AM"))));
cal.addComponent(event);

const icsString = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Birthdate\nDTSTART:19910307T070000\nDTEND:19910307T093000\nEND:VEVENT\nEND:VCALENDAR";

describe("ics-js", function() {
  describe("creating an ICS file", function() {
    it("should return an ICS file as a string", function() {
      assert.equal(cal.toString(), icsString);
    });
  });
});
