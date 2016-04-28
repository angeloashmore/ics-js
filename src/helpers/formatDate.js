import leftpad from 'left-pad'

/**
 * Format a Date object to a valid string.
 *
 * @private
 * @param {Date} date - Date to format.
 * @param {boolean} [includeTime=true] - Determine if time is included in the string.
 */
export default (date, includeTime = true) => {
  let string

  string =
    date.getFullYear() +
    leftpad(date.getMonth() + 1, 2, 0) +
    leftpad(date.getDate(), 2, 0)

  if (includeTime) {
    string +=
      'T' +
      leftpad(date.getHours(), 2, 0) +
      leftpad(date.getMinutes(), 2, 0) +
      leftpad(date.getSeconds(), 2, 0)
  }

  return string
}
