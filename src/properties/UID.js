import guid from 'simple-guid'
import Property from '../Property'

/**
 * UID property.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.8.4.7
 */
export default class UID extends Property {
  static propName = 'UID'

  /**
   * Check if property has a value.
   *
   * @returns {boolean} Whether the property's value is transformed.
   */
  shortTransformer () {
    return Boolean(this.value)
  }

  /**
   * Generate a random GUID.
   *
   * @returns {string} The property's transformed value.
   */
  transformer () {
    return guid()
  }
}
