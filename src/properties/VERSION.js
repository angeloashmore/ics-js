import Property from '../Property';

export default class VERSION extends Property {
  static propName = 'VERSION';

  shortTransformer() {
    return /[0-9].[0-9]/.test(this.value);
  }

  transformer() {
    return parseFloat(this.value).toFixed(1);
  }
}
