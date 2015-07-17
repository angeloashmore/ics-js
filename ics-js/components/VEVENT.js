import formatDate from "format-date";
import Component from "../Component";

export default class VEVENT extends Component {
  static requiredProps = [
    "DTSTAMP", "UID"
  ];

  static singletonProps = [
    "CLASS", "CREATED", "DESCRIPTION", "DTEND", "DTSTAMP", "DTSTART",
    "DURATION", "GEO", "LAST-MOD", "LOCATION", "ORGANIZER", "PRIORITY", "SEQ",
    "STATUS", "SUMMARY", "TRANSP", "UID", "URL", "RECURID", "RRULE"
  ];
}

VCALENDAR.transformers.set("DTSTART", function(value) {
  if (/[0-9]{8}T[0-9]{6}/.test(value)) return value;
  const date = new Date(Date.parse(value));
  const format = "{year}{month}{day}T{hours}{minutes}{seconds}";
  return formatDate(format, date);
});
