import Property from '../../Property';
import Component from '../../Component';
import { ValidationError } from '../../errors';

export default function required() {
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

    if (!names.includes(subjectName)) throw new ValidationError();
  };
}
