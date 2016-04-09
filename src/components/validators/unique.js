import difference from 'lodash/difference';
import Property from '../../Property';
import Component from '../../Component';
import {ValidationError} from '../../errors';

/**
 * Validator to ensure only one instance of the subject of a subset of types is
 * present in the component.
 *
 * @param {string[]} uniqueNames - Names of the subset of types.
 * @throws {ValidationError} An instance of a type in the subset of types is already present in the component.
 */
export default (uniqueNames) => {
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

    if (difference(names, [subjectName, ...uniqueNames]) > 1) {
      throw new ValidationError();
    }
  };
};
