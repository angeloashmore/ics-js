import assert from 'assert';
import ICS from '../../src/ICS';

const cal = new ICS.VCALENDAR();
cal.addProp('VERSION', 2);
cal.addProp('PRODID', 'XYZ Corp');

const event = new ICS.VEVENT();
event.addProp('UID', '1');
event.addProp('DTSTAMP', new Date('2015-07-18'), { VALUE: 'DATE' });
event.addProp('SUMMARY', 'Birthdate');
event.addProp('DTSTART', new Date('1991-03-07 07:00:00'), { VALUE: 'DATE-TIME' });
event.addProp('DTEND', new Date('1991-03-07 09:30:00'));

const eventAlarm = new ICS.VALARM();
eventAlarm.addProp('ACTION', 'DISPLAY');
eventAlarm.addProp('TRIGGER', '-PT12H');
eventAlarm.addProp('DESCRIPTION', 'Event reminder');

const todo = new ICS.VTODO();
todo.addProp('UID', '1');
todo.addProp('DTSTAMP', new Date('2015-07-18 10:00:00'));
todo.addProp('DUE', new Date('2015-07-19 10:00:00'));
todo.addProp('SUMMARY', 'To Do');
todo.addProp('CATEGORIES', ['WORK', 'FAMILY']);

event.addComponent(eventAlarm);

cal.addComponent(event);
cal.addComponent(todo);

const icsString = 'BEGIN:VCALENDAR\r\n' +
                  'VERSION:2.0\r\n' +
                  'PRODID:XYZ Corp\r\n' +
                  'BEGIN:VEVENT\r\n' +
                  'UID:1\r\n' +
                  'DTSTAMP;VALUE=DATE:20150718\r\n' +
                  'SUMMARY:Birthdate\r\n' +
                  'DTSTART;VALUE=DATE-TIME:19910307T070000\r\n' +
                  'DTEND:19910307T093000\r\n' +
                  'BEGIN:VALARM\r\n' +
                  'ACTION:DISPLAY\r\n' +
                  'TRIGGER:-PT12H\r\n' +
                  'DESCRIPTION:Event reminder\r\n' +
                  'END:VALARM\r\n' +
                  'END:VEVENT\r\n' +
                  'BEGIN:VTODO\r\n' +
                  'UID:1\r\n' +
                  'DTSTAMP:20150718T100000\r\n' +
                  'DUE:20150719T100000\r\n' +
                  'SUMMARY:To Do\r\n' +
                  'CATEGORIES:WORK,FAMILY\r\n' +
                  'END:VTODO\r\n' +
                  'END:VCALENDAR';

describe('ics-js', function() {
  describe('creating an ICS file', function() {
    it('should return an ICS file as a string', function() {
      assert.equal(cal.toString(), icsString);
    });
  });
});
