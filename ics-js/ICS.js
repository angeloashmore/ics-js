import Property from "./Property";
import Component from "./Component";
import * as components from "./components";

export default class ICS {
  static Property = Property;
  static Component = Component;

  static MIME_TYPE = "text/calendar";
}

for (let componentName in components) {
  ICS[componentName] = components[componentName];
}
