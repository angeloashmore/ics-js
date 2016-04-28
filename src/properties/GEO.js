import Property from '../Property'

/**
 * GEO property.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.8.2.3
 */
export default class GEO extends Property {
  static propName = 'GEO'

  /**
   * Check if property's value is not an array.
   *
   * @returns {boolean} Whether the property's value is transformed.
   */
  shortTransformer () {
    return !Array.isArray(this.value)
  }

  /**
   * Joins the value using semicolon to separate values.
   *
   * @returns {string} The property's transformed value.
   */
  transformer () {
    return this.value.join(';')
  }
}
