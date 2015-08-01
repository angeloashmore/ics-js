import ExtendableError from 'es6-error';

export default class ValidationError extends ExtendableError {
  constructor(message = 'Provided object was invalid for the recieving component.') {
    super(message);
  }
}
