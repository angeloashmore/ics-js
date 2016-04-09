import Property from '../Property';

/**
 * CATEGORIES property.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.8.1.2
 */
export default class CATEGORIES extends Property {
  static propName = 'CATEGORIES';

  /**
   * Check if property's value is an array.
   *
   * @returns {boolean} Whether the property's value is transformed.
   */
  shortTransformer () {
    return !Array.isArray(this.value);
  }

  /**
   * Joins the value using commas to separate values.
   *
   * @returns {string} The property's transformed value.
   */
  transformer () {
    return this.value.join(',');
  }
}
