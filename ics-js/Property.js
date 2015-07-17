export default class Property {
  constructor(key, value) {
    if (key == undefined || value == undefined) throw new TypeError();

    this.key = key.toUpperCase();
    this.value = value;

    const keyRegex = /^[A-Z]([A-Z]|-)*[A-Z]$/;
    if (keyRegex.test(this.key) === false) throw new TypeError();
  }

  toString() {
    return `${this.key}:${this.value}`;
  }
}
