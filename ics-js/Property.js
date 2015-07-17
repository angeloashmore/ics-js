import transformers from "./transformers";

export default class Property {
  constructor(key, value) {
    if (key == undefined || value == undefined) throw new TypeError();

    this.key = key.toUpperCase();
    const keyRegex = /^[A-Z]([A-Z]|-)*[A-Z]$/;
    if (keyRegex.test(this.key) === false) throw new TypeError();

    const transformer = transformers[this.key];
    this.value = !!transformer ? transformer(value) : value;
  }

  toString() {
    return `${this.key}:${this.value}`;
  }
}
