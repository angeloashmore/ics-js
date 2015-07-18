import formatDate from "format-date";
import Transformer from "../Transformer";

export default class DTSTART extends Transformer {
  static execute(input) {
    if (/[0-9]{8}T[0-9]{6}/.test(input)) return input;

    const date = new Date(Date.parse(input));
    const format = "{year}{month}{day}T{hours}{minutes}{seconds}";

    return formatDate(format, date);
  }
}
