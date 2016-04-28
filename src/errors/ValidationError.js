import ExtendableError from 'es6-error'

/**
 * Error thrown when a validation fails.
 */
export default class ValidationError extends ExtendableError {
  /**
   * Create a new ValidationError.
   */
  constructor (message = 'Provided object was invalid for the recieving component.') {
    super(message)
  }
}
