import formatDate from "format-date";
import Property from "../Property";

export default class DTSTAMP extends Property {
  static propName = "DTSTAMP";

  shortTransformer() {
    return /[0-9]{8}T[0-9]{6}/.test(this.value);
  }

  transformer() {
    const format = "{year}{month}{day}T{hours}{minutes}{seconds}";
    const date = new Date(Date.parse(this.value));

    return formatDate(format, date);
  }
}
