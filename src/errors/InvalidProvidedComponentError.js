import ExtendableError from 'es6-error';

export default class InvalidProvidedComponentError extends ExtendableError {
  constructor(message = 'Provided component\'s type is not listed in validComponents.') {
    super(message);
  }
}
