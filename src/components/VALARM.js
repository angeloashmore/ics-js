import Component from '../Component'
import { singleton } from './validators'

/**
 * VALARM class.
 *
 * @see https://tools.ietf.org/html/rfc5545#section-3.6.6
 */
export default class VALARM extends Component {
  static componentName = 'VALARM'

  static requiredProps = ['ACTION', 'TRIGGER']

  static validProps = {
    /* eslint-disable key-spacing */
    ACTION:       [singleton()],
    TRIGGER:      [singleton()],

    ATTACH:       [singleton()],
    DESCRIPTION:  [singleton()],
    DURATION:     [singleton()],
    REPEAT:       [singleton()],
    SUMMARY:      [singleton()],

    ATTENDEE:     []
    /* eslint-enable key-spacing */
  }
}
