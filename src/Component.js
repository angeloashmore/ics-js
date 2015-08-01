import ICS from './ICS';
import * as properties from './properties';
import {
  InvalidComponentError,
  InvalidProvidedComponentError,
  InvalidProvidedPropError
} from './errors';

export default class Component {
  static separator = '\n';

  static requiredProps = [];

  static validProps = {};
  static validComponents = {};

  constructor() {
    this.prefix = `BEGIN:${this.constructor.componentName}`;
    this.suffix = `END:${this.constructor.componentName}`;

    this._props = [];
    this._components = [];
  }

  props() {
    return Object.freeze(this._props.slice(0));
  }

  propNames() {
    return Object.freeze(this.props().map(prop => prop.constructor.propName));
  }

  addProp(name, value, props) {
    const { validProps } = this.constructor;
    if (!validProps[name]) throw new InvalidProvidedPropError();

    const PropClass = properties[name] || properties._default(name);
    const prop = new PropClass(value, props);
    validProps[name].forEach(validator => validator(this, prop));

    this._props.push(prop);

    return prop;
  }

  components() {
    return Object.freeze(this._components.slice(0));
  }

  componentNames() {
    return Object.freeze(this.components().map(prop => prop.constructor.componentName));
  }

  addComponent(component) {
    const { validComponents } = this.constructor;
    const { componentName } = component.constructor;

    if (!(component instanceof Component)) throw new TypeError('Expected `component` to be an instance of Component.');
    if (!validComponents[componentName]) throw new InvalidProvidedComponentError();

    validComponents[componentName].forEach(validator => validator(this, component));

    this._components.push(component);
    return component;
  }

  reset() {
    this._props = this._components = [];
  }

  validateRequired() {
    const { requiredProps } = this.constructor;

    const intersection = Component._intersect(requiredProps, this.propNames());

    if (intersection.length > 0) throw new InvalidComponentError();

    return true;
  }

  toString() {
    this.validateRequired();

    const props = this._props.map(prop => prop.toString());
    const components = this._components.map(component => component.toString());

    return [
      this.prefix,
      ...props,
      ...components,
      this.suffix,
    ].join(this.constructor.separator);
  }

  toBlob() {
    return new Blob([this.toString()], { type: ICS.MIME_TYPE });
  }

  toBase64() {
    const blob = this.toBlob();
    const reader = new window.FileReader();

    return new Promise((resolve, reject) => {
      reader.readAsDataURL(blob);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.onabort = () => reject();
    });
  }

  static _intersect(a, b) {
    const b_ = new Set(b);
    return a.filter(item => !b_.has(item));
  }
}
