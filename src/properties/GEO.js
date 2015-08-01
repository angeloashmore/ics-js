import Property from '../Property';

export default class GEO extends Property {
  static propName = 'GEO';

  shortTransformer() {
    return typeof this.value === 'string';
  }

  transformer() {
    return this.value.join(';');
  }
}
