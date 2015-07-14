export function InvalidEventError(message) {
  this.name = "InvalidEventError";
  this.message = message || "Event is not configured correctly.";
}
InvalidEventError.prototype = Object.create(Error.prototype);
InvalidEventError.prototype.constructor = InvalidEventError;
