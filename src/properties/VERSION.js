import Property from '../Property'

/**
 * VERSION property.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.7.4
 */
export default class VERSION extends Property {
  static propName = 'VERSION'

  /**
   * Check if property's value is not a number.
   *
   * @returns {boolean} Whether the property's value is transformed.
   */
  shortTransformer () {
    return typeof this.value !== 'number'
  }

  /**
   * Parse the property's value and return a float value with one decimal point.
   *
   * @returns {string} The property's transformed value.
   */
  transformer () {
    return parseFloat(this.value).toFixed(1)
  }
}
