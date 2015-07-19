import assert from "assert";
import ICS from "../ics-js/ICS";

const cal = new ICS.components.VCALENDAR();
cal.addProp(new ICS.properties.VERSION(2));
cal.addProp(new ICS.properties.PRODID("XYZ Corp"));

const event = new ICS.components.VEVENT();
event.addProp(new ICS.properties.UID("1"));
event.addProp(new ICS.properties.DTSTAMP(new Date("2015-07-18 10:00:00")));
event.addProp(new ICS.properties.SUMMARY("Birthdate"));
event.addProp(new ICS.properties.DTSTART(new Date("1991-03-07 07:00:00")));
event.addProp(new ICS.properties.DTEND(new Date("1991-03-07 09:30:00")));

const eventAlarm = new ICS.components.VALARM();
eventAlarm.addProp(new ICS.properties.ACTION("DISPLAY"));
eventAlarm.addProp(new ICS.properties.TRIGGER("-PT12H"));
eventAlarm.addProp(new ICS.properties.DESCRIPTION("Event reminder"));

const todo = new ICS.components.VTODO();
todo.addProp(new ICS.properties.UID("1"));
todo.addProp(new ICS.properties.DTSTAMP(new Date("2015-07-18 10:00:00")));
todo.addProp(new ICS.properties.DUE(new Date("2015-07-19 10:00:00")));
todo.addProp(new ICS.properties.SUMMARY("To Do"));
todo.addProp(new ICS.properties.CATEGORIES(["WORK", "FAMILY"]));

event.addComponent(eventAlarm);

cal.addComponent(event);
cal.addComponent(todo);

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
BEGIN:VTODO\n\
UID:1\n\
DTSTAMP:20150718T100000\n\
DUE:20150719T100000\n\
SUMMARY:To Do\n\
CATEGORIES:WORK,FAMILY\n\
END:VTODO\n\
END:VCALENDAR";

describe("ics-js", function() {
  describe("creating an ICS file", function() {
    it("should return an ICS file as a string", function() {
      assert.equal(cal.toString(), icsString);
    });
  });
});
