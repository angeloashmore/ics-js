import ExtendableError from 'es6-error'

/**
 * Error thrown when a function is called that is not compatible with the
 * platform.
 */
export default class IncompatiblePlatformError extends ExtendableError {
  /**
   * Create a new IncompatiblePlatformError.
   */
  constructor (message = 'Platform is incompatible. You may need to provide a polyfill.') {
    super(message)
  }
}
