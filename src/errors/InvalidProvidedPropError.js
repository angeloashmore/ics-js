import ExtendableError from 'es6-error';

export default class InvalidProvidedPropError extends ExtendableError {
  constructor(message = 'Provided property\'s type is not listed in validProps.') {
    super(message);
  }
}
