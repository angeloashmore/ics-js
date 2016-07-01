/**
 * Base class for properties.
 */
export default class Property {
  /**
   * Name of the property.
   *
   * @abstract
   * @type {string}
   */
  static propName = 'Property'

  /**
   * Create a new property.
   *
   * @param {*} value - Value of the property.
   * @param {Object} [props={}] - Object of properties for the property. Object keys and values are directly injected.
   * @param {boolean} [skipTransformer=false] - Explicitly determine if the property's value is transformed.
   */
  constructor (value, props, skipTransformer = false) {
    /**
     * The property's value.
     *
     * @type {*}
     */
    this.value = value

    /**
     * Object to store the property's properties.
     *
     * @private
     * @type {Object}
     */
    this.props = props || {}

    /**
     * Determine if the property's value is transformed.
     *
     * @type {boolean}
     */
    this.skipTransformer = skipTransformer
  }

  /**
   * Determine if the property's value is transformed. Returning true causes the
   * transformer to be skipped.
   *
   * @abstract
   * @returns {boolean} Whether the property's value is transformed.
   */
  shortTransformer () {
    return true
  }

  /**
   * Function that transforms the value.
   *
   * @abstract
   * @returns {*} The property's transformed value.
   */
  transformer () {
    return this.value
  }

  /**
   * Get the property's value. The value is transformed if needed.
   *
   * @returns {*} The property's value (transformed if needed).
   */
  transformedValue () {
    if (this.skipTransformer || this.shortTransformer()) {
      return this.value
    }

    return this.transformer()
  }

  /**
   * Get the property's properties formatted for string output.
   *
   * @returns {string} The property's properties formatted for string output.
   */
  transformedProps () {
    const props = []

    Object.keys(this.props).forEach((key) => {
      props.push(key + '=' + this.props[key])
    })

    return props.join(';')
  }

  /**
   * Get a string representation of the property.
   *
   * @returns {string} String representation of the property.
   */
  toString () {
    const hasProps = Object.keys(this.props).length > 0
    const key = this.constructor.propName + (hasProps ? ';' + this.transformedProps() : '')
    const value = this.transformedValue()

    let keyValuePair = key
    if (value) {
      keyValuePair += ':' + value
    }

    return keyValuePair.match(/.{1,75}/g).join('\r\n ')
  }
}
