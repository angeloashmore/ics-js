import formatDate from 'format-date';
import Property from '../Property';

export default class CATEGORIES extends Property {
  static propName = 'CATEGORIES';

  shortTransformer() {
    return typeof this.value === 'string';
  }

  transformer() {
    return this.value.join(',');
  }
}
