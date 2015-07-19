import Property from "./Property";

export default class Component {
  static separator = "\n";

  static requiredProps = [];

  static validProps = [];
  static validComponents = [];

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

  addProp(prop) {
    const { validProps } = this.constructor;
    const { propName } = prop.constructor;

    if (!(prop instanceof Property)) throw new TypeError();
    if (!validProps[propName]) throw new TypeError();

    validProps[propName].forEach(validator => validator(this, prop));

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

    if (!(component instanceof Component)) throw new TypeError();
    if (!validComponents[componentName]) throw new TypeError();

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

    if (intersection.length > 0) throw new Error("Validation failed");

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
      this.suffix
    ].join(this.constructor.separator);
  }

  static _intersect(a, b) {
    return a.filter(item => !b.includes(item));
  }
}
