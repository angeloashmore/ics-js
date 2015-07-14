import ICSEvent from "./icsEvent";
import NoEventsError from "./errors/noEventsError";
import InvalidEventError from "./errors/invalidEventError";

export default class ICS {
  static MIME_TYPE = "text/calendar";
  static SEPARATOR = "\n";
  static Event = ICSEvent;

  constructor() {
    this._events = [];
  }

  events() {
    return Object.freeze(this._events.slice(0));
  }

  addEvent(event) {
    if (!(event instanceof ICS.Event)) {
      throw new TypeError("Argument `event` must be an instance of ICSEvent.");
    } else if (!event.isValid()) {
      throw new InvalidEventError();
    }

    this._events.push(event);
  }

  reset() {
    return this._events = [];
  }

  toString() {
    if (this._events.length < 1) throw new NoEventsError();

    const events = this._events.map((event) => event.toString());

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
