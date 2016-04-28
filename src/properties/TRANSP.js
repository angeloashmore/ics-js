import Property from '../Property'

/**
 * TRANSP property.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.8.2.7
 */
export default class TRANSP extends Property {
  static propName = 'TRANSP'

  /**
   * Check if property's value is not a boolean.
   *
   * @returns {boolean} Whether the property's value is transformed.
   */
  shortTransformer () {
    return typeof this.value !== 'boolean'
  }

  /**
   * Returns "TRANSPARENT" if the property's value is true, or "OPAQUE" if
   * false.
   *
   * @returns {string} The property's transformed value.
   */
  transformer () {
    return this.value ? 'TRANSPARENT' : 'OPAQUE'
  }
}
