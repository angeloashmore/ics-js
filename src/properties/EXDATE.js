import formatDate from 'format-date';
import ICS from '../ICS';
import Property from '../Property';

export default class EXDATE extends Property {
  static propName = 'EXDATE';

  shortTransformer() {
    if (Array.isArray(this.value)) {
      return !this.value.every(value => value instanceof Date);
    } else {
      return true;
    }
  }

  transformer() {
    const valueIsDate = this.props.VALUE == 'DATE';
    const format = valueIsDate ? ICS.DateFormat : ICS.DateTimeFormat;

    return this.value.map(function(value) {
      if (valueIsDate) {
        // Remove timezone offset
        const offset = value.getTimezoneOffset() * 60000;
        value = new Date(value.getTime() + offset);
      }

      return formatDate(format, value);
    }).join();
  }
}
