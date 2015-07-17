import Property from "./Property";

export default class Component {
  static separator = "\n";
  static requiredProps = [];
  static singletonProps = [];
  static transformers = new Map();

  constructor() {
    this.prefix = `BEGIN:${this.constructor.name}`;
    this.suffix = `END:${this.constructor.name}`;

    this._props = [];
    this._components = [];
  }

  props() {
    return Object.freeze(this._props.slice(0));
  }

  addProp(prop) {
    if (!(prop instanceof Property)) throw new TypeError();
    this._props.push(prop);
    return prop;
  }

  components() {
    return Object.freeze(this._components.slice(0));
  }

  addComponent(component) {
    if (!(component instanceof Component)) throw new TypeError();
    this._components.push(component);
    return component;
  }

  reset() {
    this._props = this._components = [];
  }

  toString() {
    const props = this._props.map(prop => prop.toString());
    const components = this._components.map(component => component.toString());

    return [
      this.prefix,
      ...props,
      ...components,
      this.suffix
    ].join(this.constructor.separator);
  }
}
