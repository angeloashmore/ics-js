import Property from '../../Property'
import Component from '../../Component'
import { ValidationError } from '../../errors'

/**
 * Validator to ensure only one instance of the subject is present in the
 * component.
 *
 * @throws {ValidationError} An instance of the subject is already present in the component.
 */
export default () => {
  return (component, subject) => {
    let subjectName
    let names

    if (subject instanceof Property) {
      subjectName = subject.constructor.propName
      names = component.propNames()
    } else if (subject instanceof Component) {
      subjectName = subject.constructor.componentName
      names = component.componentNames()
    }

    const filtered = names.filter((name) => {
      return name === subjectName
    })

    if (filtered.length >= 1) {
      throw new ValidationError()
    }
  }
}
