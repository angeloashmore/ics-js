import assert from "assert";
import ICS from "../ics-js/ICS";

const cal = new ICS.components.VCALENDAR();
cal.addProp(new ICS.properties.VERSION(2));
cal.addProp(new ICS.properties.PRODID("XYZ Corp"));

const event = new ICS.components.VEVENT();
event.addProp(new ICS.properties.UID("1"));
event.addProp(new ICS.properties.DTSTAMP(new Date(Date.parse("2015-07-18 10:00:00"))));
event.addProp(new ICS.properties.SUMMARY("Birthdate"));
event.addProp(new ICS.properties.DTSTART(new Date(Date.parse("1991-03-07 07:00:00"))));
event.addProp(new ICS.properties.DTEND(new Date(Date.parse("1991-03-07 09:30:00"))));
cal.addComponent(event);

const icsString = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:XYZ Corp\nBEGIN:VEVENT\nUID:1\nDTSTAMP:20150718T100000\nSUMMARY:Birthdate\nDTSTART:19910307T070000\nDTEND:19910307T093000\nEND:VEVENT\nEND:VCALENDAR";

describe("ics-js", function() {
  describe("creating an ICS file", function() {
    it("should return an ICS file as a string", function() {
      assert.equal(cal.toString(), icsString);
    });
  });
});
