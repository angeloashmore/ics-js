import Property from './Property';
import Component from './Component';
import * as components from './components';

export default class ICS {
  static Property = Property;
  static Component = Component;

  static MIME_TYPE = 'text/calendar';
  static DateFormat = '{year}{month}{day}';
  static DateTimeFormat = '{year}{month}{day}T{hours}{minutes}{seconds}';
}

for (let componentName in components) {
  ICS[componentName] = components[componentName];
}
