import Property from "../../Property";
import Component from "../../Component";

export default function required() {
  return (component, subject) => {
    let subjectName, names;

    if (subject instanceof Property) {
      subjectName = subject.constructor.propName;
      names = component.propNames();
    } else if (subject instanceof Component) {
      subjectName = subject.constructor.componentName;
      names = component.componentNames();
    }

    if (!names.includes(subjectName)) throw new Error();
  }
}
