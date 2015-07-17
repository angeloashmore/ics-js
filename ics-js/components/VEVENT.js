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
