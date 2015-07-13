class ICS {
  static SEPARATOR = "\n";

  static CALENDAR_START = function() {
    return [
      "BEGIN:VCALENDAR",
      "VERSION:2.0"
    ].join(ICS.SEPARATOR);
  }

  static CALENDAR_END = "END:VCALENDAR";

  constructor() {
    this.events = [];
  }

  toString() {
    if (this.events.length < 1) throw new Error("No events added.");

    const events = this.events.map((event) => event.toString());

    return [
      ICS.CALENDAR_START(),
      events.join(ICS.SEPARATOR),
      ICS.CALENDAR_END
    ].join(ICS.SEPARATOR);
  }
}

class ICSEvent {
  static requiredProps = ["subject", "description", "location", "start", "end"];

  constructor() {
    for (let index in ICSEvent.requiredProps) {
      let propName = ICSEvent.requiredProps[index];
      this[propName] = null;
    }
  }

  isValid() {
    for (let index in ICSEvent.requiredProps) {
      let propName = ICSEvent.requiredProps[index];
      if (this[propName] == undefined) return false;
    }
  }

  toString() {
    // if (!this.isValid()) throw new Error("Invalid event properties.");

    return [
      "BEGIN:VEVENT",
      "CLASS:PUBLIC",
      "DESCRIPTION:" + this.description,
      "DTSTART;VALUE=DATE:" + ICSEvent.dateToICSFormat(this.start),
      "DTEND;VALUE=DATE:" + ICSEvent.dateToICSFormat(this.end),
      "LOCATION:" + this.location,
      "SUMMARY;LANGUAGE=en-us:" + this.subject,
      "TRANSP:TRANSPARENT",
      "END:VEVENT"
    ].join(ICS.SEPARATOR);
  }

  static dateToICSFormat(date) {
    if (!(date instanceof Date)) throw new TypeError("Param `date` must be of type Date.");

    const year = ("0000" + (date.getFullYear().toString())).slice(-4);
    const month = ("00" + ((date.getMonth() + 1).toString())).slice(-2);
    const day = ("00" + ((date.getDate()).toString())).slice(-2);
    const hours = ("00" + (date.getHours().toString())).slice(-2);
    const minutes = ("00" + (date.getMinutes().toString())).slice(-2);
    const seconds = ("00" + (date.getMinutes().toString())).slice(-2);

    let time = "T" + hours + minutes + seconds;

    return year + month + day + time;
  }
}
