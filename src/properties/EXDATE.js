import formatDate from 'format-date';
import ICS from '../ICS';
import Property from '../Property';

export default class EXDATE extends Property {
  static propName = 'EXDATE';

  shortTransformer() {
    return typeof this.value === 'string';
  }

  transformer() {
    return this.value.map(function(value) {
      return formatDate(ICS.DateTimeFormat, new Date(value));
    }).join();
  }
}
