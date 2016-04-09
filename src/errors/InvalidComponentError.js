import ExtendableError from 'es6-error';

/**
 * Error thrown when a component does not contain all required properties.
 */
export default class InvalidComponentError extends ExtendableError {
  /**
   * Create a new InvalidComponentError.
   */
  constructor (message = 'Component does not contain all required properties.') {
    super(message);
  }
}
