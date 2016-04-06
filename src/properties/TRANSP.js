import Property from '../Property';

export default class TRANSP extends Property {
  static propName = 'TRANSP';

  shortTransformer() {
    return (typeof this.value === 'string' || this.value instanceof String);
  }

  transformer() {
    return this.value ? 'TRANSPARENT' : 'OPAQUE';
  }
}
