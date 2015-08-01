import formatDate from 'format-date';
import ICS from '../ICS';
import Property from '../Property';

export default class DTSTAMP extends Property {
  static propName = 'DTSTAMP';

  shortTransformer() {
    return /[0-9]{8}T[0-9]{6}/.test(this.value);
  }

  transformer() {
    return formatDate(ICS.DateTimeFormat, new Date(this.value));
  }
}
