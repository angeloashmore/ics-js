import Property from '../../Property';
import Component from '../../Component';
import { ValidationError } from '../../errors';

export default function singleton() {
  return (component, subject) => {
    let subjectName;
    let names;

    if (subject instanceof Property) {
      subjectName = subject.constructor.propName;
      names = component.propNames();
    } else if (subject instanceof Component) {
      subjectName = subject.constructor.componentName;
      names = component.componentNames();
    }

    const filtered = names.filter(name => name === subjectName);
    if (filtered.length >= 1) throw new ValidationError();
  };
}
