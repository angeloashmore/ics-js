function NoEventsError(message) {
  this.name = "NoEventsError";
  this.message = message || "No events added.";
}
NoEventsError.prototype = Object.create(Error.prototype);
NoEventsError.prototype.constructor = NoEventsError;

function InvalidEventError(message) {
  this.name = "InvalidEventError";
  this.message = message || "Event is not configured correctly.";
}
InvalidEventError.prototype = Object.create(Error.prototype);
InvalidEventError.prototype.constructor = InvalidEventError;

class ICS {
  static MIME_TYPE = "text/calendar";
  static SEPARATOR = "\n";

  constructor() {
    this.events = [];
  }

  addEvent(event) {
    if (!(event instanceof ICSEvent)) {
      throw new TypeError("Argument `event` must be an instance of ICSEvent.");
    } else if (!event.isValid()) {
      throw new InvalidEventError();
    }

    this._events.push(event);
  }

  toString() {
    if (this.events.length < 1) throw new NoEventsError();

    const events = this.events.map((event) => event.toString());

    return [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      events.join(ICS.SEPARATOR),
      "END:VCALENDAR"
    ].join(ICS.SEPARATOR);
  }

  toBlob() {
    return new Blob([this.toString()], { type: ICS.MIME_TYPE });
  }

  toBase64(callback) {
    const reader = new window.FileReader();
    reader.readAsDataURL(this.toBlob());
    reader.onloadend = () => callback(reader.result);
  }
}

class ICSEvent {
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
      optionals.join(ICS.SEPARATOR),
      "TRANSP:TRANSPARENT",
      "END:VEVENT"
    ].join(ICS.SEPARATOR);
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
