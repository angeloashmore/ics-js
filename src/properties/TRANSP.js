import Property from '../Property';

export default class TRANSP extends Property {
  static propName = 'TRANSP';

  shortTransformer() {
    return typeof this.value === 'string';
  }

  transformer() {
    return !!this.value ? 'TRANSPARENT' : 'OPAQUE';
  }
}
