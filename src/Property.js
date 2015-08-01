export default class Property {
  static keyRegex = /^[A-Z]([A-Z]|-)*[A-Z]$/;
  static propName = 'Property';

  constructor(value, props, skipTransformer = false) {
    this.value = value;
    this.props = props;
    this.skipTransformer = skipTransformer;
  }

  shortTransformer() {
    return true;
  }

  transformer() {
    return this.value;
  }

  transformedValue() {
    if (this.skipTransformer || this.shortTransformer()) return this.value;
    return this.transformer();
  }

  transformedProps() {
    const props = [];
    for (let key in this.props) props.push(`${key}=${this.props[key]}`);
    return props.join(';');
  }

  toString() {
    const key = this.constructor.propName + (!!this.props ? ';' + this.transformedProps() : '');
    const value = this.transformedValue();
    return `${key}:${value}`;
  }
}
