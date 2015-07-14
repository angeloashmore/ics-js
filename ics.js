import Event from "Event";
import NoEventsError from "errors/NoEventsError";

export default class ICS {
  static MIME_TYPE = "text/calendar";
  static SEPARATOR = "\n";
  static Event = Event;

  constructor() {
    this.events = [];
  }

  addEvent(event) {
    if (!(event instanceof Event)) {
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
