export default function NoEventsError(message) {
  this.name = "NoEventsError";
  this.message = message || "No events added.";
}
NoEventsError.prototype = Object.create(Error.prototype);
NoEventsError.prototype.constructor = NoEventsError;
