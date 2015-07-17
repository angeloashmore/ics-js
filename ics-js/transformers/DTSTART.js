import formatDate from "format-date";

export default function(value) {
  if (/[0-9]{8}T[0-9]{6}/.test(value)) return value;

  const date = new Date(Date.parse(value));
  const format = "{year}{month}{day}T{hours}{minutes}{seconds}";

  return formatDate(format, date);
}
