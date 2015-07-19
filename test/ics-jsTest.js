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

const alarm = new ICS.components.VALARM();
alarm.addProp(new ICS.properties.ACTION("DISPLAY"));
alarm.addProp(new ICS.properties.TRIGGER("-PT12H"));
alarm.addProp(new ICS.properties.DESCRIPTION("Event reminder"));

event.addComponent(alarm);
cal.addComponent(event);

const icsString = "BEGIN:VCALENDAR\n\
VERSION:2.0\n\
PRODID:XYZ Corp\n\
BEGIN:VEVENT\n\
UID:1\n\
DTSTAMP:20150718T100000\n\
SUMMARY:Birthdate\n\
DTSTART:19910307T070000\n\
DTEND:19910307T093000\n\
BEGIN:VALARM\n\
ACTION:DISPLAY\n\
TRIGGER:-PT12H\n\
DESCRIPTION:Event reminder\n\
END:VALARM\n\
END:VEVENT\n\
END:VCALENDAR";

describe("ics-js", function() {
  describe("creating an ICS file", function() {
    it("should return an ICS file as a string", function() {
      assert.equal(cal.toString(), icsString);
    });
  });
});
