import transformers from "./transformers";

export default class Property {
  constructor(key, value) {
    if (key == undefined || value == undefined) throw new TypeErr();

    this.key = key.toUpperCase();
    const keyRegex = /^[A-Z]([A-Z]|-)*[A-Z]$/;
    if (keyRegex.test(this.key) === false) throw new TypeError();

    if (transformers[key] != undefined) {
      this.value = transformers[key](value);
    } else {
      this.value = value;
    }
  }

  toString() {
    return `${this.key}:${this.value}`;
  }
}
