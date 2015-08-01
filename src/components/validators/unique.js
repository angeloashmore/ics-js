import Property from '../../Property';
import Component from '../../Component';
import { ValidationError } from '../../errors';

export default function unique(uniqueNames) {
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

    const a = new Set(names);
    const b = new Set([subjectName, ...uniqueNames]);
    const difference = new Set([...a].filter(x => !b.has(x)));
    return difference > 1 ? false : true;

    if (difference > 1) throw new ValidationError();
  };
}
