import Property from "./Property";
import Component from "./Component";
import * as components from "./components";

export default class ICS {
  static Property = Property;

  static Component = Component;
  static components = components;

  static MIME_TYPE = "text/calendar";
}
