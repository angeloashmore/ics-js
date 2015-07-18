import transformers from "./transformers";

export default class Property {
  static keyRegex = /^[A-Z]([A-Z]|-)*[A-Z]$/;

  static transformerFor(key) {
    return transformers[key] || transformers.Default;
  }

  constructor(key, value, skipTransformer = false) {
    if (key == undefined || value == undefined) throw new TypeError();
    if (Property.keyRegex.test(key.toUpperCase()) === false) throw new TypeError();

    this.key = key.toUpperCase();
    this.value = skipTransformer ? value : Property.transformerFor(this.key).execute(value);
  }

  toString() {
    return `${this.key}:${this.value}`;
  }
}
