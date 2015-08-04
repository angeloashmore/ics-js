import formatDate from 'format-date';
import ICS from '../ICS';
import Property from '../Property';

export default class DTSTAMP extends Property {
  static propName = 'DTSTAMP';

  shortTransformer() {
    return !(this.value instanceof Date);
  }

  transformer() {
    const valueIsDate = this.props.VALUE == 'DATE';

    if (valueIsDate) {
      // Remove timezone offset
      const offset = this.value.getTimezoneOffset() * 60000;
      this.value = new Date(this.value.getTime() + offset);
    }

    const format = valueIsDate ? ICS.DateFormat : ICS.DateTimeFormat;
    return formatDate(format, this.value);
  }
}
