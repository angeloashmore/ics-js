import Property from '../Property';

export default class CATEGORIES extends Property {
  static propName = 'CATEGORIES';

  shortTransformer() {
    return (typeof this.value === 'string' || this.value instanceof String);
  }

  transformer() {
    return this.value.join(',');
  }
}
