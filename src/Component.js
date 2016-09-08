import difference from 'lodash.difference'
import isNode from 'detect-node'
import { MIME_TYPE } from './constants'
import * as properties from './properties'
import {
  IncompatiblePlatformError,
  InvalidComponentError,
  InvalidProvidedComponentError,
  InvalidProvidedPropError
} from './errors'

/**
 * Base class for components.
 */
export default class Component {
  /**
   * Name of the component
   *
   * @abstract
   * @type {string}
   */
  static componentName = 'Component'

  /**
   * String used to separate lines when returning the component as a string.
   *
   * @type {string}
   */
  static separator = '\r\n'

  /**
   * Array of required properties.
   *
   * @abstract
   * @type {string[]}
   */
  static requiredProps = []

  /**
   * Valid properties with appropriate validators.
   *
   * @abstract
   * @type {Object}
   */
  static validProps = {}

  /**
   * Valid components with appropriate validators.
   *
   * @abstract
   * @type {Object}
   */
  static validComponents = {}

  /**
   * Create a new component.
   */
  constructor () {
    /**
     * Prefix used when returning the component as a string.
     *
     * @private
     * @type {string}
     */
    this.prefix = 'BEGIN:' + this.constructor.componentName

    /**
     * Suffix used when returning the component as a string.
     *
     * @private
     * @type {string}
     */
    this.suffix = 'END:' + this.constructor.componentName

    /**
     * Array to store the component's properties.
     *
     * @private
     * @type {Property[]}
     */
    this.internalProps = []

    /**
     * Array to store the component's components.
     *
     * @private
     * @type {Component[]}
     */
    this.internalComponents = []

    /** Issue IE10 fail #22
     *
     * binding of this in the constructor
     */

    this.addProp = this.addProp.bind(this)
    this.props = this.props.bind(this)
    this.propNames = this.propNames.bind(this)
    this.components = this.components.bind(this)
    this.componentNames = this.componentNames.bind(this)
    this.addComponent = this.addComponent.bind(this)
    this.reset = this.reset.bind(this)
    this.validateRequired = this.validateRequired.bind(this)
    this.toString = this.toString.bind(this)
    this.toBlob = this.toBlob.bind(this)
    this.toBase64 = this.toBase64.bind(this)

  }

  /**
   * Get a frozen array of the component's properties.
   *
   * @returns {Property[]} Frozen array of the component's properties.
   */
  props () {
    return Object.freeze(this.internalProps.slice(0))
  }

  /**
   * Get a frozen array of the component's properties' names.
   *
   * @returns {string[]} Frozen array of the component's properties' names.
   */
  propNames () {
    return Object.freeze(this.internalProps.map((prop) => {
      return prop.constructor.propName
    }))
  }

  /**
   * Add a property to the component.
   *
   * @param {string} name - Name of the property (e.g. DTSTAMP).
   * @param {*} [value] - Value of the property.
   * @param {Object} [props={}] - Object of properties for the property. Object keys and values are directly injected.
   * @param {boolean} [skipTransformer=false] - Explicitly determine if the property's value is transformed.
   * @throws {InvalidProvidedPropError} Provided property type is not in the component's list of valid property types.
   * @returns {Property} Configured property instance.
   */
  addProp (name, value, props = {}, skipTransformer = false) {
    const { validProps } = this.constructor

    if (!validProps[name]) {
      throw new InvalidProvidedPropError()
    }

    const PropClass = properties[name] || properties.base(name)
    const prop = new PropClass(value, props, skipTransformer)

    validProps[name].forEach((validator) => {
      validator(this, prop)
    })

    this.internalProps.push(prop)

    return prop
  }

  /**
   * Get a frozen array of the component's components.
   *
   * @returns {Component[]} Frozen array of the component's components.
   */
  components () {
    return Object.freeze(this.internalComponents.slice(0))
  }

  /**
   * Get a frozen array of the component's components' names.
   *
   * @returns {string[]} Frozen array of the component's components' names.
   */
  componentNames () {
    return Object.freeze(this.internalComponents.map((component) => {
      return component.constructor.componentName
    }))
  }

  /**
   * Add a component to the component.
   *
   * @param {Component} component - Configured component to add to the component.
   * @throws {InvalidProvidedComponentError} Provided component type is not in the component's list of valid component types.
   * @returns {Component} Provided component.
   */
  addComponent (component) {
    const { validComponents } = this.constructor
    const { componentName } = component.constructor

    if (!(component instanceof Component)) {
      throw new TypeError('Expected component to be an instance of Component.')
    }

    if (!validComponents[componentName]) {
      throw new InvalidProvidedComponentError()
    }

    validComponents[componentName].forEach((validator) => {
      validator(this, component)
    })

    this.internalComponents.push(component)

    return component
  }

  /**
   * Reset the components components and properties to the default empty state.
   */
  reset () {
    this.internalProps = []
    this.internalComponents = []
  }

  /**
   * Validate if all required properties have been added.
   *
   * @throws {InvalidComponentError} Required properties are missing.
   * @returns {boolean} All required properties are present.
   */
  validateRequired () {
    const { requiredProps } = this.constructor

    if (difference(requiredProps, this.propNames()).length > 0) {
      throw new InvalidComponentError()
    }

    return true
  }

  /**
   * Get a string representation of the component.
   *
   * @returns {string} String representation of the component.
   */
  toString () {
    this.validateRequired()

    const props = this.internalProps.map((prop) => {
      return prop.toString()
    })

    const components = this.internalComponents.map((component) => {
      return component.toString()
    })

    return [
      this.prefix,
      ...props,
      ...components,
      this.suffix
    ].join(this.constructor.separator)
  }

  /**
   * Get a Blob representation of the component. Uses MIME_TYPE as the MIME
   * type.
   *
   * Note: This is a browser-only function unless a Blob polyfill is provided.
   *
   * @throws {IncompatiblePlatformError} Blob is undefined. Usually due to running in Node without a polyfill.
   * @returns {Blob} Blob representation of the component.
   */
  toBlob () {
    if (typeof Blob === 'undefined') {
      throw new IncompatiblePlatformError()
    }

    return new Blob([this.toString()], { type: MIME_TYPE })
  }

  /**
   * Get a Base64 encoded string representation of the component.
   *
   * @returns {String} Base64 encoded string representation of the component.
   */
  toBase64 () {
    const string = this.toString()

    if (isNode) {
      return new Buffer(string).toString('base64')
    } else {
      return window.btoa(string)
    }
  }
}
