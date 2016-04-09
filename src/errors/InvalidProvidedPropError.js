import ExtendableError from 'es6-error';

/**
 * Error thrown when adding a property to a component that is not in the list of
 * valid properties.
 */
export default class InvalidProvidedPropError extends ExtendableError {
  /**
   * Create a new InvalidProvidedPropError.
   */
  constructor (message = 'Provided property\'s type is not listed in validProps.') {
    super(message);
  }
}
