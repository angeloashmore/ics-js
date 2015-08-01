import ExtendableError from 'es6-error';

export default class InvalidComponentError extends ExtendableError {
  constructor(message = 'Component does not contain all required properties.') {
    super(message);
  }
}
