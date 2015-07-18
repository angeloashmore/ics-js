import Property from "./Property";
import properties from "./properties";
import Component from "./Component";
import components from "./components";

export default class ICS {
  static Property = Property;
  static properties = properties;

  static Component = Component;
  static components = components;

  static MIME_TYPE = "text/calendar";

  static toBlob(string) {
    return new Blob([string], { type: ICS.MIME_TYPE });
  }

  static toBase64(string, callback) {
    const blob = this.toBlob(string);
    const reader = new window.FileReader();

    return Promise((resolve, reject) => {
      reader.readAsDataURL(blob);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.onabort = () => reject();
    });
  }
}
