import ExtendableError from 'es6-error'

/**
 * Error thrown when adding a component to a component that is not in the list
 * of valid components.
 */
export default class InvalidProvidedComponentError extends ExtendableError {
  /**
   * Create a new InvalidProvidedComponentError.
   */
  constructor (message = 'Provided component\'s type is not listed in validComponents.') {
    super(message)
  }
}
