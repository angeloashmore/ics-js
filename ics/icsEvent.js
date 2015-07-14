import InvalidEventError from "./errors/invalidEventError";

export default class ICSEvent {
  static SEPARATOR = "\n";

  constructor() {
    // Required props.
    this.subject = null;
    this.start = null;
    this.end = null;

    // Optional props.
    this.description = null;
    this.location = null;
  }

  isValid() {
    if (this.subject == undefined ||
        this.start == undefined ||
        this.end == undefined) {
      return false;
    } else {
      return true;
    }
  }

  toString() {
    if (!this.isValid()) throw new InvalidEventError();

    const optionals = [];
    if (this.description != undefined) optionals.push(`DESCRIPTION:${this.description}`);
    if (this.location != undefined) optionals.push(`LOCATION:${this.location}`);

    return [
      "BEGIN:VEVENT",
      "CLASS:PUBLIC",
      "DTSTART;VALUE=DATE:" + ICSEvent.dateToICSFormat(this.start),
      "DTEND;VALUE=DATE:" + ICSEvent.dateToICSFormat(this.end),
      "SUMMARY;LANGUAGE=en-us:" + this.subject,
      optionals.join(ICSEvent.SEPARATOR),
      "TRANSP:TRANSPARENT",
      "END:VEVENT"
    ].join(ICSEvent.SEPARATOR);
  }

  static dateToICSFormat(date) {
    if (!(date instanceof Date)) throw new TypeError("Argument `date` must be an instance of Date.");

    const year = ("0000" + (date.getFullYear().toString())).slice(-4);
    const month = ("00" + ((date.getMonth() + 1).toString())).slice(-2);
    const day = ("00" + ((date.getDate()).toString())).slice(-2);
    const hours = ("00" + (date.getHours().toString())).slice(-2);
    const minutes = ("00" + (date.getMinutes().toString())).slice(-2);
    const seconds = ("00" + (date.getMinutes().toString())).slice(-2);

    const time = "T" + hours + minutes + seconds;

    return year + month + day + time;
  }
}
